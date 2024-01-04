import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";

const ProjectsSection = ({ projectsData, isProjectsAnimated }) => {
    return (
        <section
            id="Projects"
            className="Project-Section p-5 pt-20 pb-10 sm:pl-32 sm:pr-32 md:pl-44 md:pr-44"
        >
            <p className="flex mt-2 text-5xl sm:text-7xl font-bold text-gray-600 dark:text-cyan-200">
                <span>{<FaCode />}</span>
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
    );
}

export default ProjectsSection;