import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Users, CheckCircle, Star, Clock, RefreshCw } from 'lucide-react'

const TrustSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Approuvé Ministère",
      description: "Tous nos produits respectent les normes de sécurité du Ministère de la Santé",
      badge: "MS",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Formulé par Pharmacien",
      description: "Développé par des pharmaciens licenciés avec plus de 20 ans d'expérience",
      badge: "PharmD",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Testé Dermatologiquement",
      description: "Testé cliniquement pour la sécurité et la douceur de la peau",
      badge: "DERM",
      color: "bg-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Certifié BPF",
      description: "Fabriqué dans des installations certifiées Bonnes Pratiques de Fabrication",
      badge: "BPF",
      color: "bg-orange-500"
    }
  ]

  const guarantees = [
    {
      icon: RefreshCw,
      title: "Garantie 30 Jours",
      description: "Pas satisfait? Remboursement complet sous 30 jours"
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Service client expert disponible 24h/24"
    },
    {
      icon: Star,
      title: "Garantie Qualité",
      description: "Chaque lot testé pour pureté et efficacité"
    }
  ]

  const pharmacistEndorsement = {
    name: "Dr. Kabera Justin, PharmD",
    title: "Pharmacien en Chef & Fondateur",
    credentials: "PharmD, RPh, 10+ ans d'expérience",
    image: "/api/placeholder/120/120",
    quote: "En tant que pharmacien praticien depuis plus de 10 ans, j'ai développé une expertise approfondie dans la formulation de produits de santé. Pharmacie L'Experience représente mon engagement à fournir aux familles rwandaises des produits de la plus haute qualité, formulés avec soin et testés rigoureusement.",
    signature: "/api/placeholder/150/50"
  }

  const stats = [
    { number: "99.9%", label: "Taux d'Élimination", sublabel: "Efficacité testée en laboratoire" },
    { number: "10,000+", label: "Clients Satisfaits", sublabel: "Et en croissance quotidienne" },
    { number: "4.9/5", label: "Note Client", sublabel: "Basé sur plus de 2,847 avis" },
    { number: "100%", label: "Ingrédients Naturels", sublabel: "Sans produits chimiques agressifs" }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Faire Confiance à Pharmacie L'Experience?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La santé de votre famille mérite les plus hauts standards. C'est pourquoi nous allons au-delà
            avec des certifications, des tests et des garanties de qualité.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="card p-6 text-center relative overflow-hidden"
            >
              <div className={`absolute top-4 right-4 ${cert.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                {cert.badge}
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon size={32} className="text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pharmacist Endorsement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 md:p-12 mb-16 bg-gradient-to-r from-primary-50 to-blue-50"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Dr</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pharmacistEndorsement.name}</h3>
                  <p className="text-primary-600 font-semibold">{pharmacistEndorsement.title}</p>
                  <p className="text-sm text-gray-600">{pharmacistEndorsement.credentials}</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                "{pharmacistEndorsement.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                  Signature
                </div>
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">Pharmacien Licencié</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon size={24} className="text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{guarantee.title}</h3>
              <p className="text-sm text-gray-600">{guarantee.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Approuvé par les Professionnels de Santé</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 font-semibold">Hôpitaux Locaux</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-gray-500 font-semibold">Centres Médicaux</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-gray-500 font-semibold">Maisons de Retraite</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-gray-500 font-semibold">Écoles & Crèches</div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Paiements Sécurisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-blue-500" />
                <span>Protection SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-purple-500" />
                <span>Accrédité Officiellement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
