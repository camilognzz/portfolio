import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            id="sobre-mi"
            className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="md:w-2/2 flex flex-col mb-6">
                    <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
                            Sobre Mí
                        </h2>
                        <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <p className="text-lg sm:text-xl text-[#374151] dark:text-gray-400 leading-relaxed md:w-2/3 mb-6">
                            Desarrollador Full Stack con experiencia en el diseño y desarrollo de aplicaciones web centradas en la experiencia del 
                            usuario. He trabajado con <span className="text-blue-500 dark:text-green-400">PHP, .NET, Java y Spring Boot</span> en el desarrollo backend, y con <span className="text-blue-500 dark:text-green-400">JavaScript, TypeScript y 
                            React.js</span> en la creación de interfaces modernas y dinámicas. Manejo bases de datos <span className="text-blue-500 dark:text-green-400">MySQL y MongoDB,</span> aplicando 
                            principios de código limpio, arquitectura escalable y buenas prácticas de desarrollo para garantizar soluciones 
                            eficientes, seguras y de alto rendimiento. 
                        </p>
                        <div className="md:w-1/3 flex flex-col">
                            <h3 className="text-xl font-semibold text-[#8F98B7] dark:text-[#D0DAFA] mb-4">
                                Tecnologías
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {[
                                    "HTML", "CSS", "JavaScript", "TypeScript", "React",
                                    ".NET", "PHP", "Spring Boot", "MySQL", "MongoDB",
                                    "Git", "GitHub", "GitHub Actions", "Docker", "AWS EC2", "VPS", "Jira", "Trello"
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-[#8F98B7] dark:bg-[#D0DAFA] text-white dark:text-black px-3 py-1 rounded-md text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                className="flex justify-start items-center gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
            >
                <a href="https://www.linkedin.com/in/camilognzz1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-[#0077B5] dark:text-[#D0DAFA] text-3xl hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/camilognzz" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-[#333] dark:text-[#D0DAFA] text-3xl hover:scale-110 transition-transform" />
                </a>
                <a
                    href="/Camilo-Gonzalez-CV.pdf"
                    download="Camilo-Gonzalez-CV.pdf"
                    className="inline-block px-5 sm:px-6 py-2 sm:py-3 font-semibold border border-[#333] text-[#333] rounded-md 
                    hover:bg-[#333] hover:text-[#D0DAFA] dark:border-[#D0DAFA] dark:text-[#D0DAFA] 
                    dark:hover:bg-[#D0DAFA] dark:hover:text-[#0F172A] transition"
                >
                    Ver currículum
                </a>
            </motion.div>
        </motion.section>
    );
};

export default AboutMe;