const Hero = () => {
    return (
      <section className="text-white min-h-screen flex items-center px-6 md:px-20">
        <div className="max-w-3xl">
          <p className="text-green-400 text-sm md:text-base">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">Tu Nombre.</h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mt-2">
            I build things for the web.
          </h2>
          <p className="text-gray-400 mt-4 md:text-lg">
            Soy un desarrollador especializado en la creación de experiencias digitales excepcionales.
            Actualmente, me enfoco en construir productos accesibles y centrados en el usuario.
          </p>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-[#0F172A] transition"
          >
            Check out my work!
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  