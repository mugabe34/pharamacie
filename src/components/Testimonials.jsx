import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Uwimana Claudine",
      role: "Infirmière",
      location: "Kigali, Gasabo",
      rating: 5,
      text: "En tant qu'infirmière, j'ai besoin de produits fiables. Les produits de Pharmacie L'Experience sont doux pour mes mains mais efficaces contre les germes. Je les utilise depuis 6 mois et mes mains n'ont jamais été aussi bien!",
      avatar: "/api/placeholder/60/60",
      verified: true
    },
    {
      id: 2,
      name: "Mugisha Jean-Baptiste",
      role: "Propriétaire Restaurant",
      location: "Kigali, Nyarugenge",
      rating: 5,
      text: "Nous avons choisi Pharmacie L'Experience pour notre restaurant et la différence est incroyable. Notre personnel apprécie la formule non-collante et nos clients apprécient voir des produits de qualité sur chaque table.",
      avatar: "/api/placeholder/60/60",
      verified: true
    },
    {
      id: 3,
      name: "Mukamana Grace",
      role: "Mère de 3 enfants",
      location: "Kigali, Kicukiro",
      rating: 5,
      text: "Avec trois enfants, j'utilise beaucoup de désinfectant! Pharmacie L'Experience est la seule marque qui ne dessèche pas nos mains. Les enfants demandent même à l'utiliser car il sent si bon.",
      avatar: "/api/placeholder/60/60",
      verified: true
    },
    {
      id: 4,
      name: "Dr. Nzeyimana Patrick",
      role: "Pédiatre",
      location: "Kigali, Remera",
      rating: 5,
      text: "Je recommande Pharmacie L'Experience à toutes les familles de mes patients. Le mélange formulé par pharmacien est parfait pour les peaux sensibles, et je fais confiance au contrôle qualité derrière chaque produit.",
      avatar: "/api/placeholder/60/60",
      verified: true
    },
    {
      id: 5,
      name: "Uwase Marie-Claire",
      role: "Enseignante",
      location: "Kigali, Kimisagara",
      rating: 5,
      text: "Enseigner à l'école primaire signifie désinfecter constamment les mains. Pharmacie L'Experience garde ma classe sûre sans l'odeur chimique forte. Les parents ont même commencé à demander quelle marque nous utilisons!",
      avatar: "/api/placeholder/60/60",
      verified: true
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez des milliers de clients satisfaits qui font confiance à Pharmacie L'Experience
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-gray-900 ml-2">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600">Basé sur plus de 2,847 avis</span>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="card p-8 md:p-12 text-center relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary-200">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    {testimonials[currentIndex].verified && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-primary-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">✓</span>
            </div>
            <span className="font-medium">Approuvé Ministère</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">★</span>
            </div>
            <span className="font-medium">Formulé par Pharmacien</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">♥</span>
            </div>
            <span className="font-medium">Testé Dermatologiquement</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
