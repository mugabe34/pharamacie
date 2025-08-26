import toast from 'react-hot-toast'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

// Custom toast configurations
export const showSuccessToast = (message, options = {}) => {
  return toast.success(message, {
    duration: 4000,
    style: {
      background: '#10B981',
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#10B981',
    },
    ...options
  })
}

export const showErrorToast = (message, options = {}) => {
  return toast.error(message, {
    duration: 5000,
    style: {
      background: '#EF4444',
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#EF4444',
    },
    ...options
  })
}

export const showInfoToast = (message, options = {}) => {
  return toast(message, {
    duration: 4000,
    icon: '💡',
    style: {
      background: '#3B82F6',
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
    },
    ...options
  })
}

export const showLoadingToast = (message, promise, options = {}) => {
  return toast.promise(
    promise,
    {
      loading: message || 'Chargement...',
      success: options.successMessage || 'Succès!',
      error: options.errorMessage || 'Quelque chose s\'est mal passé',
    },
    {
      style: {
        padding: '16px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: '500',
      },
      loading: {
        style: {
          background: '#F59E0B',
          color: '#fff',
          boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)',
        },
      },
      success: {
        style: {
          background: '#10B981',
          color: '#fff',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
        },
        duration: 4000,
      },
      error: {
        style: {
          background: '#EF4444',
          color: '#fff',
          boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
        },
        duration: 5000,
      },
    }
  )
}

export const showCustomToast = (message, type = 'default', options = {}) => {
  const baseStyle = {
    padding: '16px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
    maxWidth: '400px',
  }

  const styles = {
    default: {
      background: '#374151',
      color: '#fff',
      boxShadow: '0 10px 25px rgba(55, 65, 81, 0.3)',
    },
    pharmacy: {
      background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
      color: '#fff',
      boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)',
    },
    warning: {
      background: '#F59E0B',
      color: '#fff',
      boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)',
    }
  }

  return toast(message, {
    duration: 4000,
    style: {
      ...baseStyle,
      ...styles[type],
    },
    ...options
  })
}

// Specialized pharmacy-themed toasts
export const showOrderToast = (productName, quantity, total) => {
  return showSuccessToast(
    `Added ${quantity}x ${productName} to cart! Total: $${total}`,
    {
      duration: 3000,
      icon: '🛒',
    }
  )
}

export const showContactToast = () => {
  return showSuccessToast(
    "Merci! Nous vous répondrons dans les 24 heures.",
    {
      duration: 4000,
      icon: '📧',
    }
  )
}

export const showNewsletterToast = () => {
  return showSuccessToast(
    "Bienvenue! Vous recevrez des mises à jour sur nos nouveaux produits et offres spéciales.",
    {
      duration: 4000,
      icon: '📬',
    }
  )
}

export const showDiscountToast = () => {
  return showInfoToast(
    "🎉 Offre spéciale: Utilisez le code SANTE20 pour 20% de réduction sur votre première commande!",
    {
      duration: 6000,
    }
  )
}
