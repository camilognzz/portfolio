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
    {
        title: "Halcyon Theme",
        description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
        imageSrc: "https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg",
        githubLink: "https://github.com/usuario/proyecto",
        liveLink: "https://proyecto.com",
    },
    {
        title: "Halcyon Theme",
        description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
        imageSrc: "https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg",
        githubLink: "https://github.com/usuario/proyecto",
        liveLink: "https://proyecto.com",
    }
];

const ProjectSection = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12">
            <div className="roboto flex flex-col md:flex-row items-start gap-10">
                <div className="md:w-2/2 flex flex-col mb-6">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
                            Proyectos
                        </h2>
                    </div>

                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="relative w-full max-w-5xl mx-auto py-12 flex flex-col md:flex-row items-center gap-8">

                                <div className={`w-full md:w-[55%] relative ${!isEven ? "md:order-2" : ""}`}>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.imageSrc}
                                            alt={project.title}
                                            className="w-full rounded-sm opacity-70 cursor-pointer hover:opacity-100 transition"
                                        />
                                    </a>
                                </div>

                                <div className={`w-full md:w-[45%] relative z-10 p-6 rounded-lg ${!isEven ? "md:order-1" : ""}`}>

                                    <p className={`${isEven ? "text-end" : "text-start"} text-blue-500 dark:text-green-400 uppercase text-sm font-semibold`}>
                                        Featured Project
                                    </p>

                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <h3 className={`${isEven ? "text-end" : "text-start"} text-3xl font-bold text-[#8F98B7] dark:text-[#D0DAFA] hover:text-blue-500 hover:dark:text-green-400 mt-2`}>
                                            {project.title}
                                        </h3>
                                    </a>

                                    <div className={`flex bg-[#DEE1E6] dark:bg-[#101A2D] p-4 md:p-6 rounded-md shadow-lg mt-4 relative z-20 w-[90%] md:w-[130%] ${isEven ? "ml-[10%] md:-ml-[30%] justify-end" : "-mr-[10%] md:-mr-[30%] justify-start"}`}>
                                        <p className={`${isEven ? "text-end" : "text-start"} text-xs md:text-sm text-[#374151] dark:text-gray-400 leading-relaxed`}>
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className={`flex flex-wrap gap-4 mt-6 text-sm text-gray-400 ${isEven ? "justify-end" : "justify-start"
                                        }`}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="text-[#374151] dark:text-[#D0DAFA] px-2 py-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`flex gap-4 mt-6 ${isEven ? "justify-end" : "justify-start"
                                        }`}>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#333] dark:text-[#D0DAFA] hover:text-blue-500 hover:dark:text-green-400 text-3xl"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 dark:text-[#D0DAFA] hover:text-blue-500 hover:dark:text-green-400 text-3xl"
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
export default ProjectSection;
