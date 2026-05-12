import { useState, useEffect } from 'react'

export const useToast = (duration = 7000) => {
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' })
    const [isClosing, setIsClosing] = useState(false)

    const showToast = (message, type = 'success') => {
        setIsClosing(false)
        setToast({ show: true, message, type })
    }

    const hideToast = () => {
        setIsClosing(true)
    }

    const onAnimationEnd = () => {
        if (isClosing) {
            setToast(prev => ({ ...prev, show: false }))
            setIsClosing(false)
        }
    }

    useEffect(() => {
        if (toast.show && !isClosing) {
            const timer = setTimeout(hideToast, duration)
            return () => clearTimeout(timer)
        }
    }, [toast.show, isClosing, duration])

    return { toast, showToast, hideToast, isClosing, onAnimationEnd }
}
