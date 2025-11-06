import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IExperience {
    company: string;
    title: string;
    period: string;
    description: string[];
    url: string;
}

const experiences: IExperience[] = [
     {
        company: "IPS 911 Asistencia Médica Domiciliaria",
        title: "Desarrollador de Software",
        period: "Mayo 2025 – Octubre 2025 ",
        description: [
            "Lideré el mantenimiento y la mejora de los sistemas internos de la institución, asegurando su disponibilidad en entornos críticos del sector salud.",
            "Desarrollé e implementé módulos para la gestión médica, logística y administrativa, optimizando la trazabilidad de pacientes y recursos.",
            "Atendí solicitudes y requerimientos de usuarios de diferentes áreas, brindando soporte técnico y funcional para asegurar la continuidad operativa de los sistemas.",
            "Participé en la integración de datos clínicos y administrativos, asegurando el cumplimiento de estándares de seguridad y confidencialidad en el manejo de información sensible de pacientes.",
            "Colaboré con equipos interdisciplinarios para alinear las soluciones tecnológicas con los objetivos institucionales y las necesidades médicas.",
            "Utilicé tecnologías como PHP, .NET, MySQL y JavaScript en el desarrollo, mantenimiento y soporte de los sistemas, aplicando buenas prácticas de programación y control de versiones."
        ],
        url: "https://fundacionhabacuc.org"
    },
    {
        company: "Fundación Habacuc",
        title: "Desarrollador Web",
        period: "Agosto 2023 – Octubre 2024",
        description: [
            "Diseñé y desarrollé un sitio web responsive y accesible, mejorando la visibilidad de la organización, optimizando la experiencia del usuario y asegurando compatibilidad con diferentes dispositivos y navegadores.",
            "Desarrollé una plataforma web integrando frontend, backend y base de datos, enfocándome en escalabilidad, usabilidad y eficiencia en la gestión de datos.",
            "Implementé API RESTful eficientes para gestionar la comunicación entre el frontend y el backend, optimizando flujos de datos, garantizando seguridad y asegurando tiempos de respuesta óptimos y escalabilidad.",
            "Proporcioné soporte técnico post-lanzamiento, resolviendo incidencias, mejorando funcionalidades basadas en feedback de los usuarios y aplicando actualizaciones para optimizar el rendimiento del sistema.",
            "Apliqué estrategias avanzadas de SEO, mejorando el posicionamiento en motores de búsqueda mediante optimización de contenido, estructura del sitio, velocidad de carga y buenas prácticas de indexación.",
            "Utilicé herramientas de análisis y monitoreo para evaluar el rendimiento del sitio y aplicar mejoras continuas."
        ],
        url: "https://fundacionhabacuc.org"
    }
];

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState<IExperience>(experiences[0]);

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.2 
    });

    return (
        <motion.section
            id="experiencia"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12"
        >
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
                    Experiencia
                </h2>
                <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
            </div>
            <div className="text-[#374151] dark:text-gray-400 p-6 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row text-center md:text-left">

                <div className="md:w-1/3 flex flex-col space-y-4 border-r border-[#8F98B7] dark:border-[#D0DAFA] pr-4">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            className={`text-lg text-start px-4 py-2 rounded-none transition-all duration-300 
                                border-l-4 ${selectedExperience.company === exp.company
                                    ? "text-white dark:text-[#D0DAFA] bg-[#8F98B7] dark:bg-[#1E293B] border-l-4 dark:border-green-400 border-blue-500 cursor-pointer transition shadow-lg"
                                    : "text-[#374151] dark:text-gray-400 hover:text-white hover:dark:text-[#D0DAFA] hover:bg-[#8F98B7] hover:dark:bg-[#1E293B] border-l-4 border-transparent cursor-pointer"}`}
                            onClick={() => setSelectedExperience(exp)}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                <div className="md:w-2/3 pl-6 min-h-[300px] md:min-h-[400px] flex flex-col justify-start h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedExperience.company}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <h2 className="text-2xl font-bold text-[#8F98B7] dark:text-[#D0DAFA]">
                                {selectedExperience.title}
                                <a
                                    href={selectedExperience.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 dark:text-green-400 ml-2 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-blue-500 dark:before:bg-green-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
                                >
                                    @{selectedExperience.company}
                                </a>
                            </h2>
                            <p className="text-[#374151] dark:text-gray-400 mt-1">{selectedExperience.period}</p>
                            <ul className="mt-4 space-y-2 text-[#374151] dark:text-gray-400">
                                {selectedExperience.description.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-500 dark:text-green-400 mr-2">▸</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </motion.section>
    );
};

export default Experience;
