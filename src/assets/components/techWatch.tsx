import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Globe, TrendingUp, Book, Radio } from "lucide-react"

const TechWatch = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const veilles = [
    {
      title: "L'IA dans le monde du travail",
      subtitle: "L’intelligence artificielle générative bouleverse le monde du travail",
      why: "J’ai choisi ce sujet car l’intelligence artificielle transforme déjà la manière dont les entreprises fonctionnent. J’ai moi-même travaillé dans une entreprise utilisant un ATS (Applicant Tracking System), un logiciel de recrutement automatisé basé sur l’IA.",
      summary: "Les IA génératives comme ChatGPT ou Copilot aident les salariés à rédiger, coder, concevoir ou analyser plus vite. Elles améliorent la productivité mais posent aussi des questions sur l’automatisation et la fiabilité.",
      analysis: "Mon expérience avec un ATS m’a montré comment l’IA facilite le travail des recruteurs. Même performante, elle doit être supervisée par un humain pour éviter les erreurs ou biais. Dans le développement web, je vois l’IA comme un outil complémentaire.",
      icon: <Globe className="w-8 h-8 text-purple-400 mr-4" />,
      articles: [
        {
          title: "L’IA générative bouleverse le monde du travail",
          source: "Le Monde Informatique",
          link: "https://www.lemondeinformatique.fr/actualites/lire-lintelligence-artificielle-generative-bouleverse-le-monde-du-travail-93013.html",
          image: "/public/ia1.jpg"
        },
        {
          title: "Comment l’IA transforme les métiers",
          source: "ZDNet France",
          link: "https://www.zdnet.fr/actualites/comment-l-ia-transforme-les-metiers-39959423.htm",
          image: "/public/ia2.jpg"
        },
        {
          title: "IA et productivité : opportunités et risques",
          source: "Usine Digitale",
          link: "https://www.usine-digitale.fr/article/ia-et-productivite-opportunites-et-risques.N2144536",
          image: "/public/ia3.jpg"
        },
        {
          title: "L’IA au service des entreprises",
          source: "BFM Business",
          link: "https://www.bfmtv.com/economie/entreprises/technologies/l-ia-au-service-des-entreprises_AV-2024.html",
          image: "/public/ia4.jpg"
        }
      ],
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Cybersécurité des objets connectés (IoT)",
      subtitle: "Les objets connectés, nouvelle cible des cyberattaques",
      why: "La cybersécurité est un sujet fondamental. Les objets connectés (caméras, montres, assistants vocaux) sont de plus en plus présents, mais peuvent devenir des portes d’entrée pour les cyberattaques.",
      summary: "De nombreux fabricants négligent la sécurité des appareils connectés. Les experts recommandent d’intégrer la cybersécurité dès la conception (security by design).",
      analysis: "Cette veille m’a montré que la cybersécurité concerne autant les entreprises que les particuliers. Dans mes projets, je devrai appliquer ces bonnes pratiques pour protéger les utilisateurs.",
      icon: <TrendingUp className="w-8 h-8 text-blue-400 mr-4" />,
      articles: [
        {
          title: "Les objets connectés, nouvelle cible des cyberattaques",
          source: "ZDNet France",
          link: "https://www.zdnet.fr/actualites/les-objets-connectes-nouvelle-cible-des-cyberattaques-39966213.htm",
          image: "/public/cyber1.jpg"
        },
        {
          title: "IoT : les nouveaux défis de la cybersécurité",
          source: "Le Monde Informatique",
          link: "https://www.lemondeinformatique.fr/actualites/lire-iot-les-nouveaux-defis-de-la-cybersecurite-91523.html",
          image: "/public/cyber2.jpg"
        },
        {
          title: "Sécuriser les objets connectés",
          source: "ANSSI",
          link: "https://www.ssi.gouv.fr/entreprise/bonnes-pratiques/securite-des-objets-connectes/",
          image: "/public/cyber3.jpg"
        },
        {
          title: "Les risques liés à l’IoT",
          source: "CNIL",
          link: "https://www.cnil.fr/fr/objets-connectes",
          image: "/public/cyber4.jpg"
        }
      ],
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-500/20"
    }
  ]

  const sources = [
    {
      name: "Le Monde Informatique",
      description: "Actualités et analyses IT",
      icon: <Book className="w-6 h-6 text-white" />,
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
      icon: <Radio className="w-6 h-6 text-white" />,
      color: "from-sky-500 to-indigo-600",
      link: "https://developer.mozilla.org/fr/"
    },
    {
      name: "GitHub Trending",
      description: "Projets open source et tendances dev",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
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
          {/* Titre et intro */}
<motion.div variants={itemVariants} className="mb-16">
   <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Veille Technologique</h2>
  <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
    <h3 className="text-2xl font-semibold text-white mb-4">
      Qu’est-ce que la veille technologique ?
    </h3>
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <p>
        La veille technologique consiste à surveiller en permanence les évolutions techniques,
        les innovations et les nouvelles pratiques dans le domaine du numérique.
        Elle permet de rester informé, d’anticiper les changements et d’adapter ses
        compétences aux besoins du marché.
      </p>

      <p>
        <b>Pourquoi ces choix ?</b><br />
        J’ai choisi de concentrer ma veille sur l’intelligence artificielle et la
        cybersécurité des objets connectés, car ce sont deux domaines majeurs en pleine
        expansion. L’IA transforme profondément les méthodes de travail tandis que la
        cybersécurité est devenue essentielle face à l’augmentation des cybermenaces.
        Ces thématiques sont directement liées à mon projet professionnel dans le
        développement web.
      </p>
    </div>
  </div>
</motion.div>

          {/* Veilles */}
          {veilles.map((veille, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-16 space-y-6">
              <div className={`bg-gradient-to-br ${veille.gradient} rounded-2xl p-8 border ${veille.border}`}>
                <div className="flex items-center mb-4">
                  {veille.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{veille.title}</h3>
                    <p className="text-gray-300 font-semibold">{veille.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p><b>Pourquoi ce choix ?</b><br />{veille.why}</p>
                  <p><b>Résumé de l'article :</b><br />{veille.summary}</p>
                  <p><b>Conclusion :</b><br />{veille.analysis}</p>
                </div>
              </div>

              {/* Articles */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {veille.articles.map((article, i) => (
                  <a
                    key={i}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50 hover:border-slate-500/50 transition"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="rounded-lg w-full h-40 object-cover mb-3"
                    />
                    <h4 className="text-white font-semibold text-sm mb-1">{article.title}</h4>
                    <p className="text-gray-400 text-xs">{article.source}</p>
                    <span className="text-purple-400 text-xs flex items-center gap-1 mt-2">
                      Lire l'article <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Sources de veille */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Book className="w-6 h-6 text-blue-400 mr-3" />
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
