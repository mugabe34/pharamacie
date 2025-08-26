import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Award, CheckCircle } from 'lucide-react'

const ProductShowcase = ({ isOpen, onClose }) => {
  const products = [
    {
      id: 1,
      name: "Gel Désinfectant Premium",
      image: "/sanitieser.jpg",
      description: "Gel désinfectant pour les mains à base d'alcool 70%. Formule hydratante qui élimine 99.9% des germes tout en préservant la douceur de vos mains.",
      features: ["70% Alcool", "Formule Hydratante", "Action Rapide", "Sans Résidu"]
    },
    {
      id: 2,
      name: "Désinfectant Multi-Surfaces",
      image: "/sanitiser 2.jpg", 
      description: "Solution désinfectante professionnelle pour toutes surfaces. Efficace contre virus, bactéries et champignons. Idéal pour maisons, bureaux et commerces.",
      features: ["Multi-Surfaces", "Action Virucide", "Séchage Rapide", "Parfum Agréable"]
    }
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Nos Produits</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Caractéristiques:</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quality Badges */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Shield size={14} className="text-green-600" />
                        </div>
                        <span className="text-xs text-gray-600">Approuvé</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Award size={14} className="text-blue-600" />
                        </div>
                        <span className="text-xs text-gray-600">Qualité Premium</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Intéressé par nos produits?
              </h3>
              <p className="text-gray-600 mb-4">
                Contactez-nous pour plus d'informations ou pour passer commande
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onClose}
                  className="btn-primary"
                >
                  Nous Contacter
                </button>
                <button 
                  onClick={onClose}
                  className="btn-secondary"
                >
                  Visiter la Pharmacie
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductShowcase
