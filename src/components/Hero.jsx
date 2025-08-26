import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Users, CheckCircle, Star, Zap } from 'lucide-react'
import ProductShowcase from './ProductShowcase'

const Hero = () => {
  const [showProducts, setShowProducts] = useState(false)
  const benefits = [
    { icon: Shield, text: "Protection 99.9% Germes" },
    { icon: Award, text: "Formule Approuvée" },
    { icon: Users, text: "Plus de 10,000 Clients" },
    { icon: Zap, text: "Action Rapide" }
  ]



  return (
    <section id="hero" className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container-max">
        <div className="text-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award size={16} />
                <span>Formulé & Approuvé par Pharmacien</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-title font-bold text-gray-900 leading-tight text-center"
              >
                Votre Santé,
                <span className="text-primary-600 block">Notre Priorité</span>
                <span className="text-2xl md:text-3xl lg:text-4xl block mt-2">Pharmacie L'Experience</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hero-subtitle text-gray-600 leading-relaxed text-center"
              >
                Votre pharmacie de confiance vous accompagne dans tous vos besoins de santé et bien-être.
                Produits de qualité, conseils personnalisés et service professionnel.
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <benefit.icon size={16} className="text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-lg px-8 py-4"
              >
                Nous Contacter
              </button>
              <button
                onClick={() => setShowProducts(true)}
                className="btn-secondary text-lg px-8 py-4"
              >
                Voir Nos Produits
              </button>
            </motion.div>

            {/* Product Photos Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-8"
            >
              {/* Main Product Photos - 2 Grid */}
              <div className="product-showcase mb-8">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="product-card group bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src="/sanitieser.jpg"
                      alt="Gel Désinfectant Premium"
                      className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg lg:text-xl">Gel Désinfectant Premium</h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                      Gel désinfectant pour les mains à base d'alcool 70%. Formule hydratante qui élimine 99.9% des germes tout en préservant la douceur de vos mains.
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-xs lg:text-sm text-gray-500">Approuvé Ministère de la Santé</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="product-card group bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src="/sanitiser 2.jpg"
                      alt="Désinfectant Multi-Surfaces"
                      className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg lg:text-xl">Désinfectant Multi-Surfaces</h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                      Solution désinfectante professionnelle pour toutes surfaces. Efficace contre virus, bactéries et champignons. Idéal pour maisons, bureaux et commerces.
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-xs lg:text-sm text-gray-500">Formule Professionnelle</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Product Grid - 3 Horizontal Layout */}
              <div className="product-features-grid">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-lg shadow-md p-4 lg:p-6 text-center"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield size={24} className="text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Protection Maximale</h4>
                  <p className="text-xs lg:text-sm text-gray-600">Élimine 99.9% des germes et virus en 30 secondes d'application</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-lg shadow-md p-4 lg:p-6 text-center"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Qualité Certifiée</h4>
                  <p className="text-xs lg:text-sm text-gray-600">Formulé par pharmacien licencié avec plus de 25 ans d'expérience</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-lg shadow-md p-4 lg:p-6 text-center"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Confiance Client</h4>
                  <p className="text-xs lg:text-sm text-gray-600">Plus de 10,000 clients satisfaits à travers tout le Rwanda</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 mt-6 border-t border-gray-200"
            >
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.9/5 (2,847 avis)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm text-gray-600">Conseils Personnalisés</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Product Showcase Modal */}
      <ProductShowcase
        isOpen={showProducts}
        onClose={() => setShowProducts(false)}
      />
    </section>
  )
}

export default Hero
