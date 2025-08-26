import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Shield, Award, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: "Gel Désinfectant", href: "#" },
      { name: "Désinfectant Surfaces", href: "#" },
      { name: "Format Voyage", href: "#" },
      { name: "Commandes Entreprises", href: "#" },
      { name: "Consultation Pharmacien", href: "#" }
    ],
    company: [
      { name: "À Propos", href: "#" },
      { name: "Notre Pharmacien", href: "#" },
      { name: "Promesse Qualité", href: "#" },
      { name: "Certifications", href: "#" },
      { name: "Carrières", href: "#" }
    ],
    support: [
      { name: "Contactez-nous", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Heures d'ouverture", href: "#" },
      { name: "Assurances", href: "#" },
      { name: "Services", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  const certifications = [
    { icon: Shield, text: "FDA Approved" },
    { icon: Award, text: "Pharmacist Formulated" },
    { icon: Heart, text: "Dermatologist Tested" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L'E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pharmacie L'Experience</h3>
                  <p className="text-gray-400 text-sm">Soins & Bien-être</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Votre pharmacie de confiance vous accompagne dans tous vos besoins de santé et bien-être.
                Conseils personnalisés, produits de qualité et service professionnel.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400" />
                  <span className="text-gray-300">0788544970</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400" />
                  <span className="text-gray-300">laboratoirel'expérience@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-gray-300">Kigali, Kicukiro, Gahanga, Rwanda</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Produits</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h5 className="font-semibold text-primary-400">Restez Informé</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors text-sm font-medium">
                    S'abonner
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  Recevez les mises à jour sur nos nouveaux produits et offres spéciales
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400">
                <cert.icon size={20} className="text-primary-400" />
                <span className="font-medium">{cert.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Pharmacie L'Experience. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Politique des Cookies
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              Fait avec ❤️ pour votre santé
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
