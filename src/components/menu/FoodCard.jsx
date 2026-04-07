import React, { memo } from 'react';
import { Plus, Leaf, Flame, Sparkles } from 'lucide-react';
import { useCart } from "../../context/CartContext";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const FoodCard = memo(({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] transition-all duration-500 group border border-gray-100/50 relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[2rem]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.isVeg ? (
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-green-50">
              <Leaf className="w-4 h-4 text-green-600" />
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-red-50">
              <Flame className="w-4 h-4 text-red-600" />
            </div>
          )}
          {item.isPopular && (
            <Badge variant="premium" className="shadow-xl">
              <Sparkles className="w-3 h-3 mr-1 inline-block" />
              Popular
            </Badge>
          )}
        </div>

        <div className="absolute bottom-4 right-4 translate-y-16 group-hover:translate-y-0 transition-all duration-500 delay-75 hidden lg:block">
          <Button
            onClick={() => addToCart(item)}
            size="icon"
            className="rounded-[1.2rem] h-14 w-14 shadow-2xl"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-7 h-7" />
          </Button>
        </div>
      </div>

      <div className="p-6 pt-2 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
              {item.name}
            </h3>
            <Badge variant="secondary" className="bg-gray-50 border-gray-100 text-gray-400">
              {item.category}
            </Badge>
          </div>
          <span className="font-bold text-primary text-xl tabular-nums">₹{item.price}</span>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed font-medium">
          {item.description}
        </p>

        <div className="lg:hidden pt-2">
          <Button
            onClick={() => addToCart(item)}
            variant="secondary"
            className="w-full rounded-2xl py-4 shadow-sm active:scale-95"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-4 h-4 mr-2" /> Add to Order
          </Button>
        </div>
      </div>
    </motion.div>
  );
});

FoodCard.displayName = 'FoodCard';

export default FoodCard;
