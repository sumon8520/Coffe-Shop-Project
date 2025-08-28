import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayouts = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-232px)] py-11">
                <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayouts;