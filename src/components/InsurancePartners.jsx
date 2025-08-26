import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const InsurancePartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Insurance companies with actual logos
  const insuranceCompanies = [
    { id: 1, name: "Sanalam", logo: "/sanalam.jpg" },
    { id: 2, name: "Radiant", logo: "/radiant.jpg" },
    { id: 3, name: "MMI", logo: "/mmi.jpg" },
    { id: 4, name: "Britam", logo: "/britam.jpg" },
    { id: 5, name: "Eden Care", logo: "/eden care.jpg" },
    { id: 6, name: "Partenaire 6", logo: "/api/placeholder/80/80" }
  ]

  // Auto-swipe animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % insuranceCompanies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [insuranceCompanies.length])

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Partenaires Assurance
          </h3>
          <p className="text-sm text-gray-600">
            Nous travaillons avec les principales compagnies d'assurance
          </p>
        </motion.div>

        {/* Desktop View - All 6 logos */}
        <div className="insurance-grid hidden md:flex">
          {insuranceCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-gray-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full items-center justify-center hidden">
                <span className="text-primary-600 font-bold text-sm">
                  {company.name.charAt(0)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Swipe Animation */}
        <div className="md:hidden">
          <div className="insurance-grid">
            {/* Show 3 logos at a time on mobile */}
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % insuranceCompanies.length
              const company = insuranceCompanies[index]
              
              return (
                <motion.div
                  key={`${company.id}-${currentIndex}`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                  className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-gray-100 ${
                    offset === 1 ? 'scale-110' : 'scale-90 opacity-70'
                  } transition-all duration-300`}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 object-contain rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full items-center justify-center hidden">
                    <span className="text-primary-600 font-bold text-xs">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {insuranceCompanies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-6'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            Remboursement direct avec votre carte d'assurance
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default InsurancePartners
