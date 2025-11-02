import { Mail, Phone, Linkedin, Github} from "lucide-react";
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900 text-white px-6"
    >
      <div className="max-w-xl w-full bg-slate-800/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-purple-600/30 transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Contactez-moi
        </h2>

        <div className="space-y-5 text-lg">
          <p className="text-start font-medium">🌸 Nom : <span className="text-purple-300">Haroun</span></p>
          <p className="text-start font-medium">🌸 Prénom : <span className="text-purple-300">Djihane</span></p>

          <div className="text-start flex items-center justify-start gap-3">
            <Mail className="text-purple-400" />
            <a href="mailto:haroundjihane0@gmail.com" className="hover:text-purple-300 underline">
              haroundjihane0@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-start gap-3">
            <Phone className="text-purple-400" />
            <a href="tel:+33668450856" className="hover:text-purple-300 underline">
              +33 6 68 45 08 56
            </a>
          </div>
          <div className="flex items-center justify-start gap-3">
          <span className="text-purple-400 text-2xl">🐳</span>
            <a
              href="https://hub.docker.com/u/jiane77"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 underline"
            >
              Mon Docker
            </a>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Linkedin className="text-purple-400" />
            <a
              href="https://www.linkedin.com/in/djihane-haroun-183068348/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 underline"
            >
              Djihane Haroun
            </a>
          </div>

          <div className="flex items-center justify-start gap-3">
            <Github className="text-purple-400" />
            <a
              href="https://github.com/Jiane77"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 underline"
            >
              Mon GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
