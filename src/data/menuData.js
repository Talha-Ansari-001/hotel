export const menuData = [
  // Starters
  {
    id: 1,
    name: "Truffle Mushroom Bruschetta",
    price: 350,
    description: "Toasted artisanal bread topped with sautéed wild mushrooms and truffle oil drizzle.",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=800",
    category: "Starters",
    isVeg: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Calamari Fritti",
    price: 450,
    description: "Crispy fried squid rings served with spicy marinara sauce and lemon wedges.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    category: "Starters",
    isVeg: false
  },
  {
    id: 3,
    name: "Paneer Tikka Angare",
    price: 380,
    description: "Clay-oven roasted cottage cheese marinated in spicy yogurt and red chilies.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800",
    category: "Starters",
    isVeg: true
  },
  {
    id: 4,
    name: "Crispy Honey Chili Lotus Stem",
    price: 320,
    description: "Thinly sliced lotus stem tossed in a sweet and spicy honey chili glaze.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: "Starters",
    isVeg: true
  },
  {
    id: 5,
    name: "Chicken Satay",
    price: 420,
    description: "Grilled chicken skewers served with authentic peanut dipping sauce.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800",
    category: "Starters",
    isVeg: false
  },

  // Main Course
  {
    id: 6,
    name: "Butter Chicken Masala",
    price: 550,
    description: "Tender chicken pieces simmered in a rich, creamy tomato and butter gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    category: "Main Course",
    isVeg: false,
    isPopular: true
  },
  {
    id: 7,
    name: "Dal Makhani Bukhaara",
    price: 450,
    description: "Slow-cooked black lentils overnight with butter, cream, and traditional spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    category: "Main Course",
    isVeg: true
  },
  {
    id: 8,
    name: "Lamb Rogan Josh",
    price: 650,
    description: "Traditional Kashmiri style lamb curry cooked in authentic spices and yogurt.",
    image: "/images/lamb.png",
    category: "Main Course",
    isVeg: false
  },
  {
    id: 9,
    name: "Truffle Parmesan Risotto",
    price: 520,
    description: "Creamy arborio rice cooked with wild mushrooms and topped with fresh parmesan.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    category: "Main Course",
    isVeg: true
  },
  {
    id: 10,
    name: "Pan Seared Salmon",
    price: 850,
    description: "Atlantic salmon served with asparagus, mashed potatoes, and lemon butter sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    category: "Main Course",
    isVeg: false
  },
  {
    id: 11,
    name: "Hyderabadi Dum Biryani (Veg)",
    price: 420,
    description: "Fragrant basmati rice layered with seasonal vegetables and exotic spices.",
    image: "/images/hyd.png",
    category: "Main Course",
    isVeg: true
  },

  // Desserts
  {
    id: 12,
    name: "Molten Chocolate Lava Cake",
    price: 350,
    description: "Warm chocolate cake with a gooey center, served with vanilla bean ice cream.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800",
    category: "Desserts",
    isVeg: true,
    isPopular: true
  },
  {
    id: 13,
    name: "Classic New York Cheesecake",
    price: 380,
    description: "Rich and creamy cheesecake with a graham cracker crust and berry compote.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
    category: "Desserts",
    isVeg: true
  },
  {
    id: 14,
    name: "Gulab Jamun with Rabri",
    price: 280,
    description: "Golden milk solids dumplings served with thickened flavored milk and nuts.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    category: "Desserts",
    isVeg: true
  },
  {
    id: 15,
    name: "Tiramisu",
    price: 420,
    description: "Authentic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
    category: "Desserts",
    isVeg: true
  },

  // Beverages
  {
    id: 16,
    name: "Masala Tea",
    price: 120,
    description: "Authentic Indian spiced tea brewed with ginger, cardamom, and tea leaves.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800",
    category: "Beverages",
    isVeg: true,
    isPopular: true
  },
  {
    id: 17,
    name: "Classic Mojito",
    price: 250,
    description: "Refreshing blend of fresh mint, lime, sugar, and sparkling soda.",
    image: "/images/mojito.png",
    category: "Beverages",
    isVeg: true
  },
  {
    id: 18,
    name: "Cold Brew Coffee",
    price: 220,
    description: "Smooth, 18-hour slow-steeped cold coffee served over ice.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Beverages",
    isVeg: true
  },
  {
    id: 19,
    name: "Mango Lassi",
    price: 180,
    description: "Traditional yogurt-based drink blended with fresh mango pulp.",
    image: "/images/mango.png",
    category: "Beverages",
    isVeg: true
  },
  {
    id: 20,
    name: "Red Wine (Glass)",
    price: 450,
    description: "Premium selection of house red wine with notes of dark berries.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
    category: "Beverages",
    isVeg: true
  }
];
