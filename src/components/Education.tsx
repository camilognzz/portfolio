const Education = () => {
    return (
        <section id="about" className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12">
            <div className="about flex flex-col md:flex-row items-start gap-10">

                <div className="md:w-2/2 flex flex-col mb-6">

                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
                            Educación
                        </h2>
                    </div>

                    <div className="mb-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-500 dark:text-green-400">
                                Ingeniería de Sistemas
                            </h3>
                            <span className="text-lg sm:text-xl text-[#374151] dark:text-gray-400">
                                Septiembre 2024
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <p className="text-base sm:text-xl text-[#374151] dark:text-gray-400">
                                Corporación Universitaria del Caribe CECAR
                            </p>
                            <span className="text-lg sm:text-xl text-[#374151] dark:text-gray-400">
                                Sincelejo, Colombia
                            </span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-green-400 mb-4">
                            Certificaciones
                        </h3>
                        <div className="space-y-6">
                            {[
                                {
                                    name: "Diplomado en Gestión de Tecnologías de la Información",
                                    place: "Corporación Universitaria del Caribe CECAR",
                                    year: "2024"
                                },
                                {
                                    name: "English certificate (B1.2)",
                                    place: "Corporación Universitaria del Caribe CECAR",
                                    year: "2024"
                                },
                                {
                                    name: "Universidad JavaScript",
                                    place: "Udemy",
                                    year: "2024"
                                },
                                {
                                    name: "Curso profesional de Git y GitHub",
                                    place: "Platzi",
                                    year: "2024"
                                },
                                {
                                    name: "NestJs: Microservicios con NestJs, AWS, Docker Profesional",
                                    place: "Udemy",
                                    year: "2024"
                                },
                                {
                                    name: "SQL: Creación de Bases de Datos",
                                    place: "Udemy",
                                    year: "2024"
                                }
                            ].map((cert, index) => (
                                <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-center">
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-medium text-[#374151] dark:text-[#D0DAFA]">
                                            {cert.name}
                                        </h4>
                                        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                                            {cert.place}
                                        </p>
                                    </div>
                                    <span className="text-lg sm:text-xl text-[#374151] dark:text-gray-400">
                                        {cert.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
