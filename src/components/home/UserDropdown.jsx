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
            <a className="hover:bg-[#f5f0eb] hover:text-[#d4a574] transition-colors rounded-xl text-sm font-semibold text-[#2d3e2f] py-2.5">
                Dashboard
            </a>
        </li>
        <li>
            <a className="hover:bg-[#f5f0eb] hover:text-[#d4a574] transition-colors rounded-xl text-sm font-semibold text-[#2d3e2f] py-2.5 mb-1">
                My Orders
            </a>
        </li>
        
        <li className="mt-1 border-t border-[#2d3e2f]/5 pt-2">
            <button 
                onClick={handleLogout}
                className="hover:bg-red-50 hover:text-red-600 transition-colors rounded-xl text-sm font-bold text-red-500 py-2.5 uppercase tracking-wider text-[11px]"
            >
                Logout
            </button>
        </li>
      </ul>
    </div>
  )
}
