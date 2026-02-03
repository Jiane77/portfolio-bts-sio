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
      powerpointLink: "public/IA Travail.pptx",
      articles: [
        {
          title: "L’intelligence artificielle bouscule le monde du travail : 68 % des actifs utilisent déjà l’IA",
          source: "La Dépêche, 09/04/2025",
          link: "https://www.ladepeche.fr/2025/04/09/lintelligence-artificielle-bouscule-le-monde-du-travail-entre-acceleration-et-inquietudes-12626431.php?utm_source=chatgpt.com",
          image: "/public/ia1.jpg"
        },
        {
          title: "Publication du rapport “IA et Futur du Travail”",
          source: "Human Technology Foundation, 27/01/2025",
          link: "https://www.human-technology-foundation.org/fr-news/publication-du-rapport-ia-et-futur-du-travail---evenement-27-janvier-2025?utm_source=chatgpt.com",
          image: "IA et Futur du Travail.jpg"
        },
        {
          title: "Nouvelles compétences et intelligence artificielle transforment le monde du travail",
          source: "FMI, 15/01/2026",
          link: "https://www.imf.org/fr/blogs/articles/2026/01/14/new-skills-and-ai-are-reshaping-the-future-of-work?utm_source=chatgpt.com",
          image: "/public/ia3.jpg"
        },
        {
          title: "L’IA pourrait affecter 40 % des emplois dans le monde selon l’ONU",
          source: "Euronews, 08/04/2025",
          link: "https://fr.euronews.com/next/2025/04/08/lia-pourrait-selon-lonu-affecter-40-des-emplois-dans-le-monde-au-cours-de-la-prochaine-dec?utm_source=chatgpt.com",
          image: "/public/ia4.webp"
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
      powerpointLink: "public/Cybersecurite_IoT.pptx",
      articles: [
        {
          title: "Forecast: 28 milliards d’appareils IoT protégés d’ici 2028",
          source: "Advanced Television, 17/02/2025",
          link: "https://www.advanced-television.com/2025/02/17/forecast-28bn-iot-devices-protected-by-cybersecurity-by-2028/?utm_source=chatgpt.com",
          image: "/public/iot1.png"
        },
        {
          title: "Nearly half of network connections come from high‑risk IoT and IT devices",
          source: "TechRadar, 29/10/2025",
          link: "https://www.techradar.com/pro/security/nearly-half-of-network-connections-come-from-high-risk-iot-and-it-devices-so-make-sure-youre-protected?utm_source=chatgpt.com",
          image: "/public/iot2.jpg"
        },
        {
          title: "Top cybersecurity risks for 2026 : de la désinformation aux attaques IA",
          source: "Tom’s Guide, janvier 2026",
          link: "https://www.tomsguide.com/computing/online-security/from-misinformation-to-ai-powered-cyberattacks-the-top-cybersecurity-risks-for-2026?utm_source=chatgpt.com",
          image: "/public/iot3.png"
        },
        {
          title: "Global Cybersecurity Outlook 2026 : tendances et risques",
          source: "World Economic Forum, 2025–2026",
          link: "https://www.weforum.org/publications/global-cybersecurity-outlook-2026/in-full/3-the-trends-reshaping-cybersecurity?utm_source=chatgpt.com",
          image: "/public/iot4.avif"
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
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
              {veille.powerpointLink && (
                <div className="text-center mt-4">
                  <a
                    href={veille.powerpointLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Voir le PowerPoint
                  </a>
                </div>
              )}
            </motion.div>
          ))}

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
