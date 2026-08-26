import ProductCard from "../ProductCard"
import { Link, useNavigate } from "react-router-dom"

import mohoSpecialPlatter from "../../assets/Menu/Moho Special Platter.png"
import mohoSpecialRamen from "../../assets/Menu/Moho Special Ramen.png"
import brownieBliss from "../../assets/Menu/Brownie Bliss with Vanilla Ice Cream.png"
import mohoSpecialBurger from "../../assets/Menu/Moho Special Burger (with Fries & Coke).png"

const featuredItems = [
    {
        id: 1,
        title: "Moho Special Platter",
        description: "Mix fried rice, peri peri chicken, BBQ wings (2pcs), Chinese vegetable, raita. A complete Pan-Asian experience.",
        price: "৳ 299",
        image: mohoSpecialPlatter
    },
    {
        id: 2,
        title: "Moho Special Ramen",
        description: "Our signature ramen bowl with rich broth, tender chicken, fresh vegetables, and perfectly cooked noodles.",
        price: "৳ 350",
        image: mohoSpecialRamen
    },
    {
        id: 3,
        title: "Brownie Bliss with Vanilla Ice Cream",
        description: "Warm Chocolate Brownie topped with creamy Vanilla Ice Cream and a generous Chocolate Drizzle.",
        price: "৳ 249",
        image: brownieBliss
    },
    {
        id: 4,
        title: "Moho Special Burger",
        description: "Our signature burger loaded with juicy chicken patty, fresh veggies, and special sauce, served with fries & coke.",
        price: "৳ 250",
        image: mohoSpecialBurger
    }
]

const FeaturedProducts = () => {
  const navigate = useNavigate();

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
                    <ProductCard key={item.id} item={item} onClick={() => navigate('/products')} />
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 sm:mt-16 text-center">
                <Link 
                    to="/products" 
                    className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#2d3e2f] text-[#2d3e2f] text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#2d3e2f] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                    View Full Menu
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts