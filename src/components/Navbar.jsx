import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import useAuth from "../hooks/useAuth"
import { UserDropdown } from "./home/UserDropdown";

const Navbar = () => {

  const {user} = useAuth();

  // Common style for NavLinks to handle active state dynamically
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium uppercase tracking-wider transition-colors duration-300 bg-transparent hover:bg-transparent focus:bg-transparent ${
      isActive ? "text-[#d4a574]" : "text-[#2d3e2f] hover:text-[#d4a574]"
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `text-sm font-medium uppercase tracking-wider transition-colors duration-300 py-3 ${
      isActive ? "text-[#d4a574] bg-[#2d3e2f]/5 rounded-lg" : "text-[#2d3e2f] hover:text-[#d4a574] hover:bg-[#2d3e2f]/5 rounded-lg"
    }`

  return (
    <div className="navbar bg-[#f5f0eb]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 sticky top-0 z-50 border-b border-[#2d3e2f]/10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-transparent h-auto p-1 pl-0">
            <img src={logo} alt="Moho Menu" className="h-12 sm:h-14 drop-shadow-sm cursor-pointer" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#f5f0eb] rounded-xl z-[1] mt-2 w-56 p-3 shadow-2xl border border-[#2d3e2f]/10 gap-1">
            <li><NavLink to="/" className={mobileNavLinkClass}>Home</NavLink></li>
            <li><NavLink to="/products" className={mobileNavLinkClass}>Menu</NavLink></li>
            <li><NavLink to="/about" className={mobileNavLinkClass}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={mobileNavLinkClass}>Contact</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost hover:bg-transparent h-auto p-1 hidden lg:flex">
          <img src={logo} alt="Moho" className="h-16 drop-shadow-sm" />
        </NavLink>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={navLinkClass}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <UserDropdown />
        ) : (
          <div className="flex gap-3 items-center">
            <NavLink 
              to="/login" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#2d3e2f] text-[#2d3e2f] text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-[#2d3e2f] hover:text-white transition-colors duration-300"
            >
              Login
            </NavLink>
            <NavLink 
              to="/register" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#2d3e2f] text-white text-sm font-semibold uppercase tracking-wider rounded-full border-2 border-[#2d3e2f] hover:bg-transparent hover:text-[#2d3e2f] transition-colors duration-300"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar