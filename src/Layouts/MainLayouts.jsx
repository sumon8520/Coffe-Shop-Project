import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';


const MainLayouts = () => {
    return (
        <div>
            <Toaster></Toaster>
           <div className="h-16">
            <Navbar></Navbar>
           </div>
           <div className="min-h-[calc(100vh-232px)] py-11 container mx-auto px-12">
                <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayouts;