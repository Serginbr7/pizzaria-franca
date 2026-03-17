import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 px-4 md:px-6 -mx-4 md:-mx-6 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={activeCategory === category.id ? "default" : "outline"}
          className={`whitespace-nowrap rounded-full transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-primary text-white border-primary"
              : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </Button>
      ))}
    </div>
  );
}
