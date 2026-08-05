import Accordion from "../components/home/Accordion"
import Banner from "../components/home/Banner"
import FeaturedProducts from "../components/home/FeaturedProducts"
import UserReview from "../components/home/UserReview"
const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-10 md:my-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Featured Products</h1>
                    <FeaturedProducts />
                </div>
                <div className="my-10 md:my-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Our Customers Say</h1>
                    <UserReview />
                </div>
                <div className="my-10 md:my-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Frequently Asked Questions</h1>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Home