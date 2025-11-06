import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Globe, TrendingUp, BookOpen, Rss } from "lucide-react"

const TechWatch = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const veilles = [
    {
      title: "L'IA dans le monde du travail",
      subtitle: "L’intelligence artificielle générative bouleverse le monde du travail",
      why: `J’ai choisi ce sujet car l’intelligence artificielle (IA) transforme déjà la manière dont les entreprises fonctionnent.
       J’ai moi-même travaillé dans une entreprise utilisant un ATS (Applicant Tracking System), un logiciel de recrutement automatisé basé sur l’IA.`,
      summary: `Les IA génératives comme ChatGPT ou Copilot aident les salariés à rédiger, coder, concevoir ou analyser plus vite. Elles améliorent la productivité mais posent aussi des questions sur l’automatisation et la fiabilité.`,
      analysis: `Mon expérience avec un ATS m’a montré comment l’IA facilite le travail des recruteurs. Même performante, elle doit être supervisée par un humain pour éviter les erreurs ou biais. Dans le développement web, je vois l’IA comme un outil complémentaire.`,
      category: "IA",
      icon: <Globe className="w-8 h-8 text-purple-400 mr-4" />,
      article: {
        title: "L’intelligence artificielle générative bouleverse le monde du travail",
        source: "Le Monde Informatique, mars 2025",
        link: "https://www.lemondeinformatique.fr/actualites/lire-lintelligence-artificielle-generative-bouleverse-le-monde-du-travail-93013.html",
        image: "/images/ia-travail.jpg"
      },
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Cybersécurité des objets connectés (IoT)",
      subtitle: "Les objets connectés, nouvelle cible des cyberattaques",
      why: `La cybersécurité est un sujet fondamental. Les objets connectés (caméras, montres, assistants vocaux) sont de plus en plus présents, mais peuvent devenir des portes d’entrée pour les cyberattaques.`,
      summary: `De nombreux fabricants négligent la sécurité des appareils connectés. Les experts recommandent d’intégrer la cybersécurité dès la conception (security by design).`,
      analysis: `Cette veille m’a montré que la cybersécurité concerne autant les entreprises que les particuliers. Dans mes projets, je devrai appliquer ces bonnes pratiques pour protéger les utilisateurs.`,
      category: "Sécurité",
      icon: <TrendingUp className="w-8 h-8 text-blue-400 mr-4" />,
      article: {
        title: "Les objets connectés, nouvelle cible des cyberattaques en 2025",
        source: "ZDNet France, avril 2025",
        link: "https://www.zdnet.fr/actualites/les-objets-connectes-nouvelle-cible-des-cyberattaques-39966213.htm",
        image: "/images/iot-cyber.jpg"
      },
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-500/20"
    }
  ]

  const sources = [
    {
      name: "Le Monde Informatique",
      description: "Actualités et analyses IT",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-500",
      link: "https://www.lemondeinformatique.fr/"
    },
    {
      name: "ZDNet France",
      description: "Actualités technologie & sécurité",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-indigo-500",
      link: "https://www.zdnet.fr/"
    },
    {
      name: "MDN Web Docs",
      description: "Documentation et bonnes pratiques web",
      icon: <Rss className="w-6 h-6 text-white" />,
      color: "from-sky-500 to-indigo-600",
      link: "https://developer.mozilla.org/fr/"
    },
    {
      name: "GitHub Trending",
      description: "Projets open source et tendances dev",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      color: "from-gray-600 to-gray-800",
      link: "https://github.com/trending"
    },
    {
      name: "Stack Overflow",
      description: "Communauté de développeurs",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "from-orange-500 to-red-500",
      link: "https://stackoverflow.com/"
    },
    {
      name: "Dev.to",
      description: "Articles techniques et retours d'expérience",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "from-green-500 to-teal-500",
      link: "https://dev.to/"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="techwatch" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Veille Technologique
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mes veilles sur l'intelligence artificielle et la cybersécurité des objets connectés.
            </p>
          </motion.div>

          {/* Veilles */}
          {veilles.map((veille, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-16 space-y-6">
              <div className={`bg-gradient-to-br ${veille.gradient} rounded-2xl p-8 border ${veille.border}`}>
                <div className="flex items-center mb-4">
                  {veille.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{veille.title}</h3>
                    <p className="text-gray-300">
                      <b>{veille.subtitle}</b>
                    </p>
                  </div>
                </div>

                {/* Texte sans image */}
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <b>Pourquoi ce choix ?</b>
                    <br />
                    {veille.why}
                  </p>
                  <p>
                    <b>Résumé de l'article :</b>
                    <br />
                    {veille.summary}
                  </p>
                  <p>
                    <b>Conclusion :</b>
                    <br />
                    {veille.analysis}
                  </p>
                </div>
              </div>

              {/* Articles avec images */}
              <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 w-full md:w-1/2">
                  <img
                    src={veille.article.image}
                    alt={veille.article.title}
                    className="rounded-lg mb-3 w-full object-cover max-h-40"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {veille.article.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">{veille.article.source}</p>
                  <a
                    href={veille.article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
                  >
                    Lire l'article <ExternalLink className="inline w-4 h-4" />
                  </a>
                </div>

                {/* Deuxième article exemple */}
                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 w-full md:w-1/2">
                  <img
                    src="public/ia1.jpg"
                    alt="Article secondaire"
                    className="rounded-lg mb-3 w-full object-cover max-h-40"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">Article complémentaire</h4>
                  <p className="text-gray-300 text-sm mb-2">Source d'exemple</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
                  >
                    Lire l'article <ExternalLink className="inline w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Sources de veille */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
              Sources de Veille
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sources.map((source) => (
                <motion.a
                  key={source.name}
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 text-center"
                >
                  <div className={`bg-gradient-to-r ${source.color} p-4 rounded-lg mx-auto w-fit mb-4`}>
                    {source.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{source.name}</h4>
                  <p className="text-gray-300 text-sm">{source.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechWatch
