import { NavLink } from "react-router-dom"
import aboutImg from "../assets/about us img.png"

const About = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Header */}
      <div className="relative bg-[#2d3e2f] py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a574] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4a574] rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4a574] text-sm uppercase tracking-[0.3em] mb-3 font-light">Our Story</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            About Moho
          </h1>
          <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base">
            Where every meal becomes a memory and every visit feels like coming home.
          </p>
        </div>
      </div>

      {/* About Image Showcase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={aboutImg}
            alt="About Moho - Food that brings people together"
            className="w-full h-auto block"
          />
          {/* Subtle overlay gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-[#f5f0eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Story Text */}
            <div>
              <p className="text-[#d4a574] text-sm uppercase tracking-[0.2em] mb-3 font-medium">Our Journey</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2d3e2f] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Food That Brings<br />People Together
              </h2>
              <div className="w-16 h-[2px] bg-[#d4a574] mb-6" />
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  MOHO is more than just a restaurant — it's a cozy escape where great food, 
                  natural beauty, and warm memories come together.
                </p>
                <p>
                  Surrounded by a blooming garden, we create dishes made with passion and 
                  ingredients you can trust. Whether it's a casual hangout, a special celebration, 
                  or a quiet moment for yourself — MOHO is your place to feel at home.
                </p>
                <p>
                  Located in the heart of Bhola on Kalibari Road, we've built a space that 
                  celebrates the simple joys of life: good food, beautiful surroundings, 
                  and the people you share them with.
                </p>
              </div>
            </div>

            {/* Right: Values Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: "🌿",
                  title: "Fresh Ingredients",
                  desc: "We source the finest local ingredients to ensure every dish is fresh and flavorful."
                },
                {
                  icon: "❤️",
                  title: "Made with Passion",
                  desc: "Every recipe is crafted with love, care, and attention to authentic flavors."
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Memories Together",
                  desc: "A space designed for families, friends, and loved ones to create lasting moments."
                },
                {
                  icon: "🌸",
                  title: "Nature Around You",
                  desc: "Dine surrounded by lush greenery and blooming flowers in our garden setting."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h3 className="font-semibold text-[#2d3e2f] text-sm sm:text-base mb-1.5">{item.title}</h3>
                  <p className="text-base-content/50 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Highlights */}
      <div className="bg-[#2d3e2f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "Happy Customers" },
              { value: "50+", label: "Menu Items" },
              { value: "5★", label: "Rating" },
              { value: "∞", label: "Memories Made" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4a574] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#d4a574] text-sm uppercase tracking-[0.2em] mb-3 font-medium">Our Promise</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2d3e2f] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Good Food, Beautiful Place,<br />Great Memories
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-[2px] bg-[#d4a574]" />
          </div>
          <p className="text-base-content/60 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
            At Moho, we believe that dining is about more than just food. It's about 
            the atmosphere, the company, and the feeling you take home with you. 
            Every detail of our restaurant — from the garden that surrounds it to 
            the spices in our kitchen — is chosen to make your experience unforgettable.
          </p>

          {/* Decorative quote */}
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 text-6xl text-[#d4a574]/20 font-serif">"</div>
            <blockquote className="italic text-lg sm:text-xl text-[#2d3e2f] font-light px-8" style={{ fontFamily: "'Georgia', serif" }}>
              Every dish tells a story, every visit creates a memory.
            </blockquote>
            <div className="absolute -bottom-4 -right-4 text-6xl text-[#d4a574]/20 font-serif rotate-180">"</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#f5f0eb] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
            Come Experience Moho
          </h2>
          <p className="text-base-content/50 mb-8 max-w-md mx-auto text-sm sm:text-base">
            We're waiting to welcome you with open arms and delicious food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#2d3e2f] text-white rounded-full hover:bg-[#1e2b20] transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Visit Us
            </NavLink>
            <a
              href="tel:+8801720097629"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#2d3e2f] text-[#2d3e2f] rounded-full hover:bg-[#2d3e2f] hover:text-white transition-all duration-300 text-sm uppercase tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About