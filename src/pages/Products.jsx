import { useState } from "react";
import ProductCard from "../components/ProductCard";

const menuItems = [
    {
        "id": 1,
        "category": "Starters",
        "title": "French Fries",
        "description": "",
        "price": "৳ 150",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=1"
    },
    {
        "id": 2,
        "category": "Starters",
        "title": "Chicken Fry (1 pcs)",
        "description": "",
        "price": "৳ 90",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=2"
    },
    {
        "id": 3,
        "category": "Starters",
        "title": "BBQ Wings (6 pcs)",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=3"
    },
    {
        "id": 4,
        "category": "Starters",
        "title": "Crispy Wings (6 pcs)",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=4"
    },
    {
        "id": 5,
        "category": "Starters",
        "title": "Chicken Lolipop (6 pcs)",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=5"
    },
    {
        "id": 6,
        "category": "Starters",
        "title": "Fride Wonton (6 pcs)",
        "description": "",
        "price": "৳ 149",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=6"
    },
    {
        "id": 7,
        "category": "Starters",
        "title": "Cheezy Nachos",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=7"
    },
    {
        "id": 8,
        "category": "Starters",
        "title": "Thai Fried Chicken (4 pcs)",
        "description": "",
        "price": "৳ 350",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=8"
    },
    {
        "id": 9,
        "category": "Soup",
        "title": "Thai Thick Soup (1:1 / 1:3)",
        "description": "",
        "price": "৳ 120 / 350",
        "image": "https://loremflickr.com/800/600/soup,dish/all?lock=9"
    },
    {
        "id": 10,
        "category": "Soup",
        "title": "Cream of Mushroom Soup (1:1 / 1:3)",
        "description": "",
        "price": "৳ 160 / 450",
        "image": "https://loremflickr.com/800/600/soup,dish/all?lock=10"
    },
    {
        "id": 11,
        "category": "Burger",
        "title": "Chicken Burger",
        "description": "",
        "price": "৳ 120",
        "image": "https://loremflickr.com/800/600/burger,dish/all?lock=11"
    },
    {
        "id": 12,
        "category": "Burger",
        "title": "Chicken Cheese Burger",
        "description": "",
        "price": "৳ 150",
        "image": "https://loremflickr.com/800/600/burger,dish/all?lock=12"
    },
    {
        "id": 13,
        "category": "Burger",
        "title": "BBQ Burger",
        "description": "",
        "price": "৳ 160",
        "image": "https://loremflickr.com/800/600/burger,dish/all?lock=13"
    },
    {
        "id": 14,
        "category": "Burger",
        "title": "Moho Special Burger (with Fries & Coke)",
        "description": "",
        "price": "৳ 250",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=14"
    },
    {
        "id": 15,
        "category": "Burger",
        "title": "Chicken Sandwich (with Fries & Coke)",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=15"
    },
    {
        "id": 16,
        "category": "Momos",
        "title": "Chicken Momo (6 pcs)",
        "description": "",
        "price": "৳ 150",
        "image": "https://loremflickr.com/800/600/dumplings,dish/all?lock=16"
    },
    {
        "id": 17,
        "category": "Momos",
        "title": "Cheese Momo (6 pcs)",
        "description": "",
        "price": "৳ 200",
        "image": "https://loremflickr.com/800/600/dumplings,dish/all?lock=17"
    },
    {
        "id": 18,
        "category": "Momos",
        "title": "Chili Oil Momo (6 pcs)",
        "description": "",
        "price": "৳ 239",
        "image": "https://loremflickr.com/800/600/dumplings,dish/all?lock=18"
    },
    {
        "id": 19,
        "category": "Meatbox",
        "title": "Chicken Meatbox",
        "description": "",
        "price": "৳ 150",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=19"
    },
    {
        "id": 20,
        "category": "Meatbox",
        "title": "Smoky Sausage Meatbox",
        "description": "",
        "price": "৳ 180",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=20"
    },
    {
        "id": 21,
        "category": "Meatbox",
        "title": "Moho Special BBQ Meatbox",
        "description": "",
        "price": "৳ 220",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=21"
    },
    {
        "id": 22,
        "category": "Pasta",
        "title": "Pasta Basta",
        "description": "",
        "price": "৳ 150",
        "image": "https://loremflickr.com/800/600/pasta,dish/all?lock=22"
    },
    {
        "id": 23,
        "category": "Pasta",
        "title": "Creamy Alfredo Pasta",
        "description": "",
        "price": "৳ 200",
        "image": "https://loremflickr.com/800/600/pasta,dish/all?lock=23"
    },
    {
        "id": 24,
        "category": "Pasta",
        "title": "Moho Special Pasta",
        "description": "",
        "price": "৳ 250",
        "image": "https://loremflickr.com/800/600/pasta,dish/all?lock=24"
    },
    {
        "id": 25,
        "category": "Ramen",
        "title": "Spicy Korean Ramen",
        "description": "",
        "price": "৳ 250",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=25"
    },
    {
        "id": 26,
        "category": "Ramen",
        "title": "Heroshi Ramen",
        "description": "",
        "price": "৳ 300",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=26"
    },
    {
        "id": 27,
        "category": "Ramen",
        "title": "Moho Special Ramen",
        "description": "",
        "price": "৳ 350",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=27"
    },
    {
        "id": 28,
        "category": "Chowmein",
        "title": "Regular Chowmein (1:1 / 1:3)",
        "description": "",
        "price": "৳ 120 / 299",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=28"
    },
    {
        "id": 29,
        "category": "Chowmein",
        "title": "Spicy Chicken Chowmein (1:1 / 1:3)",
        "description": "",
        "price": "৳ 150 / 399",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=29"
    },
    {
        "id": 30,
        "category": "Chowmein",
        "title": "Prawn Chowmein",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=30"
    },
    {
        "id": 31,
        "category": "Chowmein",
        "title": "Moho Special Chowmein",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=31"
    },
    {
        "id": 32,
        "category": "Rice Bowls",
        "title": "Crispy Chicken Rice Bowl",
        "description": "",
        "price": "৳ 130",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=32"
    },
    {
        "id": 33,
        "category": "Rice Bowls",
        "title": "BBQ Chicken Rice Bowl",
        "description": "",
        "price": "৳ 150",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=33"
    },
    {
        "id": 34,
        "category": "Rice Bowls",
        "title": "Moho Special Rice Bowl",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/rice,dish/all?lock=34"
    },
    {
        "id": 35,
        "category": "Set Menus",
        "title": "Moho Set - 01",
        "description": "Egg fried rice, thai fride chicken (2pcs), Chinese vegetable, and mix salad.",
        "price": "৳ 159",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=35"
    },
    {
        "id": 36,
        "category": "Set Menus",
        "title": "Moho Set - 02",
        "description": "Egg fried rice, premium chicken katsu, Chinese vegetable, and mix salad.",
        "price": "৳ 180",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=36"
    },
    {
        "id": 37,
        "category": "Set Menus",
        "title": "BBQ Chicken Platter",
        "description": "Egg fried rice, guitar bbq chicken, Chinese vegetable and raita.",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=37"
    },
    {
        "id": 38,
        "category": "Set Menus",
        "title": "Jamaican Chicken Platter",
        "description": "Egg fried rice, Jamaican chicken, Chinese vegetable, and raita.",
        "price": "৳ 250",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=38"
    },
    {
        "id": 39,
        "category": "Set Menus",
        "title": "Mongolian Beef Platter",
        "description": "Egg fried rice, Mongolian beef, Chinese vegetable, and raita.",
        "price": "৳ 349",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=39"
    },
    {
        "id": 40,
        "category": "Set Menus",
        "title": "Moho Special Platter",
        "description": "Mix fried rice, peri peri chicken, BBQ wings (2pcs), Chinese vegetable, raita. PAN-ASIAN",
        "price": "৳ 299",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=40"
    },
    {
        "id": 41,
        "category": "Set Menus",
        "title": "Prawn Tempura (6pcs)",
        "description": "",
        "price": "৳ 250",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=41"
    },
    {
        "id": 42,
        "category": "Set Menus",
        "title": "Street Fried Calamari (1:3)",
        "description": "",
        "price": "৳ 299",
        "image": "https://loremflickr.com/800/600/appetizer,dish/all?lock=42"
    },
    {
        "id": 43,
        "category": "Set Menus",
        "title": "Shrimp Roll with chili oil (6pcs)",
        "description": "",
        "price": "৳ 320",
        "image": "https://loremflickr.com/800/600/noodles,dish/all?lock=43"
    },
    {
        "id": 44,
        "category": "Set Menus",
        "title": "Hong Kong Fried Chicken (6pcs)",
        "description": "",
        "price": "৳ 320",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=44"
    },
    {
        "id": 45,
        "category": "Set Menus",
        "title": "Chicken Basil Curry (1:3)",
        "description": "",
        "price": "৳ 349",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=45"
    },
    {
        "id": 46,
        "category": "Set Menus",
        "title": "Chicken Nanban (6pcs)",
        "description": "",
        "price": "৳ 210",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=46"
    },
    {
        "id": 47,
        "category": "Main Course",
        "title": "Chinese Mixed Vegetables (1:3)",
        "description": "",
        "price": "৳ 180",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=47"
    },
    {
        "id": 48,
        "category": "Main Course",
        "title": "Chicken Vegetables (1:3)",
        "description": "",
        "price": "৳ 220",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=48"
    },
    {
        "id": 49,
        "category": "Main Course",
        "title": "Schezwan Chicken (1:3)",
        "description": "",
        "price": "৳ 280",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=49"
    },
    {
        "id": 50,
        "category": "Main Course",
        "title": "Prawn Masala (1:3)",
        "description": "",
        "price": "৳ 320",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=50"
    },
    {
        "id": 51,
        "category": "Main Course",
        "title": "Chicken Mongolian Curry (1:3)",
        "description": "",
        "price": "৳ 280",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=51"
    },
    {
        "id": 52,
        "category": "Main Course",
        "title": "Chicken Chilli Onion (1:3)",
        "description": "",
        "price": "৳ 280",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=52"
    },
    {
        "id": 53,
        "category": "Main Course",
        "title": "Egg Fried Rice (1:3)",
        "description": "",
        "price": "৳ 249",
        "image": "https://loremflickr.com/800/600/rice,dish/all?lock=53"
    },
    {
        "id": 54,
        "category": "Main Course",
        "title": "Moho Special Fried Rice (1:3)",
        "description": "",
        "price": "৳ 349",
        "image": "https://loremflickr.com/800/600/rice,dish/all?lock=54"
    },
    {
        "id": 55,
        "category": "Salad",
        "title": "Chicken Cashew Nut Salad",
        "description": "",
        "price": "৳ 349",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=55"
    },
    {
        "id": 56,
        "category": "Salad",
        "title": "Grilled Chicken Salad",
        "description": "",
        "price": "৳ 299",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=56"
    },
    {
        "id": 57,
        "category": "Kebab & Tandoori",
        "title": "Chicken Boti Kebab",
        "description": "",
        "price": "৳ 180",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=57"
    },
    {
        "id": 58,
        "category": "Kebab & Tandoori",
        "title": "Reshmi Kebab",
        "description": "",
        "price": "৳ 180",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=58"
    },
    {
        "id": 59,
        "category": "Kebab & Tandoori",
        "title": "Hariyali Kebab",
        "description": "",
        "price": "৳ 180",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=59"
    },
    {
        "id": 60,
        "category": "Kebab & Tandoori",
        "title": "Chicken Tandoori",
        "description": "",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=60"
    },
    {
        "id": 61,
        "category": "Kebab & Tandoori",
        "title": "Smokey BBQ Fish",
        "description": "",
        "price": "৳ 299",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=61"
    },
    {
        "id": 62,
        "category": "Kebab & Tandoori",
        "title": "Tangdi Kebab with Makhanwala Gravy (6 pcs)",
        "description": "",
        "price": "৳ 420",
        "image": "https://loremflickr.com/800/600/meat,dish/all?lock=62"
    },
    {
        "id": 63,
        "category": "Kebab & Tandoori",
        "title": "Moho Special Platter (4-in-1 Combo)",
        "description": "",
        "price": "৳ 699",
        "image": "https://loremflickr.com/800/600/food,dish/all?lock=63"
    },
    {
        "id": 64,
        "category": "Mocktails",
        "title": "Virgin Mojito",
        "description": "",
        "price": "৳ 149",
        "image": "https://loremflickr.com/800/600/cocktail,dish/all?lock=64"
    },
    {
        "id": 65,
        "category": "Mocktails",
        "title": "Blue Moon",
        "description": "",
        "price": "৳ 179",
        "image": "https://loremflickr.com/800/600/cocktail,dish/all?lock=65"
    },
    {
        "id": 66,
        "category": "Mocktails",
        "title": "Tangy Orange",
        "description": "",
        "price": "৳ 179",
        "image": "https://loremflickr.com/800/600/cocktail,dish/all?lock=66"
    },
    {
        "id": 67,
        "category": "Mocktails",
        "title": "Strawberry Blast",
        "description": "",
        "price": "৳ 179",
        "image": "https://loremflickr.com/800/600/cocktail,dish/all?lock=67"
    },
    {
        "id": 68,
        "category": "Cold Coffee & Shakes",
        "title": "Black Coffee",
        "description": "",
        "price": "৳ 40",
        "image": "https://loremflickr.com/800/600/coffee,dish/all?lock=68"
    },
    {
        "id": 69,
        "category": "Cold Coffee & Shakes",
        "title": "Regular Coffee",
        "description": "",
        "price": "৳ 90",
        "image": "https://loremflickr.com/800/600/coffee,dish/all?lock=69"
    },
    {
        "id": 70,
        "category": "Cold Coffee & Shakes",
        "title": "Choco Cold Coffee",
        "description": "",
        "price": "৳ 120",
        "image": "https://loremflickr.com/800/600/coffee,dish/all?lock=70"
    },
    {
        "id": 71,
        "category": "Cold Coffee & Shakes",
        "title": "KitKat Crasher",
        "description": "",
        "price": "৳ 179",
        "image": "https://loremflickr.com/800/600/coffee,dish/all?lock=71"
    },
    {
        "id": 72,
        "category": "Cold Coffee & Shakes",
        "title": "Oreo Crasher",
        "description": "",
        "price": "৳ 179",
        "image": "https://loremflickr.com/800/600/coffee,dish/all?lock=72"
    },
    {
        "id": 73,
        "category": "Cold Coffee & Shakes",
        "title": "Vanilla Milkshake",
        "description": "",
        "price": "৳ 149",
        "image": "https://loremflickr.com/800/600/coffee,dish/all?lock=73"
    },
    {
        "id": 74,
        "category": "Signature Desserts",
        "title": "Brownie Bliss with Vanilla Ice Cream",
        "description": "Warm Chocolate Brownie • Vanilla Ice Cream • Chocolate Drizzle",
        "price": "৳ 249",
        "image": "https://loremflickr.com/800/600/dessert,dish/all?lock=74"
    },
    {
        "id": 75,
        "category": "Signature Desserts",
        "title": "Molten Chocolate Lava Cake",
        "description": "Rich Chocolate Cake • Gooey Chocolate Center • Chocolate Sauce",
        "price": "৳ 199",
        "image": "https://loremflickr.com/800/600/dessert,dish/all?lock=75"
    },
    {
        "id": 76,
        "category": "Signature Desserts",
        "title": "Classic Creamy Pudding",
        "description": "Silky Smooth Pudding • Caramel Glaze • Delicate Sweetness",
        "price": "৳ 120",
        "image": "https://loremflickr.com/800/600/dessert,dish/all?lock=76"
    }
];

const categories = ["All","Starters","Soup","Burger","Momos","Meatbox","Pasta","Ramen","Chowmein","Rice Bowls","Set Menus","Main Course","Salad","Kebab & Tandoori","Mocktails","Cold Coffee & Shakes","Signature Desserts"];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

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
                            className={`px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm ${
                                activeCategory === category 
                                    ? "bg-[#2d3e2f] text-white shadow-lg shadow-[#2d3e2f]/20 transform scale-105" 
                                    : "bg-white text-[#2d3e2f] border border-[#2d3e2f]/10 hover:border-[#d4a574] hover:text-[#d4a574] hover:shadow-md"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {filteredItems.map(item => (
                            <ProductCard key={item.id} item={item} onClick={() => setSelectedProduct(item)} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-[#2d3e2f]/5">
                        <p className="text-[#2d3e2f]/50 text-lg font-light">No dishes found in this category.</p>
                    </div>
                )}
            </div>

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity" onClick={() => setSelectedProduct(null)}></div>
                    <div className="relative bg-[#f5f0eb] rounded-[2rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all duration-300">
                        
                        <button 
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full text-[#2d3e2f] hover:text-red-500 hover:bg-white shadow-sm transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-auto relative">
                            <img 
                                src={selectedProduct.image} 
                                alt={selectedProduct.title} 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                        </div>
                        
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-white overflow-y-auto">
                            <span className="text-[#d4a574] text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-6 h-px bg-[#d4a574]"></span>
                                {selectedProduct.category}
                            </span>
                            
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3e2f] mb-4 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                                {selectedProduct.title}
                            </h2>
                            
                            <p className="text-3xl font-bold text-[#d4a574] mb-8 pb-8 border-b border-[#2d3e2f]/10">
                                {selectedProduct.price}
                            </p>
                            
                            <div className="mb-10 flex-grow">
                                <h4 className="text-sm font-semibold text-[#2d3e2f] uppercase tracking-wider mb-3">About this dish</h4>
                                <p className="text-base-content/70 leading-relaxed font-light">
                                    {selectedProduct.description || `Enjoy our incredibly delicious ${selectedProduct.title.toLowerCase()}, carefully crafted by our chefs with premium ingredients for the perfect taste experience.`}
                                </p>
                            </div>
                            
                            <div className="flex gap-4">
                                <button className="flex-1 bg-[#2d3e2f] hover:bg-[#1a251c] text-white py-4 px-6 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#2d3e2f]/20 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products;
