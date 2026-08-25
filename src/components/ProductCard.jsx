const ProductCard = ({ item, onClick }) => {
  // Fallback data if no item is provided
  const product = item || {
      title: "Delicious Dish",
      description: "A mouth-watering description of this fantastic menu item goes here.",
      price: "৳ 550",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
  };

  const shortDescription = product.description || `Freshly prepared and perfectly cooked ${product.title.toLowerCase()}, made to order just for you.`;

  return (
    <div onClick={onClick} className="cursor-pointer group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#2d3e2f]/5 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-white/20">
            <span className="text-[#2d3e2f] font-bold text-sm tracking-wide">{product.price}</span>
        </div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-[#2d3e2f] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
            {product.title}
        </h3>
        <p className="text-base-content/60 text-sm font-light leading-relaxed flex-grow line-clamp-2">
            {shortDescription}
        </p>
        <div className="mt-6 pt-5 border-t border-[#2d3e2f]/10 flex items-center justify-between">
          <button className="text-[#d4a574] text-xs font-semibold uppercase tracking-[0.2em] hover:text-[#2d3e2f] transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard