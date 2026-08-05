import { NavLink } from "react-router-dom";
import bannerBg from "../../assets/tinywow_ChatGPT Image Aug 4, 2026, 01_44_00 PM_91153906.png";

const Banner = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#f5f0eb] overflow-hidden pt-16 lg:pt-0">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#d4a574]/15 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#2d3e2f]/5 blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10 py-12 lg:py-0">
                
                {/* Left Content Area */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
                    {/* Small badge */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#2d3e2f]/5 border border-[#2d3e2f]/10 mb-6 sm:mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse"></span>
                        <span className="text-[#2d3e2f] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Experience Moho</span>
                    </div>

                    {/* Headline */}
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#2d3e2f] mb-6 leading-[1.15]"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        Food That <br className="hidden lg:block" />
                        Brings <span className="text-[#d4a574] italic font-light relative whitespace-nowrap">
                            People Together
                            <svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-[#d4a574]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                            </svg>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base-content/70 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed font-light">
                        Step into a world of exquisite flavors and a warm, inviting atmosphere. At Moho, every meal is crafted with passion to create memories that last a lifetime.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                        <NavLink 
                            to="/products"
                            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#2d3e2f] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#d4a574] hover:shadow-xl hover:shadow-[#d4a574]/30 transition-all duration-300 transform hover:-translate-y-1 text-center"
                        >
                            Explore Menu
                        </NavLink>
                        <NavLink 
                            to="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-transparent border-2 border-[#2d3e2f] text-[#2d3e2f] text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#2d3e2f] hover:text-white transition-all duration-300 text-center"
                        >
                            Book a Table
                        </NavLink>
                    </div>

                    {/* Quick Stats/Features */}
                    <div className="flex items-center gap-6 sm:gap-8 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#2d3e2f]/10">
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>5★</p>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-base-content/50">Top Rated</p>
                        </div>
                        <div className="w-[1px] h-8 sm:h-10 bg-[#2d3e2f]/10"></div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>100%</p>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-base-content/50">Fresh Food</p>
                        </div>
                        <div className="w-[1px] h-8 sm:h-10 bg-[#2d3e2f]/10"></div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>Daily</p>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-base-content/50">Made Fresh</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Area */}
                <div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
                    {/* Decorative backdrop for image */}
                    <div className="absolute inset-0 bg-[#d4a574] rounded-[3rem] sm:rounded-t-full sm:rounded-bl-full transform rotate-6 sm:rotate-12 scale-95 sm:scale-90 opacity-20 transition-transform duration-700"></div>
                    
                    <div className="relative w-full max-w-lg lg:max-w-2xl overflow-hidden rounded-3xl sm:rounded-t-[8rem] sm:rounded-b-[2rem] shadow-2xl border-4 sm:border-8 border-white transform transition-transform duration-700 hover:scale-[1.02] z-10">
                        <img
                            src={bannerBg}
                            alt="Moho Restaurant"
                            className="w-full h-auto block"
                        />
                        {/* Inner subtle gradient to make it look premium */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e2f]/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 right-0 sm:right-4 lg:-left-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 animate-bounce z-20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center text-xl sm:text-2xl">
                            🪴
                        </div>
                        <div className="text-left">
                            <p className="text-[#2d3e2f] font-bold text-sm sm:text-base leading-tight">Garden Dining</p>
                            <p className="text-base-content/50 text-xs">Natural Beauty</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;