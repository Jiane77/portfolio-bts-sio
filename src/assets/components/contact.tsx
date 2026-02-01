import { useState, FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_jemsjkl",
        "template_7jd46es",
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "29BjBSSH6QXvbYHhv"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-xl w-full bg-slate-800/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-purple-600/30 transition-transform duration-300 hover:scale-105 mb-10">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Contactez-moi</h2>
        <div className="space-y-5 text-lg">
          <p className="text-start font-medium">🌸 Nom : <span className="text-purple-300">Haroun</span></p>
          <p className="text-start font-medium">🌸 Prénom : <span className="text-purple-300">Djihane</span></p>
          <div className="flex items-center gap-3"><Mail className="text-purple-400" /><a href="mailto:haroundjihane0@gmail.com" className="hover:text-purple-300 underline">haroundjihane0@gmail.com</a></div>
          <div className="flex items-center gap-3"><Phone className="text-purple-400" /><a href="tel:+33668450856" className="hover:text-purple-300 underline">+33 6 68 45 08 56</a></div>
          <div className="flex items-center gap-3"><span className="text-purple-400 text-2xl">🐳</span><a href="https://hub.docker.com/u/jiane77" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 underline">Mon Docker</a></div>
          <div className="flex items-center gap-3"><Linkedin className="text-purple-400" /><a href="https://www.linkedin.com/in/djihane-haroun-183068348/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 underline">Djihane Haroun</a></div>
          <div className="flex items-center gap-3"><Github className="text-purple-400" /><a href="https://github.com/Jiane77" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 underline">Mon GitHub</a></div>
        </div>
      </div>
      <div className="max-w-xl w-full bg-slate-800/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-purple-600/30">
        <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Envoyez-moi un message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom *" className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all"/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Votre email *" className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all"/>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Votre message *" className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-none transition-all"/>
          <button type="submit" disabled={status === "sending"} className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50">
            {status === "sending" ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Envoi...</> :
             status === "success" ? <><CheckCircle className="w-5 h-5" />Message envoyé !</> :
             <><Send className="w-5 h-5" />Envoyer</>}
          </button>
          {status === "success" && <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center"><p className="text-green-400 text-sm font-medium">✓ Votre message a été envoyé avec succès !</p></div>}
          {status === "error" && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center"><p className="text-red-400 text-sm font-medium">✗ Une erreur est survenue. Réessayez ou contactez-moi par email.</p></div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
