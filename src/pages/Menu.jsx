import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

const categories = [
  { id: 'all', label: '🌟 All' },
  { id: 'starters', label: '🌿 Starters' },
  { id: 'mains', label: '🍕 Mains' },
  { id: 'sandwiches', label: '🥪 Sandwiches' },
  { id: 'beverages', label: '☕ Beverages' },
  { id: 'desserts', label: '🍫 Desserts' }
];

const menuItems = [
  { name: 'Hobo Nachos', desc: 'Loaded corn nachos with jalapeños, cheese sauce & salsa', category: 'starters', tag: '🔥 Popular' },
  { name: 'Garlic Bread Bruschetta', desc: 'Crispy garlic bread with fresh tomato & basil', category: 'starters' },
  { name: 'Loaded Fries', desc: 'Seasoned fries with cheese, herbs & special hobo sauce', category: 'starters', tag: '⭐ Must Try' },
  { name: 'Paneer Tikka Skewers', desc: 'Tandoori marinated paneer grilled to perfection', category: 'starters' },
  { name: 'Corn & Cheese Balls', desc: 'Crispy golden balls stuffed with sweet corn & cheese', category: 'starters' },

  { name: 'Margherita Pizza', desc: 'Classic thin crust with mozzarella, basil & tomato sauce', category: 'mains', tag: '🏆 Bestseller' },
  { name: 'Pesto Pasta', desc: 'Penne in fresh basil pesto with cherry tomatoes', category: 'mains' },
  { name: 'Alfredo Pasta', desc: 'Creamy white sauce pasta with mushrooms & herbs', category: 'mains', tag: '🔥 Popular' },
  { name: 'BBQ Paneer Pizza', desc: 'Smoky BBQ sauce, paneer chunks & bell peppers', category: 'mains' },
  { name: 'Mexican Rice Bowl', desc: 'Spiced rice with beans, corn, salsa & sour cream', category: 'mains' },

  { name: 'Classic Club Sandwich', desc: 'Triple-decker with grilled veggies, cheese & sauces', category: 'sandwiches' },
  { name: 'Hobo Special Burger', desc: 'Aloo tikki burger with special sauce & crispy onions', category: 'sandwiches', tag: '🏠 House Special' },
  { name: 'Grilled Cheese Melt', desc: 'Four cheese grilled sandwich with herbs', category: 'sandwiches' },
  { name: 'Paneer Wrap', desc: 'Spiced paneer in a soft tortilla with mint chutney', category: 'sandwiches' },

  { name: 'Cold Coffee', desc: 'Blended iced coffee with a frothy top', category: 'beverages', tag: '🏆 Bestseller' },
  { name: 'Mango Smoothie', desc: 'Fresh alphonso mango blended with yogurt', category: 'beverages' },
  { name: 'Masala Chai', desc: 'Traditional spiced tea brewed to perfection', category: 'beverages' },
  { name: 'Berry Blast Shake', desc: 'Mixed berries with vanilla ice cream', category: 'beverages' },
  { name: 'Fresh Lime Soda', desc: 'Refreshing lime soda — sweet, salty or mixed', category: 'beverages' },
  { name: 'Hot Chocolate', desc: 'Rich Belgian chocolate with whipped cream', category: 'beverages' },

  { name: 'Brownie Sundae', desc: 'Warm chocolate brownie with vanilla ice cream & fudge', category: 'desserts', tag: '⭐ Must Try' },
  { name: 'Churros', desc: 'Crispy cinnamon churros with chocolate dipping sauce', category: 'desserts' },
  { name: 'Nutella Waffle', desc: 'Crispy Belgian waffle drizzled with Nutella & fruits', category: 'desserts' }
];

export default function MenuPage() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? menuItems
      : menuItems.filter((i) => i.category === active);

  return (
    <div className="pt-24 pb-20 groovy-bg">

      {/* HERO */}
      <div className="text-center px-4 py-14">
        <span className="font-handwritten text-secondary text-3xl block mb-2">
          pure veg goodness 🌿
        </span>

        <h1 className="font-heading text-6xl md:text-8xl text-[#2a0f3f]">
          Our Menu
        </h1>
      </div>

      {/* FILTER */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full border-2 border-[#2a0f3f] font-semibold transition-all ${
                active === cat.id
                  ? "bg-orange-500 text-white shadow-[4px_4px_0_#2a0f3f]"
                  : "bg-white text-[#2a0f3f] hover:scale-105"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="retro-card p-6"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="font-heading text-lg text-[#2a0f3f]">
                      {item.name}
                    </h3>

                    {item.tag && (
                      <span className="text-xs px-2 py-1 bg-yellow-300 rounded-full border border-[#2a0f3f] font-bold">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#2a0f3f]/70">
                    {item.desc}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">
                      100% Veg
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* NOTE */}
      <div className="max-w-2xl mx-auto px-4 mt-16 text-center">
        <div className="retro-card p-6 bg-yellow-100">
          <p className="font-handwritten text-2xl text-orange-500 mb-2">
            A note from the kitchen ♡
          </p>
          <p className="text-sm text-[#2a0f3f]/70">
            We serve fresh, locally sourced ingredients every day.
            Menu items may vary based on availability — just ask our team!
          </p>
        </div>
      </div>

    </div>
  );
}