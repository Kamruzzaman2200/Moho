import Accordion from "../components/home/Accordion"
import Banner from "../components/home/Banner"
import FeaturedProducts from "../components/home/FeaturedProducts"
import UserReview from "../components/home/UserReview"
const Home = () => {
    return (
        <div>
            <Banner />
            
            {/* The FeaturedProducts component now handles its own background, container, and beautiful headings */}
            <FeaturedProducts />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-16 md:my-24">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                            <span className="block w-10 sm:w-12 h-[1px] bg-[#d4a574]"></span>
                            <span className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold">Testimonials</span>
                            <span className="block w-10 sm:w-12 h-[1px] bg-[#d4a574]"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                            Our Customers Say
                        </h2>
                    </div>
                    <UserReview />
                </div>
                
                <div className="my-16 md:my-24">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                            <span className="block w-10 sm:w-12 h-[1px] bg-[#d4a574]"></span>
                            <span className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold">Support</span>
                            <span className="block w-10 sm:w-12 h-[1px] bg-[#d4a574]"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Home