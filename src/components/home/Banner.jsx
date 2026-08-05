import bannerBg from "../../assets/tinywow_ChatGPT Image Aug 4, 2026, 01_44_00 PM_91153906.png";

const Banner = () => {
    return (
        <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden">
            {/* Background image */}
            <img
                src={bannerBg}
                alt="Banner background"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] sm:object-center"
            />

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e2f]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d3e2f]/30 via-transparent to-transparent" />

            {/* Bottom content area */}
            <div className="relative z-10 flex flex-col justify-end items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pb-10 md:pb-16 px-4 sm:px-6">
                {/* Decorative divider */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="block w-12 h-[1px] bg-[#d4a574]" />
                    <svg
                        className="w-5 h-5 text-[#d4a574]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-6v4h4l-5 6z" />
                    </svg>
                    <span className="block w-12 h-[1px] bg-[#d4a574]" />
                </div>

                {/* Tagline */}
                <h2
                    className="text-white text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light mb-6 sm:mb-10 text-center"
                    style={{ fontFamily: "'Georgia', serif" }}
                >
                    Dine · Relax · Create Memories
                </h2>

                {/* Feature badges */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 md:gap-10">
                    {[
                        { icon: "🌿", label: "Fresh Ingredients" },
                        { icon: "❤️", label: "Made with Passion" },
                        { icon: "✨", label: "Every Moment Matters" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-default"
                        >
                            <span className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-125">
                                {item.icon}
                            </span>
                            <span className="text-white/90 text-xs sm:text-sm tracking-wider uppercase font-light">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle animated scroll indicator */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
                    <div className="w-1 h-2.5 bg-white/70 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default Banner;