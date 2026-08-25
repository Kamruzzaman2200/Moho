const fs = require('fs');

const rawText = `STARTER'S
French Fries - 150
Chicken Fry (1 pcs) - 90
BBQ Wings (6 pcs) - 199
Crispy Wings (6 pcs) - 199
Chicken Lolipop (6 pcs) - 199
Fride Wonton (6 pcs) - 149
Cheezy Nachos - 199
Thai Fried Chicken (4 pcs) - 350

SOUP
Thai Thick Soup (1:1 / 1:3) - 120 / 350
Cream of Mushroom Soup (1:1 / 1:3) - 160 / 450

BURGER
Chicken Burger - 120
Chicken Cheese Burger - 150
BBQ Burger - 160
Moho Special Burger (with Fries & Coke) - 250
Chicken Sandwich (with Fries & Coke) - 199

MOMOS
Chicken Momo (6 pcs) - 150
Cheese Momo (6 pcs) - 200
Chili Oil Momo (6 pcs) - 239

MEATBOX
Chicken Meatbox - 150
Smoky Sausage Meatbox - 180
Moho Special BBQ Meatbox - 220

PASTA
Pasta Basta - 150
Creamy Alfredo Pasta - 200
Moho Special Pasta - 250

RAMEN
Spicy Korean Ramen - 250
Heroshi Ramen - 300
Moho Special Ramen - 350

CHOWMEIN
Regular Chowmein (1:1 / 1:3) - 120 / 299
Spicy Chicken Chowmein (1:1 / 1:3) - 150 / 399
Prawn Chowmein - 199
Moho Special Chowmein - 199

RICE BOWLS
Crispy Chicken Rice Bowl - 130
BBQ Chicken Rice Bowl - 150
Moho Special Rice Bowl - 199

SET MENUS
Moho Set - 01 - 159
Egg fried rice, thai fride chicken (2pcs), Chinese vegetable, and mix salad.
Moho Set - 02 - 180
Egg fried rice, premium chicken katsu, Chinese vegetable, and mix salad.
BBQ Chicken Platter - 199
Egg fried rice, guitar bbq chicken, Chinese vegetable and raita.
Jamaican Chicken Platter - 250
Egg fried rice, Jamaican chicken, Chinese vegetable, and raita.
Mongolian Beef Platter - 349
Egg fried rice, Mongolian beef, Chinese vegetable, and raita.
Moho Special Platter - 299
Mix fried rice, peri peri chicken, BBQ wings (2pcs), Chinese vegetable, raita.

PAN-ASIAN
Prawn Tempura (6pcs) - 250
Street Fried Calamari (1:3) - 299
Shrimp Roll with chili oil (6pcs) - 320
Hong Kong Fried Chicken (6pcs) - 320
Chicken Basil Curry (1:3) - 349
Chicken Nanban (6pcs) - 210

MAIN COURSE
Chinese Mixed Vegetables (1:3) - 180
Chicken Vegetables (1:3) - 220
Schezwan Chicken (1:3) - 280
Prawn Masala (1:3) - 320
Chicken Mongolian Curry (1:3) - 280
Chicken Chilli Onion (1:3) - 280
Egg Fried Rice (1:3) - 249
Moho Special Fried Rice (1:3) - 349

SALAD
Chicken Cashew Nut Salad - 349
Grilled Chicken Salad - 299

KEBAB & TANDOORI
Chicken Boti Kebab - 180
Reshmi Kebab - 180
Hariyali Kebab - 180
Chicken Tandoori - 199
Smokey BBQ Fish - 299
Tangdi Kebab with Makhanwala Gravy (6 pcs) - 420
Moho Special Platter (4-in-1 Combo) - 699

MOCKTAILS
Virgin Mojito - 149
Blue Moon - 179
Tangy Orange - 179
Strawberry Blast - 179

COLD COFFEE & SHAKES
Black Coffee - 40
Regular Coffee - 90
Choco Cold Coffee - 120
KitKat Crasher - 179
Oreo Crasher - 179
Vanilla Milkshake - 149

MOHO SPECIAL
Brownie Bliss with Vanilla Ice Cream - 249
Warm Chocolate Brownie • Vanilla Ice Cream • Chocolate Drizzle
Molten Chocolate Lava Cake - 199
Rich Chocolate Cake • Gooey Chocolate Center • Chocolate Sauce
Classic Creamy Pudding - 120
Silky Smooth Pudding • Caramel Glaze • Delicate Sweetness`;

// Image mapping logic
const categoryImages = {
  "STARTER'S": ["https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&q=80", "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80"],
  "SOUP": ["https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80"],
  "BURGER": ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"],
  "MOMOS": ["https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80"],
  "MEATBOX": ["https://images.unsplash.com/photo-1606415949581-91f137eb1ee7?w=800&q=80"],
  "PASTA": ["https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80", "https://images.unsplash.com/photo-1516685018646-54919852fdc3?w=800&q=80"],
  "RAMEN": ["https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&q=80", "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80"],
  "CHOWMEIN": ["https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80"],
  "RICE BOWLS": ["https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80"],
  "SET MENUS": ["https://images.unsplash.com/photo-1544025162-8350b91e9f45?w=800&q=80", "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80"],
  "PAN-ASIAN": ["https://images.unsplash.com/photo-1548869206-93b036288d7e?w=800&q=80"],
  "MAIN COURSE": ["https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80"],
  "SALAD": ["https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"],
  "KEBAB & TANDOORI": ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"],
  "MOCKTAILS": ["https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80", "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"],
  "COLD COFFEE & SHAKES": ["https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", "https://images.unsplash.com/photo-1572490122747-3968b75bf699?w=800&q=80"],
  "MOHO SPECIAL": ["https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80", "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80"],
};

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const menuItems = [];
let currentCategory = "";
let currentItem = null;
let id = 1;

for (let line of lines) {
  if (!line.includes('-') && line === line.toUpperCase()) {
    currentCategory = line;
    continue;
  }
  
  if (line.includes(' - ')) {
    const parts = line.split(' - ');
    const priceStr = parts.pop();
    const titleStr = parts.join(' - ');
    
    // Get random image for category
    const catImages = categoryImages[currentCategory] || ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"];
    const image = catImages[id % catImages.length];

    // Some formatting
    let formattedCategory = currentCategory.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
    if (formattedCategory === "Starter's") formattedCategory = "Starters";
    if (formattedCategory === "Moho Special") formattedCategory = "Moho Special";

    currentItem = {
      id: id++,
      category: formattedCategory,
      title: titleStr,
      description: "",
      price: `৳ ${priceStr}`,
      image: image
    };
    menuItems.push(currentItem);
  } else if (currentItem) {
    // Append to description if it doesn't have a dash (which means it's the description line)
    if (currentItem.description) {
        currentItem.description += " " + line;
    } else {
        currentItem.description = line;
    }
  }
}

const categories = ["All", ...new Set(menuItems.map(m => m.category))];

const fileContent = `import { useState } from "react";
import ProductCard from "../components/ProductCard";

const menuItems = ${JSON.stringify(menuItems, null, 4)};

const categories = ${JSON.stringify(categories)};

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All" 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="bg-[#f5f0eb] min-h-screen pb-20">
            {/* Hero Header */}
            <div className="relative bg-[#2d3e2f] py-16 sm:py-24 overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a574] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4a574] rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.4em] mb-4 font-semibold">Taste the Magic</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-md" style={{ fontFamily: "'Georgia', serif" }}>
                        Our Full Menu
                    </h1>
                    <div className="w-16 sm:w-24 h-[2px] bg-[#d4a574] mx-auto mb-6"></div>
                    <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
                        Explore our carefully curated selection of dishes, ranging from light appetizers to decadent desserts. Every dish is a celebration of authentic flavor and fresh ingredients.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
                
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={\`px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm \${
                                activeCategory === category 
                                    ? "bg-[#2d3e2f] text-white shadow-lg shadow-[#2d3e2f]/20 transform scale-105" 
                                    : "bg-white text-[#2d3e2f] border border-[#2d3e2f]/10 hover:border-[#d4a574] hover:text-[#d4a574] hover:shadow-md"
                            }\`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {filteredItems.map(item => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-[#2d3e2f]/5">
                        <p className="text-[#2d3e2f]/50 text-lg font-light">No dishes found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products;
`;;

fs.writeFileSync('d:/Web Dev/gadgetshop-client/src/pages/Products.jsx', fileContent);
console.log('Done writing Products.jsx');
