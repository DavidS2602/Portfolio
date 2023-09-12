import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub, BsTwitter } from "react-icons/bs";

const ContactSection = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const contactSectionElement = document.getElementById("Contact");
            const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

            if (contactSectionElement) {
                const contactSectionRect =
                    contactSectionElement.getBoundingClientRect();
                if (contactSectionRect.top < windowHeight) {
                    setIsAnimated(true);
                }
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="Contact"
            className="pb-6 pt-2"
        >
            <div className="flex flex-col w-full h-full items-center justify-center">
                <div className="flex items-center justify-center w-full h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={isAnimated ?{ opacity: 1, y: 0 } : {}}
                        transition={{ duration: 2 }}
                        className="font-semibold text-xl text-gray-700 mt-2 mb-3 dark:text-gray-200"
                    >
                        Contáctame
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isAnimated ?{ opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="flex w-full h-full mb-4 items-center justify-center flex-col"
                >
                    <p className="max-w-4xl px-5 text-[16px] text-gray-700 dark:text-gray-300">
                        Tienes alguna pregunta, no dudes en ponerte en contacto conmigo.
                    </p>
                    <a
                        className="Email font-semibold text-md text-gray-500 dark:text-gray-50"
                        href="mailto:codedsdev@protonmail.com"
                    >
                        codedsdev@protonmail.com
                    </a>
                </motion.div>
                <div className="icons flex items-center gap-4 font-semibold">
                    <motion.a
                        initial={{ opacity: 0, y: -20 }}
                        animate={isAnimated ?{ opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center gap-2 bg-sky-500 p-2 rounded-lg shadow-2xl hover:bg-sky-600 hover:scale-110 duration-300 dark:bg-cyan-600 dark:hover:bg-cyan-400"
                        href="https://github.com/DavidS2602"
                    >
                        <BsGithub size={24} />
                        Github
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={isAnimated ?{ opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.0 }}
                        className="flex items-center gap-2 cursor-pointer bg-sky-500 p-2 rounded-lg shadow-2xl hover:bg-sky-600 hover:scale-110 duration-300 dark:bg-cyan-600 dark:hover:bg-cyan-400"
                    >
                        <a
                            className="text-blue-600 dark:text-blue-700 flex gap-2"
                            href="https://twitter.com/@David02068790"
                        >
                            <BsTwitter size={24} />
                            <p className="text-black font-sans">Twitter</p>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={isAnimated ?{ opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex items-center gap-2 cursor-pointer bg-sky-500 p-2 rounded-lg shadow-2xl hover:bg-sky-600 hover:scale-110 duration-300 dark:bg-cyan-600 dark:hover:bg-cyan-400"
                    >
                        <a className="text-blue-600 dark:text-blue-700 flex gap-2" href="">
                            <BsLinkedin size={25} />
                            <a
                                className="text-black font-sans"
                                href="https://www.linkedin.com/in/david-gaspar-23344a287/"
                            >
                                LinkedIn
                            </a>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
