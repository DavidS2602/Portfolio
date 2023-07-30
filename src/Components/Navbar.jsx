import SunIcon from "../assets/SunIcon";
import MoonIcon from './../assets/MoonIcon';

const Navbar = ({ darkMode, onClick }) => {
    return (
        <nav className="flex items-center justify-between px-4 py-4 border-b transition-colors duration-600">
            <p className="font-semi-bold">CodeDS</p>
            <div className="flex gap-4 items-center">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
                <div className="rounded-full flex items-center p-1">
                    <button onClick={onClick}>{darkMode ? <SunIcon /> : <MoonIcon />}</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;