const Review = ({ review }) => {
    // Fallback data
    const data = review || {
        name: "John Doe",
        role: "Customer",
        comment: "Great food and amazing atmosphere. Will definitely come back again!",
        rating: 5,
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    };

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#2d3e2f]/5 flex flex-col h-full relative group transform hover:-translate-y-1">
            {/* Quote Icon Background */}
            <div className="absolute top-4 sm:top-6 right-6 text-7xl text-[#d4a574]/10 font-serif leading-none group-hover:text-[#d4a574]/20 transition-colors duration-500 select-none">
                "
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, index) => (
                    <svg 
                        key={index} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill={index < data.rating ? "#d4a574" : "#e5e7eb"} 
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                ))}
            </div>

            {/* Review Text */}
            <p className="text-base-content/70 text-sm font-light leading-relaxed flex-grow relative z-10 italic">
                "{data.comment}"
            </p>

            {/* Author Info */}
            <div className="mt-8 pt-5 border-t border-[#2d3e2f]/10 flex items-center gap-4 relative z-10">
                <img 
                    src={data.image} 
                    alt={data.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d4a574]/30 p-0.5"
                />
                <div>
                    <h4 className="text-[#2d3e2f] font-bold text-sm" style={{ fontFamily: "'Georgia', serif" }}>
                        {data.name}
                    </h4>
                    <p className="text-[#d4a574] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">
                        {data.role}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review