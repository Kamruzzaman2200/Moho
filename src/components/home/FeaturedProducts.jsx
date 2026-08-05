import ProductCard from "../ProductCard"

const featuredItems = [
    {
        id: 1,
        title: "Grilled Salmon",
        description: "Fresh Atlantic salmon with lemon butter sauce, served with roasted asparagus and garlic herb quinoa.",
        price: "৳ 850",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927"
    },
    {
        id: 2,
        title: "Beef Steak",
        description: "Premium ribeye steak cooked to perfection with garlic herb butter, alongside rustic mashed potatoes.",
        price: "৳ 1250",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
    },
    {
        id: 3,
        title: "Pasta Carbonara",
        description: "Classic Italian pasta with a rich, creamy egg sauce, crispy pancetta, and aged parmesan cheese.",
        price: "৳ 650",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
    },
    {
        id: 4,
        title: "Avocado Toast",
        description: "Artisan sourdough topped with smashed avocado, a perfectly poached egg, and chili flakes.",
        price: "৳ 450",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8"
    }
]

const FeaturedProducts = () => {
  return (
    <div className="bg-[#f5f0eb] py-16 sm:py-24 border-b border-[#2d3e2f]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                    <span className="block w-10 sm:w-12 h-[1px] bg-[#d4a574]"></span>
                    <span className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold">Our Menu</span>
                    <span className="block w-10 sm:w-12 h-[1px] bg-[#d4a574]"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                    Signature Dishes
                </h2>
                <p className="mt-4 sm:mt-6 text-base-content/60 font-light text-sm sm:text-base leading-relaxed">
                    Discover our most loved culinary creations, prepared fresh daily with the finest ingredients and a touch of passion.
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {featuredItems.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 sm:mt-16 text-center">
                <a 
                    href="/products" 
                    className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#2d3e2f] text-[#2d3e2f] text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#2d3e2f] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                    View Full Menu
                </a>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts