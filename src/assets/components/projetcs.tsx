import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Auto-ecole",
      description: "Mon projet personnel s’appelle “Auto-Ecole”.",
      image: "https://dwpt1kkww6vki.cloudfront.net/img/transport/autoecole.jpg",
      technologies: ["PHP", "React", "TypeScript", "Vite", "Tailwind CSS", "bootstrap", "tailwind", "HTML", "CSS"],
      features: [],
      github: "https://github.com/Jiane77/auto-ecole",
      demo: "AutoEcole.pdf",
      category: "Full Stack"
    },
    {
      title: "ShopZone",
      description: "Mon projet personnel s’appelle “ShopZone”. C’est un site e-commerce où les utilisateurs peuvent",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Q0rKuu52qIuwrG0EVmfK-C_Eok6iXn_frw&s",
      technologies: ["HTML", "React", "TypeScript", "Vite", "Tailwind CSS", "bootstrap"],
      features: [
        "Parcourir et acheter des produits",
        "Ajouter des produits à un panier",
        "Supprimer des produits du panier",
        "Voir le total des commandes sélectionnées",
      ],
      github: "https://github.com/Jiane77/Shop",
      demo: "https://jiane77-shop-ecommerce-exemple.vercel.app/",
      category: "Frontend"
    },
    {
      title: "GLPI - Documentation",
      description: "J’ai réalisé une documentation complète sur GLPI, un outil de gestion de parc informatique et de support technique. Ce document explique l’installation, la configuration et les principales fonctionnalités du logiciel.",
      image: "public/GLPI.png",
      technologies: ["GLPI"],
      features: [
        "Présentation et objectifs de GLPI",
        "Procédure d’installation et de configuration",
        "Gestion des tickets et des utilisateurs",
        "Fonctionnalités principales expliquées en détail",
      ],
      github: "https://github.com/Jiane77/Documentation-GLPI",
      demo: "public/documentationGLPI.pdf",
      category: "Documentation"
    },
    {
      title: "Game en C",
      description: "Un petit jeu où le joueur doit résoudre des opérations mathématiques le plus rapidement possible.",
      image: "https://img.freepik.com/vecteurs-libre/tableau-maths_23-2148178220.jpg?semt=ais_incoming&w=740&q=80",
      technologies: ["C"],
      features: [
        "Génération aléatoire d'opérations mathématiques",
        "Minuteur pour mesurer la vitesse",
        "Afficher le score final",
        "Interface simple et claire",
      ],
      github: "https://github.com/Jiane77/jeux",
      demo: "public/CGame.png",
      category: "Backend"
    },
    {
      title: "Snake",
      description: "Jeu Snake réalisé en langage C.",
      image: "image.png",
      technologies: ["C"],
      features: [
        "Déplacement du serpent",
        "Gestion des collisions",
        "Score en temps réel",
      ],
      github: "https://github.com/Jiane77/Snake",
      category: "Backend"
    },
    {
      title: "JuiceLab",
      description: "Boutique e-commerce réalisée avec Shopify pour la vente de jus frais artisanaux.",
      image: "shopify.jpg",
      technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
      features: [
        "Catalogue de produits",
        "Ajout et suppression du panier",
        "Tunnel de commande sécurisé",
        "Paiement en ligne (Visa, PayPal, Apple Pay)",
        "Gestion automatique des commandes et factures"
      ],
      github: "https://github.com/ton-compte/juicelab",
      category: "Full Stack"
    },  
    {
      title: "worldpress",
      description: "Mon projet personnel s’appelle “ShopZone”. C’est un site e-commerce où les utilisateurs peuvent",
      image: "WordPress.png",
      technologies: ["HTML", "React", "TypeScript", "Vite", "Tailwind CSS", "bootstrap"],
      features: [
        "Parcourir et acheter des produits",
        "Ajouter des produits à un panier",
        "Supprimer des produits du panier",
        "Voir le total des commandes sélectionnées",
      ],
      github: "https://github.com/Jiane77/Shop",
      demo: "https://jiane77-shop-ecommerce-exemple.vercel.app/",
      category: "Frontend"
    },  
    {
      title: "Tableau de synthèse",
      description: "Tableau de synthèse des compétences professionnelles au format Excel.",
      image: "https://servimg.eyrolles.com/static/media/1659/9782409001659_internet_h1400.jpg",
      technologies: [], 
      features: [],               
      github: "",             
      demo: "Tableau de synthèse.xlsx",
      category: "Tableau de synthèse"
    },
    {
      title: "Prtfolio",
      description: "le portfolio",
      image: "https://servimg.eyrolles.com/static/media/1659/9782409001659_internet_h1400.jpg",
      technologies: [], 
      features: [],               
      github: "https://github.com/Jiane77/portfolio-bts-sio",             
      demo: "Tableau de synthèse.xlsx",
      category: "Frontend"
    }
  ]

  const categories = ["Tous", "Full Stack", "Frontend", "Backend", "Documentation", "Tableau de synthèse"]
  const [selectedCategory, setSelectedCategory] = React.useState("Tous")

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Globe className="w-4 h-4" />
      case "Backend": return <Database className="w-4 h-4" />
      case "Full Stack": return <Code className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Projets
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les projets que j'ai réalisés durant ma formation et mes projets personnels
          </motion.p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {project.category !== "Tableau de synthèse" && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium text-sm mb-2">Fonctionnalités :</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-gray-300 text-xs flex items-center">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.category !== "Tableau de synthèse" && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-800/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Boutons */}
                <div className="flex space-x-3">
                  {project.category !== "Tableau de synthèse" && project.github && (
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 bg-slate-800/50 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-slate-700/50 hover:text-white transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        project.category === "Tableau de synthèse"
                          ? "bg-green-500/20 text-green-300 hover:bg-green-500/30 hover:text-green-200"
                          : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-purple-200"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      download={project.category === "Tableau de synthèse"}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>
                        {project.category === "Tableau de synthèse" ? "Télécharger Excel" : "Démo"}
                      </span>
                    </motion.a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
