import fs from 'fs';

const menuItemsData = [
    { category: "Starters", items: [
        { title: "French Fries", price: "৳ 150" },
        { title: "Chicken Fry (1 pcs)", price: "৳ 90" },
        { title: "BBQ Wings (6 pcs)", price: "৳ 199" },
        { title: "Crispy Wings (6 pcs)", price: "৳ 199" },
        { title: "Chicken Lolipop (6 pcs)", price: "৳ 199" },
        { title: "Fride Wonton (6 pcs)", price: "৳ 149" },
        { title: "Cheezy Nachos", price: "৳ 199" },
        { title: "Thai Fried Chicken (4 pcs)", price: "৳ 350" }
    ]},
    { category: "Soup", items: [
        { title: "Thai Thick Soup (1:1 / 1:3)", price: "৳ 120 / 350" },
        { title: "Cream of Mushroom Soup (1:1 / 1:3)", price: "৳ 160 / 450" }
    ]},
    { category: "Meatbox", items: [
        { title: "Chicken Meatbox", price: "৳ 150" },
        { title: "Smoky Sausage Meatbox", price: "৳ 180" },
        { title: "Moho Special BBQ Meatbox", price: "৳ 220" }
    ]},
    { category: "Momos", items: [
        { title: "Chicken Momo (6 pcs)", price: "৳ 150" },
        { title: "Cheese Momo (6 pcs)", price: "৳ 200" },
        { title: "Chili Oil Momo (6 pcs)", price: "৳ 239" }
    ]},
    { category: "Burger", items: [
        { title: "Chicken Burger", price: "৳ 120" },
        { title: "Chicken Cheese Burger", price: "৳ 150" },
        { title: "BBQ Burger", price: "৳ 160" },
        { title: "Moho Special Burger (with Fries & Coke)", price: "৳ 250" },
        { title: "Chicken Sandwich (with Fries & Coke)", price: "৳ 199" }
    ]},
    { category: "Pasta", items: [
        { title: "Pasta Basta", price: "৳ 150" },
        { title: "Creamy Alfredo Pasta", price: "৳ 200" },
        { title: "Moho Special Pasta", price: "৳ 250" }
    ]},
    { category: "Ramen", items: [
        { title: "Spicy Korean Ramen", price: "৳ 250" },
        { title: "Heroshi Ramen", price: "৳ 300" },
        { title: "Moho Special Ramen", price: "৳ 350" }
    ]},
    { category: "Chowmein", items: [
        { title: "Regular Chowmein (1:1 / 1:3)", price: "৳ 120 / 299" },
        { title: "Spicy Chicken Chowmein (1:1 / 1:3)", price: "৳ 150 / 399" },
        { title: "Prawn Chowmein", price: "৳ 199" },
        { title: "Moho Special Chowmein", price: "৳ 199" }
    ]},
    { category: "Rice Bowls", items: [
        { title: "Crispy Chicken Rice Bowl", price: "৳ 130" },
        { title: "BBQ Chicken Rice Bowl", price: "৳ 150" },
        { title: "Moho Special Rice Bowl", price: "৳ 199" }
    ]},
    { category: "Set Menus", items: [
        { title: "Moho Set - 01", description: "Egg fried rice, thai fride chicken (2pcs), Chinese vegetable, and mix salad.", price: "৳ 159" },
        { title: "Moho Set - 02", description: "Egg fried rice,premium chicken katsu, Chinese vegetable, and mix salad.", price: "৳ 180" },
        { title: "BBQ Chicken Platter", description: "Egg fried rice, qutar bbq chicken, Chinese vegetable and raita", price: "৳ 199" },
        { title: "Jamaican Chicken Platter", description: "Egg fried rice, Jamaican chicken, Chinese vegetable, and raita.", price: "৳ 250" },
        { title: "Mongolian Beef Platter", description: "Egg fried rice, Mongolian beef, Chinese vegetable, and raita.", price: "৳ 349" },
        { title: "Moho Special Platter", description: "Mix fride rice,peri peri chicken, BBQ wings (2pcs), chainese vegetable, raita", price: "৳ 299" }
    ]},
    { category: "Pan-Asian", items: [
        { title: "Prawn Tempura (6pcs)", price: "৳ 250" },
        { title: "Street Fried Calamari (1:3)", price: "৳ 299" },
        { title: "Shrimp Roll with chili oil (6pcs)", price: "৳ 320" },
        { title: "Hong Kong Fried Chicken (6pcs)", price: "৳ 320" },
        { title: "Chicken Basil Curry (1:3)", price: "৳ 349" },
        { title: "Chicken Nanban (6pcs)", price: "৳ 210" }
    ]},
    { category: "Main Course", items: [
        { title: "Chinese Mixed Vegetables (1:3)", price: "৳ 180" },
        { title: "Chicken Vegetables (1:3)", price: "৳ 220" },
        { title: "Schezwan Chicken (1:3)", price: "৳ 280" },
        { title: "Prawn Masala (1:3)", price: "৳ 320" },
        { title: "Chicken Mongolian Curry (1:3)", price: "৳ 280" },
        { title: "Chicken Chilli Onion (1:3)", price: "৳ 280" },
        { title: "Egg Fried Rice (1:3)", price: "৳ 249" },
        { title: "Moho Special Fried Rice (1:3)", price: "৳ 349" }
    ]},
    { category: "Salad", items: [
        { title: "Chicken Cashew Nut Salad", price: "৳ 349" },
        { title: "Grilled Chicken Salad", price: "৳ 299" }
    ]},
    { category: "Kebab & Tandoori", items: [
        { title: "Chicken Boti Kebab", price: "৳ 180" },
        { title: "Reshmi Kebab", price: "৳ 180" },
        { title: "Hariyali Kebab", price: "৳ 180" },
        { title: "Chicken Tandoori", price: "৳ 199" },
        { title: "Smokey BBQ Fish", price: "৳ 299" },
        { title: "Tangdi Kebab with Makhanwala Gravy (6 pcs)", price: "৳ 420" },
        { title: "Moho Special Platter (4-in-1 Combo)", price: "৳ 699" }
    ]},
    { category: "Mocktails", items: [
        { title: "Virgin Mojito", price: "৳ 149" },
        { title: "Blue Moon", price: "৳ 179" },
        { title: "Tangy Orange", price: "৳ 179" },
        { title: "Strawberry Blast", price: "৳ 179" }
    ]},
    { category: "Cold Coffee & Shakes", items: [
        { title: "Black Coffee", price: "৳ 40" },
        { title: "Ragular Coffee", price: "৳ 90" },
        { title: "Choco Cold Coffee", price: "৳ 120" },
        { title: "KitKat Crasher", price: "৳ 179" },
        { title: "Oreo Crasher", price: "৳ 179" },
        { title: "Vanilla Milkshake", price: "৳ 149" }
    ]},
    { category: "Signature Desserts", items: [
        { title: "Brownie Bliss with Vanilla Ice Cream", description: "Warm Chocolate Brownie, Vanilla Ice Cream, Chocolate Drizzle", price: "৳ 249" },
        { title: "Molten Chocolate Lava Cake", description: "Rich Chocolate Cake, Gooey Chocolate Center, Chocolate Sauce", price: "৳ 199" },
        { title: "Classic Creamy Pudding", description: "Silky Smooth Pudding, Caramel Glaze, Delicate Sweetness", price: "৳ 120" }
    ]}
];

const categories = ["All", ...menuItemsData.map(c => c.category)];

let flatItems = [];
let idCounter = 1;
for (const cat of menuItemsData) {
    for (const item of cat.items) {
        flatItems.push({
            id: idCounter++,
            category: cat.category,
            title: item.title,
            description: item.description || "",
            price: item.price,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        });
    }
}

const fileContent = `import { useState } from "react";
import ProductCard from "../components/ProductCard";

const menuItems = ${JSON.stringify(flatItems, null, 4)};

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

export default Products
\`;

fs.writeFileSync('d:/Web Dev/gadgetshop-client/src/pages/Products.jsx', fileContent);
console.log("Updated Products.jsx");
