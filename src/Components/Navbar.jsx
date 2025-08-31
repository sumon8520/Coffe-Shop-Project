import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-xl fixed shadow-sm z-10 md:py-7 md:px-20">

            <div className="flex-1">
                <Link className="text-2xl md:text-4xl font-bold" to="/">
                    Coffe_BOOk
                </Link>
            </div>


            <div className="flex-none">

                <div className="dropdown dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/coffes">Coffes</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/dashborad">Dashboard</NavLink></li>
                    </ul>
                </div>


                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-medium gap-5">
                        <li><NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/coffes">Coffes</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/dashborad">Dashboard</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

