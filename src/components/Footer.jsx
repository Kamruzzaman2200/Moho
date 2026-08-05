import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#2d3e2f] text-white/90">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <NavLink to="/" className="mb-4">
              <img src={logo} alt="Moho" className="h-20 w-auto brightness-0 invert opacity-90" />
            </NavLink>
            <p className="text-white/60 text-sm leading-relaxed text-center sm:text-left max-w-xs">
              A place to dine, relax and make beautiful memories. Experience authentic flavors in a warm, welcoming atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-[#d4a574] font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <NavLink to="/" className="text-white/60 hover:text-[#d4a574] transition-colors duration-300 text-sm">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-white/60 hover:text-[#d4a574] transition-colors duration-300 text-sm">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-white/60 hover:text-[#d4a574] transition-colors duration-300 text-sm">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white/60 hover:text-[#d4a574] transition-colors duration-300 text-sm">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-[#d4a574] font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <a
                  href="tel:+8801720097629"
                  className="flex items-center gap-2 text-white/60 hover:text-[#d4a574] transition-colors duration-300 text-sm justify-center sm:justify-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +880 1720-097629
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kalibari Lake Road, Bhola</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-[#d4a574] font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/moho2220/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a574] hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/moho_bistro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a574] hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-white/40 text-xs mt-4">@moho_bistro</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Moho Restaurant. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Made with <span className="text-[#d4a574]">♥</span> in Bhola
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer