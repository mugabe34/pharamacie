import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { showContactToast, showErrorToast } from '../utils/toast'
import { Send, Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react'

const schema = yup.object({
  name: yup.string().required('Le nom est requis').min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: yup.string().required('L\'email est requis').email('Veuillez entrer un email valide'),
  phone: yup.string().matches(/^[\+]?[0-9][\d]{0,15}$/, 'Veuillez entrer un numéro de téléphone valide'),
  subject: yup.string().required('Le sujet est requis'),
  message: yup.string().required('Le message est requis').min(10, 'Le message doit contenir au moins 10 caractères'),
  quantity: yup.number().min(1, 'La quantité doit être au moins 1'),
  productType: yup.string().required('Veuillez sélectionner un type de produit')
})

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      // Create email content
      const emailSubject = encodeURIComponent(`Contact: ${data.subject}`)
      const emailBody = encodeURIComponent(`
Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone || 'Non fourni'}
Type de produit: ${data.productType}
Sujet: ${data.subject}

Message:
${data.message}

---
Envoyé depuis le site web de Pharmacie L'Experience
      `)

      // Open email client
      window.open(`mailto:pharmacie/'experience@yahoo.fr?subject=${emailSubject}&body=${emailBody}`)

      showContactToast()
      reset()
    } catch (error) {
      showErrorToast('Quelque chose s\'est mal passé. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Appelez-nous",
      details: "0788473857",
      subtext: "Lun-Ven 8h-18h"
    },
    {
      icon: Mail,
      title: "Écrivez-nous",
      details: "pharmacie/'experience@yahoo.fr",
      subtext: "Réponse sous 2 heures"
    },
    {
      icon: MapPin,
      title: "Visitez-nous",
      details: "4693 Kigali/Rwanda",
      subtext: "Kicukiro Gahanga"
    },
    {
      icon: Clock,
      title: "Heures d'ouverture",
      details: "Lun-Sam: 8h-20h",
      subtext: "Dimanche: 10h-18h"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des questions sur nos produits? Besoin de commandes en gros? Nous sommes là pour vous aider!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="card p-6"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <info.icon size={24} className="text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-primary-600 font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.subtext}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white"
            >
              <h4 className="text-xl font-bold mb-3">Informations Légales</h4>
              <ul className="space-y-2 text-primary-100">
                <li>• Numéro TIN: 103751435</li>
                <li>• Consultation gratuite avec pharmacien</li>
                <li>• 15% de réduction pour professionnels de santé</li>
                <li>• Programme de fidélité disponible</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un Message
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="contact-form-grid gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="contact-form-grid gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0788544970"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Intérêt Produit *
                  </label>
                  <select
                    {...register('productType')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.productType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Sélectionnez un produit</option>
                    <option value="gel-desinfectant">Gel Désinfectant</option>
                    <option value="desinfectant-surfaces">Désinfectant Surfaces</option>
                    <option value="format-voyage">Format Voyage</option>
                    <option value="commande-gros">Commande en Gros</option>
                    <option value="consultation">Consultation Pharmacien</option>
                  </select>
                  {errors.productType && (
                    <p className="mt-1 text-sm text-red-600">{errors.productType.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Comment pouvons-nous vous aider?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Parlez-nous de vos besoins..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
