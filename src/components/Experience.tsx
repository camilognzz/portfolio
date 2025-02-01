const Experience = () => {
    return (
        <section id="about" className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12">
            <div className="about flex flex-col md:flex-row items-start gap-10">

                <div className="md:w-2/2 flex flex-col mb-6">

                    <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
                            Sobre Mí
                        </h2>
                        <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">

                        <p className="text-lg sm:text-xl text-[#374151] dark:text-gray-400 leading-relaxed md:w-2/3 mb-6">
                            Soy ingeniero de sistemas y desarrollador full stack con experiencia en tecnologías modernas para la creación de soluciones eficientes y centradas en la experiencia del usuario. Tengo conocimientos en desarrollo web utilizando <span className="text-blue-500 dark:text-green-400">HTML, CSS, JavaScript, TypeScript, React, Next.js</span> y <span className="text-blue-500 dark:text-green-400">Tailwind CSS</span>, enfocándome en construir interfaces optimizadas y de alto rendimiento. En el backend, he trabajado con <span className="text-blue-500 dark:text-green-400">Node.js</span> y <span className="text-blue-500 dark:text-green-400">Spring Boot</span>, desarrollando sistemas escalables y seguros, además de gestionar bases de datos como <span className="text-blue-500 dark:text-green-400">MySQL</span> y <span className="text-blue-500 dark:text-green-400">MongoDB</span>.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default Experience;
