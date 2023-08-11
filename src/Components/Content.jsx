import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";

const Content = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isProjectsAnimated, setIspProjectsAnimated] = useState(false);
    const [isTextAnimated, setIsTextAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const ProjectsElement = document.getElementById("Projects-section");
            const techStackElement = document.getElementById("tech-stack-section");
            const TextElement = document.getElementById("Description");

            const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

            if (techStackElement) {
                const techStackRect = techStackElement.getBoundingClientRect();
                if (techStackRect.top < windowHeight) {
                    setIsAnimated(true);
                }
            }

            if (ProjectsElement) {
                const ProjectsRect = ProjectsElement.getBoundingClientRect();
                if (ProjectsRect.top < windowHeight) {
                    setIspProjectsAnimated(true);
                }
            }

            if (TextElement) {
                const TextRect = TextElement.getBoundingClientRect();
                if (TextRect.top < windowHeight) {
                    setIsTextAnimated(true);
                }
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const projectsData = [
        {
            imageSrc: "/Translator.jpg",
            description: "Translator",
            GithubLink: "https://github.com/DavidS2602/Translator.git",
            LiveLink: "https://startling-sunflower-1fd25f.netlify.app/",
            delay: 0,
        },
        {
            imageSrc: "/Tesla-landing.jpg",
            description: "Tesla Landing Page",
            GithubLink: "https://github.com/DavidS2602/clon-tesla-landing.git",
            LiveLink: "https://cerulean-cobbler-5e357b.netlify.app/",
            delay: 0.5,
        },
        {
            imageSrc: "/La-velada-del-año.jpg",
            description: "La velada del año",
            GithubLink: "https://github.com/DavidS2602/clon-la-velada.git",
            LiveLink: "https://visionary-moonbeam-c97fbd.netlify.app/",
            delay: 1.0,
        },
        {
            imageSrc: "/Tic-tac-toe.jpg",
            description: "Tic-tac-toe",
            GithubLink: "https://github.com/DavidS2602/Play-with-React.git",
            LiveLink: "https://aquamarine-torrone-bff9bc.netlify.app/",
            delay: 1.5,
        },
        {
            imageSrc: "/Todos.jpg",
            description: "Todos",
            GithubLink: "https://github.com/DavidS2602/Todo-App.git",
            LiveLink: "https://warm-narwhal-5c0122.netlify.app",
            delay: 2.0,
        },
        {
            imageSrc: "/e-commerce.jpg",
            description: "E-commerce",
            GithubLink: "https://github.com/DavidS2602/e-commerce-platzi.git",
            LiveLink: "https://glistening-figolla-337444.netlify.app/",
            delay: 2.5,
        },
        {
            imageSrc:
                "https://media.istockphoto.com/id/477902875/es/foto/el-pron%C3%B3stico-del-tiempo-en-un-display-digital.jpg?s=612x612&w=0&k=20&c=Tsz4ti7rTQvih6iMp2UdXMkz_nFSvtQZU_PJZk0I9os=",
            description: "Weather App (PROXIMAMENTE)",
        },
    ];

    const techStackIcons = [
        {
            icon: <img className="w-10 h-10" src="/html.png" alt="Html" />,
            delay: 0,
        },
        {
            icon: <img className="w-10 h-10" src="/css-3.png" alt="Css" />,
            delay: 0.5,
        },
        {
            icon: (
                <img
                    className="w-10 h-10"
                    src="/logo-javascript.svg"
                    alt="Javascript"
                />
            ),
            delay: 1.0,
        },
        {
            icon: <img className="w-10 h-10" src="/react.svg" alt="React" />,
            delay: 1.5,
        },
        {
            icon: <img className="w-10 h-10" src="/tailwindcss.svg" alt="Tailwind" />,
            delay: 2.0,
        },
        {
            icon: <img className="w-10 h-10" src="/github-mark.svg" alt="Sass" />,
            delay: 2.5,
        },
        {
            icon: <img className="w-10 h-10" src="/git.png" alt="git" />,
            delay: 3.0,
        },
    ];
    return (
        <div>
            <div className="w-full h-full flex flex-col mt-6">
                <section
                    id="Home"
                    className="Home info-container mt-40 pl-5 mb-56 sm:pl-32 sm:pr-32 sm:mb-56 md:pl-44 md:pr-44"
                >
                    <h1 className="text-white text-xl sm:text-2xl">Hi! I'm David 👋</h1>
                    <p className="flex mt-2 bg-gradient-to-r  from-cyan-200 to-cyan-400 text-transparent text-5xl sm:text-7xl font-bold bg-clip-text dark:bg-gradient-to-r dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">
                        Frontend Developer
                    </p>
                </section>
                <div className="border w-full dark:border-gray-400" />
                <section
                    id="About"
                    className="About-section pl-5 pt-20 sm:pl-32 sm:pr-32 md:pl-44 md:pr-44"
                >
                    <h1 className="text-5xl sm:text-7xl font-bold text-gray-600 dark:text-cyan-200">
                        Sobre mi
                        <span className="text-gray-400">.</span>
                    </h1>
                    <motion.p
                        id="Description"
                        initial={{ opacity: 0, y: -40 }}
                        animate={isTextAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.5 }}
                        className="text-gray-800 max-w-4xl dark:text-gray-200 text-xl sm:text-2xl mt-5"
                    >
                        Soy un Desarrollador Frontend de México, apasionado por todas las
                        tecnologías del ámbito. Estudio Ingeniería en Informática en el IPN
                        y disfruto creando experiencias web increíbles con HTML, CSS,
                        JavaScript y React. Siempre listo para nuevos desafíos y aprendizaje
                        continuo en el emocionante mundo del desarrollo web.
                    </motion.p>
                    <div className="mb-20">
                        <div className="mt-5">
                            <h1 className="text-[40px] sm:text-6xl font-bold text-gray-600 dark:text-cyan-200">
                                Tecnologías
                                <span className="text-gray-400">.</span>
                            </h1>
                            <motion.div
                                id="tech-stack-section"
                                className="Icons mt-6 grid grid-cols-3 gap-4 sm:flex sm:gap-6 sm:items-center"
                                initial={{ opacity: 0 }}
                                animate={isAnimated ? { opacity: 1 } : {}}
                                transition={{ duration: 1 }}
                            >
                                {techStackIcons.map((icon, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: -40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.0, delay: icon.delay }}
                                    >
                                        {icon.icon}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
                <div className="border w-full dark:border-gray-400" />
                <section
                    id="Projects"
                    className="Project-Section p-5 pt-20 pb-10 sm:pl-32 sm:pr-32 md:pl-44 md:pr-44"
                >
                    <p className="flex mt-2 text-5xl sm:text-7xl font-bold text-gray-600 dark:text-cyan-200">
                        Proyectos
                        <span className="text-gray-400">.</span>
                    </p>
                    <motion.div
                        id="Projects-section"
                        className="Cards-project-container w-auto mt-10 flex justify-center flex-col items-center sm:grid sm:grid-cols-2 gap-4 sm:justify-center"
                        initial={{ opacity: 0 }}
                        animate={isProjectsAnimated ? { opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                    >
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: index * 0.2 }}
                                className="border-2 rounded-lg inline-block"
                            >
                                <section className="image-section">
                                    <img
                                        className="rounded-t-lg"
                                        src={project.imageSrc}
                                        alt={project.description}
                                        loading="lazy"
                                    />
                                </section>
                                <section className="info-section ml-2 my-2 mr-2">
                                    <p className="mb-2 dark:text-gray-200">
                                        {project.description}
                                    </p>
                                    <section className="grid grid-cols-2 gap-4 dark:text-gray-200">
                                        <div className="border-2 px-2 py-1 rounded-lg flex cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 dark:hover:bg-cyan-800 dark:border-gray-400">
                                            <a
                                                className="flex items-center justify-between w-full"
                                                href={project.GithubLink}
                                            >
                                                Código{" "}
                                                <span>
                                                    <BsGithub />
                                                </span>
                                            </a>
                                        </div>
                                        <div className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all bg-gray-200 hover:bg-gray-300  dark:hover:bg-cyan-800 dark:border-gray-400 dark:bg-gray-700">
                                            <a
                                                className="flex items-center gap-2"
                                                href={project.LiveLink}
                                            >
                                                Visitar Web{" "}
                                                <span>
                                                    <BiRightArrowAlt />
                                                </span>
                                            </a>
                                        </div>
                                    </section>
                                </section>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
                <section id="Contact" className="bg-sky-400 dark:bg-blue-900">
                    <ContactSection />
                </section>
            </div>
        </div>
    );
};

export default Content;
