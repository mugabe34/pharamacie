import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, X, Plus, Minus, Star } from 'lucide-react'
import { showOrderToast } from '../utils/toast'

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const products = [
    {
      name: "Hand Sanitizer Gel",
      size: "8 oz",
      price: 12.99,
      originalPrice: 15.99,
      image: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 1247
    },
    {
      name: "Surface Disinfectant",
      size: "16 oz", 
      price: 18.99,
      originalPrice: 22.99,
      image: "/api/placeholder/80/80",
      rating: 4.8,
      reviews: 892
    },
    {
      name: "Travel Size Pack",
      size: "2 oz x 3",
      price: 15.99,
      originalPrice: 19.99,
      image: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 654
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show button after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAddToCart = () => {
    const product = products[selectedProduct]
    const total = (product.price * quantity).toFixed(2)

    showOrderToast(product.name, quantity, total)

    setIsExpanded(false)
    setQuantity(1)
  }

  const adjustQuantity = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={16} className="text-gray-600" />
                </button>

                <h3 className="text-lg font-bold text-gray-900 mb-4 pr-8">
                  Quick Order
                </h3>

                {/* Product Selection */}
                <div className="space-y-3 mb-6">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedProduct(index)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedProduct === index
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-600">{product.size}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-primary-600 font-bold text-sm">
                              ${product.price}
                            </span>
                            <span className="text-gray-400 line-through text-xs">
                              ${product.originalPrice}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={12} className="text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => adjustQuantity(-1)}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-semibold text-lg w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => adjustQuantity(1)}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Total and Add to Cart */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-gray-700">Total:</span>
                    <span className="text-2xl font-bold text-primary-600">
                      ${(products[selectedProduct].price * quantity).toFixed(2)}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full btn-primary flex items-center justify-center space-x-2 py-3"
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <span>✓ Free Shipping $50+</span>
                  <span>✓ 30-Day Guarantee</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Sticky Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className={`relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-3 ${
              isExpanded ? 'bg-gray-600' : ''
            }`}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ShoppingCart size={20} />
            </motion.div>
            <span className="hidden sm:inline">Buy Now</span>
            
            {/* Pulse Animation */}
            {!isExpanded && (
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary-400 rounded-full -z-10"
              />
            )}

            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              !
            </motion.div>
          </motion.button>

          {/* Floating Discount Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -top-3 -left-16 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
          >
            Save 25%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyBuyButton
