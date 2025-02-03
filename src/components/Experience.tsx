import { useState } from "react";

const experiences = [
    {
        company: "Fundación Habacuc",
        title: "Desarrollador Web",
        period: "Agosto 2023 – Octubre 2024",
        description: [
            "Diseñé y desarrollé un sitio web responsive y accesible, mejorando la visibilidad de la organización y optimizando la experiencia del usuario.",
            "Diseñé e implementé API RESTful para manejar los flujos de datos entre el frontend y el backend, asegurando tiempos de respuesta óptimos y escalabilidad",
            "Implementé un sistema seguro de donaciones en línea utilizando pasarelas de pago, logrando un aumento del 30 % en los aportes durante el primer trimestre tras su lanzamiento.",
            "Proporcioné soporte técnico post-lanzamiento, resolviendo problemas y optimizando funcionalidades basadas en los comentarios de los usuarios."
        ]
    }
];

const ExperienceCard = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

    return (
        <section id="about" className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12">
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
                    Experiencia
                </h2>
                <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
            </div>
            <div className="bg-[#0F172A] text-white p-6 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row text-center md:text-left">
                <div className="md:w-1/3 flex flex-col space-y-4 border-r border-gray-600 pr-4">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            className={`text-lg font-semibold text-start px-4 py-2 rounded-none transition-all ${selectedExperience.company === exp.company ? "text-teal-400 bg-gray-700 shadow-lg" : "text-gray-400"}`}
                            onClick={() => setSelectedExperience(exp)}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>
                <div className="md:w-2/3 pl-6">
                    <h2 className="text-2xl font-bold">
                        {selectedExperience.title} <span className="text-teal-400">@ {selectedExperience.company}</span>
                    </h2>
                    <p className="text-gray-400 mt-1">{selectedExperience.period}</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        {selectedExperience.description.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-teal-400 mr-2">▸</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExperienceCard;
