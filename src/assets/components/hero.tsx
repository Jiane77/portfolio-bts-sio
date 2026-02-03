import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-xl animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-shrink-0"
          >
          <img
          src="photo_de_profile.jpg"
          alt="Photo de profil"
          className="w-75 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-500 shadow-xl gap-11 -mt-12"
          />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left space-y-8 max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Étudiante en{' '}
              <span className="bg-gradient-to-r from-purple-400 bg-clip-text text-transparent">
                BTS SIO SLAM
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Passionnée par le développement web et les nouvelles technologies,
              je suis analyste développeuse et je conçois des applications modernes
              et performantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.button>

              <motion.a
                href="/DJIHANE_HAROUN_CV.pdf"
                download
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Télécharger CV</span>
              </motion.a>
            </div>

            <div className="pt-6 flex justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('#about')}
                className="text-gray-400 hover:text-white animate-bounce"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
