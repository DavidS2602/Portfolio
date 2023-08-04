import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

const Content = () => {
    const projectsData = [
        {
            imageSrc: "/Translator.png",
            description: "Translator",
            GithubLink: "https://github.com/DavidS2602/Translator.git",
            LiveLink: "https://startling-sunflower-1fd25f.netlify.app/"
        },
        {
            imageSrc: "/Tesla-landing.png",
            description: "Tesla Landing Page",
            GithubLink: "https://github.com/DavidS2602/clon-tesla-landing.git",
            LiveLink: "https://jocular-zabaione-29d155.netlify.app/"
        },
        {
            imageSrc: "/La-velada-del-año.png",
            description: "La velada del año",
            GithubLink: "https://github.com/DavidS2602/clon-la-velada.git",
            LiveLink: "https://visionary-moonbeam-c97fbd.netlify.app/"
        },
        {
            imageSrc: "/Tic-tac-toe.png",
            description: "Tic-tac-toe",
            GithubLink: "https://github.com/DavidS2602/Play-with-React.git",
            LiveLink: "https://aquamarine-torrone-bff9bc.netlify.app/"
        },
        {
            imageSrc: "/Todos.png",
            description: "Todos",
            GithubLink: "https://github.com/DavidS2602/Todo-App.git",
            LiveLink: "https://shimmering-pastelito-2d1903.netlify.app/"
        },
    ]
    return (
        <div>
            <div className="w-full h-full flex flex-col mt-6">
                <section id="Home" className="Home info-container mt-40 pl-5 mb-56 sm:pl-32 sm:pr-32 sm:mb-56 md:pl-56 md:pr-56">
                    <h1 className="text-white text-xl sm:text-2xl">Hi! I'm David 👋</h1>
                    <p className="flex mt-2 bg-gradient-to-r  from-cyan-200 to-cyan-400 text-transparent text-5xl sm:text-7xl font-bold bg-clip-text dark:bg-gradient-to-r dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">
                        Frontend Developer
                    </p>
                </section>
                <div className="border w-full dark:border-gray-400" />
                <section id="About" className="About-section pl-5 pt-20 sm:pl-32 sm:pr-32 md:pl-56 md:pr-56">
                    <h1 className="text-5xl sm:text-7xl font-bold text-gray-600 dark:text-cyan-200">
                        About me
                        <span className="text-gray-400">.</span>
                    </h1>
                    <p className="text-gray-800 max-w-4xl dark:text-gray-200 text-xl sm:text-2xl mt-5">
                        I'm a Frontend Developer from Mexico, I'm 21 years old and I'm
                        currently studying computer engineering at IPN.
                    </p>
                    <div className="mb-20">
                        <div className="mt-5">
                            <h1 className="text-[40px] sm:text-6xl font-bold text-gray-600 dark:text-cyan-200">
                                Tech Stack
                                <span className="text-gray-400">.</span>
                            </h1>
                            <div className="Icons mt-6 flex gap-6 items-center">
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/html.png"
                                        alt="Html"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/css-3.png"
                                        alt="Css"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200 flex flex-col justify-center items-center">
                                    <img
                                        className="w-10 h-10"
                                        src="/logo-javascript.svg"
                                        alt="Javascript"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/react.svg"
                                        alt="React"
                                    />
                                </span>
                                <span className="text-gray-800 dark:text-gray-200">
                                    <img
                                        className="w-10 h-10"
                                        src="/tailwindcss.svg"
                                        alt="Tailwind"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="border w-full dark:border-gray-400" />
                <section id="Projects" className="Project-Section p-5 pt-20 pb-10 sm:pl-32 sm:pr-32 md:pl-56 md:pr-56">
                    <p className="flex mt-2 text-5xl sm:text-7xl font-bold text-gray-600 dark:text-cyan-200">
                        Projects
                        <span className="text-gray-400">.</span>
                    </p>
                    <div className="Cards-project-container w-auto mt-10 flex justify-center flex-col items-center sm:grid sm:grid-cols-2 gap-4 sm:justify-center">
                        {projectsData.map((project, index) => (
                            <div key={index} className="border-2 rounded-lg inline-block">
                                <div className="image-section">
                                    <img className="w-auto rounded-lg" src={project.imageSrc} alt="" />
                                </div>
                                <div className="info-section ml-2 my-2 mr-2">
                                    <p className="mb-2 dark:text-gray-200">{project.description}</p>
                                    <div className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                        <div className="border-2 px-2 py-1 rounded-lg flex cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                            <a className="flex items-center justify-between w-full" href={project.GithubLink}>Code <span><BsGithub /></span></a>
                                        </div>
                                        <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                            <a className="flex items-center gap-2" href={project.LiveLink}>Go to page <span><BiRightArrowAlt /></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Content;
