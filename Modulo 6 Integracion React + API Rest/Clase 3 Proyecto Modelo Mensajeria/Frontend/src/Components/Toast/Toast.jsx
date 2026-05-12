import React from 'react'
import './Toast.css'

export const Toast = ({ show, message, type = 'success', hideToast, isClosing, onAnimationEnd }) => {
    if (!show) return null

    return (
        <div
            className={`toast toast-${type} ${isClosing ? 'toast-closing' : 'toast-opening'}`}
            onAnimationEnd={isClosing ? onAnimationEnd : undefined}
        >
            <span>{message}</span>
            <button className="toast-close" onClick={hideToast}>×</button>
        </div>
    )
}
