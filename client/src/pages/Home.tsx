import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
}

const categories: Category[] = [
  { id: "pizzas", label: "Pizzas", icon: "🍕" },
  { id: "bebidas", label: "Bebidas", icon: "🥤" },
  { id: "sobremesas", label: "Sobremesas", icon: "🍰" },
  { id: "porcoes", label: "Porções", icon: "🍟" },
];

const products: Product[] = [
  {
    id: "1",
    name: "Margherita Clássica",
    description: "Molho artesanal, manjericão fresco e mussarela premium.",
    price: 45.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663421651881/kJP6GeF3uSdshSCLYE9g7P/hero-pizzaria-AKHkCdeqJcPrNfQdm9hvAx.webp",
    category: "pizzas",
  },
  {
    id: "2",
    name: "Pepperoni Especial",
    description: "Mussarela, pepperoni fatiado e orégano chileno.",
    price: 52.0,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663421651881/kJP6GeF3uSdshSCLYE9g7P/pizza-pepperoni-3TWAxC3AW5zCXoi9XTZEyc.webp",
    category: "pizzas",
  },
  {
    id: "3",
    name: "Frango com Catupiry",
    description: "Frango desfiado temperado com legítimo Catupiry.",
    price: 49.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663421651881/kJP6GeF3uSdshSCLYE9g7P/pizza-frango-catupiry-72wCzHQCtpdwSNAjYSfQBp.webp",
    category: "pizzas",
  },
  {
    id: "4",
    name: "Coca-Cola 2L",
    description: "Refrigerante gelado para acompanhar sua pizza.",
    price: 12.0,
    image:
      "https://images.unsplash.com/photo-1554866585-acbb2f46b34c?auto=format&fit=crop&w=300&q=80",
    category: "bebidas",
  },
  {
    id: "5",
    name: "Suco Natural Laranja",
    description: "Suco fresco espremido na hora.",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=300&q=80",
    category: "bebidas",
  },
  {
    id: "6",
    name: "Brownie Chocolate",
    description: "Brownie quente com sorvete de baunilha.",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
    category: "sobremesas",
  },
  {
    id: "7",
    name: "Tiramisu Italiano",
    description: "Tradicional sobremesa italiana com mascarpone.",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=300&q=80",
    category: "sobremesas",
  },
  {
    id: "8",
    name: "Batata Frita Premium",
    description: "Batata frita crocante com sal de ervas.",
    price: 15.0,
    image:
      "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e2b?auto=format&fit=crop&w=300&q=80",
    category: "porcoes",
  },
  {
    id: "9",
    name: "Asas de Frango",
    description: "Asas de frango crocantes com molho barbecue.",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80",
    category: "porcoes",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("pizzas");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Category Tabs */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 py-4">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Products Grid */}
      <main className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 100}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum produto disponível nesta categoria.
            </p>
          </div>
        )}
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer Spacing */}
      <div className="h-24" />
    </div>
  );
}
