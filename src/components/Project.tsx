import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Halcyon Theme",
        description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
        imageSrc: "https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg",
        githubLink: "https://github.com/usuario/proyecto",
        liveLink: "https://proyecto.com",
    },
];

const ProjectSection = () => {
    return (
        <section className="bg-[#0A192F] text-[#CCD6F6] py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-[#64FFDA] mb-8 tracking-wide">
                    03. Some Things I’ve Built
                </h2>

                {projects.map((project, index) => (
                    <div key={index} className="relative w-full max-w-5xl mx-auto py-12 flex flex-col md:flex-row items-center gap-8">
                        {/* Imagen a la izquierda */}
                        <div className="w-full md:w-[55%] relative">
                            <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full rounded-md opacity-70 hover:opacity-100 transition"
                            />
                        </div>

                        {/* Contenido a la derecha */}
                        <div className="w-full md:w-[45%] relative z-10 bg-[#0A192F] p-6 rounded-lg shadow-lg">
                            {/* Featured Project */}
                            <p className="text-[#64FFDA] uppercase text-sm font-semibold">
                                Featured Project
                            </p>

                            {/* Título del proyecto */}
                            <h3 className="text-3xl font-bold text-[#CCD6F6] mt-2">
                                {project.title}
                            </h3>

                            {/* Descripción extendida hacia la izquierda */}
                            <div className="bg-[#112240] text-white p-6 rounded-md shadow-lg mt-4 -ml-[20%] md:-ml-[30%] w-[120%] md:w-[140%] relative z-20">
                                <p className="text-sm leading-relaxed">{project.description}</p>
                            </div>

                            {/* Tecnologías */}
                            <div className="flex flex-wrap gap-4 mt-16 text-sm text-gray-400">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-[#233554] px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Íconos de Enlaces */}
                            <div className="flex gap-4 mt-6">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#64FFDA] transition"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#64FFDA] transition"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;