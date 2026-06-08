import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Mainlayout;