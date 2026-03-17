import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  delay?: number;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  delay = 0,
}: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-300 group"
      style={{
        animation: `fadeInUp 0.6s ease-out backwards`,
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-2xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            className={`rounded-md transition-all duration-200 ${
              isAdded
                ? "bg-green-600 hover:bg-green-700"
                : "bg-accent hover:bg-accent/90 text-foreground"
            }`}
            size="sm"
          >
            {isAdded ? (
              <span className="flex items-center gap-1">
                <span>✓</span>
              </span>
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
