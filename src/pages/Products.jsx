import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useMenu } from "../contexts/MenuContext";
import { useCart } from "../contexts/CartContext";

const Products = () => {
    const { menuItems, categories } = useMenu();
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(null);

    const filteredItems = activeCategory === "All" 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedToCart(product.id);
        setTimeout(() => setAddedToCart(null), 1500);
    };

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
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProduct(null)}>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                    <div 
                        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-md w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-red-500 hover:text-white shadow-md transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Image - shows full picture, no cropping */}
                        <div className="w-full md:w-1/2 bg-[#1c0a0c] flex items-center justify-center">
                            <img 
                                src={selectedProduct.image} 
                                alt={selectedProduct.title} 
                                className="w-full h-auto block" 
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center overflow-y-auto">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-[2px] bg-[#d4a574]"></span>
                                <span className="text-[#d4a574] text-[11px] font-bold uppercase tracking-[0.2em]">
                                    {selectedProduct.category}
                                </span>
                            </div>
                            
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2d3e2f] mb-4 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                                {selectedProduct.title}
                            </h2>
                            
                            <p className="text-2xl sm:text-3xl font-bold text-[#d4a574] mb-6 pb-6 border-b border-gray-200">
                                {selectedProduct.price}
                            </p>
                            
                            <div className="mb-8">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">About this dish</h4>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {selectedProduct.description || `Enjoy our incredibly delicious ${selectedProduct.title.toLowerCase()}, carefully crafted by our chefs with premium ingredients for the perfect taste experience.`}
                                </p>
                            </div>
                            
                            <button 
                                onClick={() => handleAddToCart(selectedProduct)}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-3 ${
                                    addedToCart === selectedProduct.id 
                                        ? "bg-green-600 text-white shadow-green-600/20" 
                                        : "bg-[#2d3e2f] hover:bg-[#1a251c] text-white shadow-[#2d3e2f]/20"
                                }`}
                            >
                                {addedToCart === selectedProduct.id ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Added to Cart!
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                                        </svg>
                                        Add to Cart
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products;
