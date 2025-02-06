import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const escapeHTML = (str: string) => {
    return str.replace(/[&<>"'`=/]/g, (char) => {
      const entities: { [key: string]: string } = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
        "`": "&#x60;",
        "=": "&#x3D;",
        "/": "&#x2F;",
      };
      return entities[char] || char;
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    recaptchaRef.current?.reset();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const name = escapeHTML(formData.get("user_name")?.toString().trim() || "");
    const email = escapeHTML(formData.get("user_email")?.toString().trim() || "");
    const message = escapeHTML(formData.get("message")?.toString().trim() || "");

    if (name.length < 3 || name.length > 50) {
      alert("El nombre debe tener entre 3 y 50 caracteres.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Ingrese un correo válido.");
      setIsSubmitting(false);
      return;
    }

    if (message.length < 10 || message.length > 500) {
      alert("El mensaje debe tener entre 10 y 500 caracteres.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm("service_yhd7szk", "template_76dru35", form.current, "6urYt2zP9RcgMVfKc");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      form.current.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="max-w-6xl mx-auto py-16 px-4 sm:px-6 md:px-32 lg:px-12">
      {showNotification && (
        <div className="fixed top-5 right-5 bg-blue-500 dark:bg-green-500 text-white py-2 px-4 rounded-none shadow-lg animate-slide-in">
          Mensaje enviado correctamente.
        </div>
      )}
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full flex flex-col mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA]">
              Contacto
            </h2>
            <div className="flex-1 h-[2px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
            ¡Envíame un correo electrónico si deseas contactarme! También puedes encontrarme en{" "}
            <a
              href="https://www.linkedin.com/in/camilognzz1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-green-400 font-medium underline-offset-4 hover:underline cursor-pointer"
            >
              LinkedIn
            </a>.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#F9FAFB] dark:bg-[#101A2D] p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-500 w-full max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Jayden Vital Morales"
                required
                minLength={3}
                maxLength={50}
                className="w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-[#1B2A41] text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-green-400 transition-all"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="jaydenvm@gmail.com"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                className="w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-[#1B2A41] text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-green-400 transition-all"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hola, quiero contactar contigo. ¡Gracias!"
                required
                minLength={10}
                maxLength={500}
                className="w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-[#1B2A41] text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-green-400 transition-all h-28 sm:h-32 resize-none"
              />
            </div>
            <div className="mb-6 flex justify-center">
              <ReCAPTCHA ref={recaptchaRef} sitekey="6LdFbM0qAAAAAHfbKszAyxlxrQ0cL_uxXII_IhSz" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 dark:bg-green-400 text-white dark:text-black font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-green-500 transition-all disabled:bg-gray-400"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
