import { AiOutlineClose } from 'react-icons/ai'
const Sidebar = ({ handleNavigation, setSidebar }) => {
    const handleClose = () => {
        setSidebar(false)
    }
    return (
        <nav className="fixed right-0 top-[69px] rounded-bl-lg w-60 bg-sky-300 dark:bg-sky-700 p-4 border-l-2 border-b-2 dark:border-gray-400 transition-colors duration-600 dark:text-gray-300">
            <div className='cursor-pointer'>
                <AiOutlineClose onClick={handleClose} size={23} className='hover:text-cyan-700 hover:scale-105 duration-300'/>
            </div>
            <div className="flex flex-col gap-4 items-center font-semibold">
                <div onClick={() => handleNavigation('root')} className="cursor-pointer hover:text-blue-800 dark:hover:text-cyan-500 hover:scale-105 duration-300">
                    <p>Home</p>
                </div>
                <div onClick={() => handleNavigation('About')} className="cursor-pointer hover:text-blue-800 dark:hover:text-cyan-500 hover:scale-105 duration-300">
                    <p>About</p>
                </div>
                <div onClick={() => handleNavigation('Projects')} className="cursor-pointer hover:text-blue-800 dark:hover:text-cyan-500 hover:scale-105 duration-300">
                    <p>Projects</p>
                </div>
                <div onClick={() => handleNavigation('Contact')} className="cursor-pointer hover:text-blue-800 dark:hover:text-cyan-500 hover:scale-105 duration-300">
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
