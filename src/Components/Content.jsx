import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

const Content = () => {
    const projectsData = [
        {},
        {},
        {},
        {},
        {},
    ]
    return (
        <div>
            <div className="w-full h-full flex flex-col mt-6">
                <section id="Home" className="Home info-container mt-40 pl-5 mb-56 sm:pl-32 sm:pr-32 sm:mb-56 md:pl-56 md:pr-56">
                    <h1 className="text-white text-xl sm:text-2xl">Hi! I'm David 👋</h1>
                    <p className="flex mt-2 bg-gradient-to-r  from-cyan-200 to-cyan-400 text-transparent text-5xl sm:text-7xl font-bold bg-clip-text dark:bg-gradient-to-r dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">
                        Frontend Developer
                        <span className="text-cyan-600">.</span>
                    </p>
                </section>
                <div className="border w-full dark:border-gray-400" />
                <section id="About" className="About-section pl-5 pt-10 sm:pl-32 sm:pr-32 md:pl-56 md:pr-56">
                    <h1 className="text-5xl sm:text-7xl font-bold text-cyan-400 dark:text-cyan-200">
                        About me
                        <span className="text-cyan-600">.</span>
                    </h1>
                    <p className="text-gray-800 max-w-4xl dark:text-gray-200 text-xl sm:text-2xl mt-5">
                        I'm a Frontend Developer from Mexico, I'm 21 years old and I'm
                        currently studying computer engineering at IPN.
                    </p>
                    <div className="mb-10">
                        <div className="mt-5">
                            <h1 className="text-[40px] sm:text-6xl font-bold text-cyan-400 dark:text-cyan-200">
                                Tech Stack
                            </h1>
                            <div className="Icons mt-6 flex gap-6 items-center">
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/src/assets/html.png"
                                        alt="Html"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/src/assets/css-3.png"
                                        alt="Css"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200 flex flex-col justify-center items-center">
                                    <img
                                        className="w-10 h-10"
                                        src="/src/assets/logo-javascript.svg"
                                        alt="Javascript"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/src/assets/react.svg"
                                        alt="React"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/src/assets/tailwindcss.svg"
                                        alt="Tailwind"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="border w-full dark:border-gray-400" />
                <section id="Projects" className="Project-Section p-5 pt-10 pb-10 sm:pl-32 sm:pr-32 md:pl-56 md:pr-56">
                    <p className="flex mt-2 text-5xl sm:text-7xl font-bold text-cyan-400 dark:text-cyan-200">
                        Projects
                        <span className="text-cyan-600">.</span>
                    </p>
                    <div className="Cards-project-container w-auto mt-10 flex justify-center flex-col items-center sm:grid sm:grid-cols-2 gap-4 sm:justify-center">
                        <div className="border-2 rounded-lg inline-block">
                            <div className="image-section">
                                <img className="w-auto" src="/src/assets/Work/Translator.png" alt="" />
                            </div>
                            <div className="info-section ml-2 my-2 mr-2">
                                <p className="mb-2">A translator build with React,Javascript and Chat GPT API </p>
                                <div className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                        <a className="flex items-center justify-between" href="https://github.com/DavidS2602/Translator.git">Code <span><BsGithub /></span></a>
                                    </div>
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                        <a className="flex items-center gap-2" href="https://startling-sunflower-1fd25f.netlify.app/">Go to page <span><BiRightArrowAlt /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 inline-block">
                            <div className="image-section">
                                <img className="w-auto" src="/src/assets/Work/Tesla-landing.png" alt="Tesla-landing" />
                            </div>
                            <div className="info-section ml-2 my-2 mr-2">
                                <p className="mb-2">A translator build with React,Javascript and Chat GPT API </p>
                                <div className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                        <a className="flex items-center justify-between" href="https://github.com/DavidS2602/clon-tesla-landing.git">Code <span><BsGithub /></span></a>
                                    </div>
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                        <a className="flex items-center gap-2" href="https://jocular-zabaione-29d155.netlify.app/">Go to page <span><BiRightArrowAlt /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 rounded-lg inline-block">
                            <div className="image-section">
                                <img className="w-auto" src="/src/assets/Work/La velada del año.png" alt="La velada del año" />
                            </div>
                            <div className="info-section ml-2 my-2 mr-2">
                                <p className="mb-2">A translator build with React,Javascript and Chat GPT API </p>
                                <div className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                        <a className="flex items-center justify-between" href="https://github.com/DavidS2602/clon-la-velada.git">Code <span><BsGithub /></span></a>
                                    </div>
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                        <a className="flex items-center gap-2" href="https://visionary-moonbeam-c97fbd.netlify.app/">Go to page <span><BiRightArrowAlt /></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="border-2 rounded-lg inline-block">
                            <div className="image-section">
                                <img className="w-auto" src="/src/assets/Work/Tic-tac-toe.png" alt="Tic-tac-toe" />
                            </div>
                            <div className="info-section ml-2 my-2 mr-2">
                                <p className="mb-2">A translator build with React,Javascript and Chat GPT API </p>
                                <div className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                        <a className="flex items-center justify-between" href="https://github.com/DavidS2602/Play-with-React.git">Code <span><BsGithub /></span></a>
                                    </div>
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                        <a className="flex items-center gap-2" href="https://aquamarine-torrone-bff9bc.netlify.app/">Go to page <span><BiRightArrowAlt /></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="border-2 rounded-lg inline-block">
                            <div className="image-section">
                                <img className="w-auto" src="/src/assets/Work/Todos.png" alt="Todos" />
                            </div>
                            <div className="info-section ml-2 my-2 mr-2">
                                <p className="pb-2">A translator build with React,Javascript and Chat GPT API </p>
                                <div className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                        <a className="flex items-center justify-between" href="https://github.com/DavidS2602/Todo-App.git">Code <span><BsGithub /></span></a>
                                    </div>
                                    <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                        <a className="flex items-center gap-2" href="https://shimmering-pastelito-2d1903.netlify.app/">Go to page <span><BiRightArrowAlt /></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Content;
