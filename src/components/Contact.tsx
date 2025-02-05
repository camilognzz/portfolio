import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
      alert("El nombre debe tener entre 3 y 20 caracteres.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Ingrese un correo válido.");
      setIsSubmitting(false);
      return;
    }

    if (message.length < 10 || message.length > 500) {
      alert("El mensaje debe tener entre 10 y 200 caracteres.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm("service_yhd7szk", "template_76dru35", form.current, "6urYt2zP9RcgMVfKc");
      alert("Mensaje enviado correctamente.");
      form.current.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="max-w-6xl mx-auto py-16 px-6 md:px-32 lg:px-12">
      <div className="flex flex-col md:flex-row items-start gap-10">

        <div className="md:w-2/2 flex flex-col mb-6">

          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-0">
              Sobre Mí
            </h2>
            <div className="flex-1 h-[1px] bg-[#8F98B7] dark:bg-[#D0DAFA]"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6"></div>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 p-4 border rounded">
            <label htmlFor="name">Nombre:</label>
            <input type="text"
              id="name"
              name="user_name"
              placeholder="Juan Camilo Gómez"
              required 
              minLength={3}
              maxLength={50}
              className="border p-2 w-full" />

            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="juangomez@gmail.com"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className="border p-2 w-full"
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message"
              name="message"
              placeholder="Hola, quiero contactar contigo. ¡Gracias!"
              required
              minLength={10}
              maxLength={500}
              className="border p-2 w-full h-24" />

            {/* reCAPTCHA */}
            <ReCAPTCHA ref={recaptchaRef} sitekey="6Lesbc0qAAAAABEtFsuRqUJ9-pPhRXg5001SqKBr" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 
            text-white py-2 px-4 rounded
            hover:bg-blue-600 disabled:bg-gray-400">
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
