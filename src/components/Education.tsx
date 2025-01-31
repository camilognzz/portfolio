const Education = () => {
    return (
        <section
            id="education"
            className="max-w-6xl mx-auto py-12 px-6 md:px-32 lg:px-12"
        >
            <div className="max-w-5xl text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 dark:text-green-400 mb-6">
                    Educación
                </h2>

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-blue-500 dark:text-green-400">
                        Ingeniería de Sistemas
                    </h3>
                    <p className="text-base sm:text-lg text-[#374151] dark:text-gray-400">
                        Corporación Universitaria del Caribe CECAR | 2019 - 2024
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blue-500 dark:text-green-400">
                        Certificaciones
                    </h3>
                    <ul className="list-disc pl-5 text-base sm:text-lg text-[#374151] dark:text-gray-400">
                        <li>English certificate (B1.2) - Corporación Universitaria del Caribe CECAR (2024)</li>
                        <li>Universidad JavaScript - Udemy (2024)</li>
                        <li>Curso profesional de Git y GitHub - Platzi (2024)</li>
                        <li>NestJs: Microservicios con NestJs, AWS, Docker Profesional - Udemy (2024)</li>
                        <li>SQL: Creación de Bases de Datos - Udemy (2024)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
