import { useState } from "react";
import ProductCard from "../components/ProductCard";

const menuItems = [
    // Appetizers
    { id: 101, category: "Appetizers", title: "Crispy Calamari", description: "Lightly breaded calamari rings served with house-made tartar sauce and lemon wedges.", price: "৳ 450", image: "https://images.unsplash.com/photo-1541014741259-de529411b96a" },
    { id: 102, category: "Appetizers", title: "Garlic Butter Prawns", description: "Sautéed tiger prawns in a rich garlic, parsley, and herb butter sauce.", price: "৳ 550", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641" },
    { id: 103, category: "Appetizers", title: "Bruschetta", description: "Toasted artisan sourdough topped with diced tomatoes, fresh basil, and balsamic glaze.", price: "৳ 350", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f" },
    
    // Main Courses
    { id: 201, category: "Main Courses", title: "Grilled Salmon", description: "Fresh Atlantic salmon with lemon butter sauce, served with roasted asparagus.", price: "৳ 850", image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927" },
    { id: 202, category: "Main Courses", title: "Beef Steak", description: "Premium ribeye steak cooked to perfection with garlic herb butter and rustic fries.", price: "৳ 1250", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1" },
    { id: 203, category: "Main Courses", title: "Pasta Carbonara", description: "Classic Italian pasta with a rich, creamy egg sauce, crispy pancetta, and parmesan.", price: "৳ 650", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601" },
    { id: 204, category: "Main Courses", title: "Chicken Tikka Masala", description: "Tender chicken chunks marinated in spices and yogurt, baked in a tandoor.", price: "৳ 550", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641" },
    
    // Desserts
    { id: 301, category: "Desserts", title: "Classic Tiramisu", description: "Traditional Italian dessert made of ladyfingers dipped in coffee, layered with mascarpone.", price: "৳ 400", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
    { id: 302, category: "Desserts", title: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.", price: "৳ 450", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51" },
    { id: 303, category: "Desserts", title: "New York Cheesecake", description: "Rich and creamy baked cheesecake with a buttery graham cracker crust and berry compote.", price: "৳ 380", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad" },
    
    // Drinks
    { id: 401, category: "Drinks", title: "Fresh Lime Soda", description: "Refreshing blend of fresh lime juice, mint, and sparkling water on ice.", price: "৳ 150", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { id: 402, category: "Drinks", title: "Classic Mojito", description: "A refreshing Cuban highball with white rum, sugar, lime juice, soda water, and mint.", price: "৳ 350", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b" },
];

const categories = ["All", "Appetizers", "Main Courses", "Desserts", "Drinks"];

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