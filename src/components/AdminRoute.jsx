import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const adminEmail = "sohel.eightb@gmail.com";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2d3e2f]/20 border-t-[#d4a574] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2d3e2f]/60 text-sm font-medium uppercase tracking-wider">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || user.email !== adminEmail) {
    // If not logged in, or logged in but not the admin, redirect to home
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
