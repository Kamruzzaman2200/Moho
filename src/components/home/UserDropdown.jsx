import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export const UserDropdown = () => {
    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut()
        .then(() => {
            console.log("Logged out successfully");
        })
        .catch(error => console.error("Error logging out:", error));
    }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-transparent hover:border-[#d4a574] transition-all duration-300">
        <div className="w-10 sm:w-11 rounded-full shadow-sm">
          <img 
            alt="User avatar" 
            src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.email ? user.email.charAt(0) : "U"}&background=2d3e2f&color=f5f0eb&size=128`} 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-white border border-[#2d3e2f]/5 rounded-2xl w-60">
        <li className="px-3 py-3 border-b border-[#2d3e2f]/5 mb-2 cursor-default hover:bg-transparent">
            <div>
                <span className="font-bold text-[#2d3e2f] block truncate text-base" style={{ fontFamily: "'Georgia', serif" }}>
                    {user?.displayName || "Moho Guest"}
                </span>
                <span className="text-xs text-base-content/60 block truncate font-medium mt-0.5">
                    {user?.email}
                </span>
            </div>
        </li>
        
        <li>
            <NavLink to="/my-orders" className="hover:bg-[#f5f0eb] hover:text-[#d4a574] transition-colors rounded-xl text-sm font-semibold text-[#2d3e2f] py-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                My Orders
            </NavLink>
        </li>
        {user?.email === "sohel.eightb@gmail.com" && (
            <li>
                <NavLink to="/admin" className="hover:bg-[#f5f0eb] hover:text-[#d4a574] transition-colors rounded-xl text-sm font-semibold text-[#2d3e2f] py-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Admin Dashboard
                </NavLink>
            </li>
        )}
        
        <li className="mt-1 border-t border-[#2d3e2f]/5 pt-2">
            <button 
                onClick={handleLogout}
                className="hover:bg-red-50 hover:text-red-600 transition-colors rounded-xl text-sm font-bold text-red-500 py-2.5 uppercase tracking-wider text-[11px]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </button>
        </li>
      </ul>
    </div>
  )
}
