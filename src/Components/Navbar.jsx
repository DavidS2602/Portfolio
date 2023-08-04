import { useState } from "react";
import SunIcon from "../assets/SunIcon";
import MoonIcon from './../assets/MoonIcon';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from "./Sidebar";


const Navbar = ({ darkMode, onClick }) => {
    const [SidebarOpen, setSidebarOpen] = useState(false)

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setSidebarOpen(false)
        }
    }

    const handleSidebar = () => {
        setSidebarOpen(!SidebarOpen)
    }

    return (
        <div>

            <nav className="flex w-full font-sans bg-sky-300 dark:bg-sky-700 fixed items-center justify-between px-4 py-4 border-b-2 dark:border-gray-400 transition-colors duration-600 dark:text-gray-300">
                <p className="font-bold text-3xl">CodeDS</p>
                <div className="flex gap-4 items-center font-semibold">
                    <div onClick={() => handleNavigation('root')} className="hover:text-blue-800 transition-transform duration-300 hidden sm:block dark:hover:text-cyan-500 hover:scale-110 cursor-pointer">
                        <p>Home</p>
                    </div>
                    <div onClick={() => handleNavigation('About')} className="hover:text-blue-800 transition-transform duration-300 hidden sm:block dark:hover:text-cyan-500 hover:scale-110 cursor-pointer">
                        <p>About</p>
                    </div>
                    <div onClick={() => handleNavigation('Projects')} className="hover:text-blue-800 transition-transform duration-300 hidden sm:block dark:hover:text-cyan-500 hover:scale-110 cursor-pointer">
                        <p>Projects</p>
                    </div>
                    <div className="hover:text-blue-800 transition-transform duration-300 hidden sm:block dark:hover:text-cyan-500 hover:scale-110 cursor-pointer">
                        <p>Contact</p>
                    </div>
                    <div className="sm:hidden flex items-center">
                        <button onClick={handleSidebar}><AiOutlineMenu size={23} /></button>
                    </div>
                    <div className="rounded-full flex items-center p-1">
                        <button onClick={onClick}>{darkMode ? <SunIcon /> : <MoonIcon />}</button>
                    </div>
                </div>
            </nav>
            {SidebarOpen && <Sidebar handleNavigation={handleNavigation} setSidebar={setSidebarOpen}/>}
        </div>
    );
}

export default Navbar;