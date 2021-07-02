import React from 'react';
import './Button.css'

export default function Button({children, variant, ...props}) {
    return (
        <button
            {...props}
            className={`button ${variant}`}>
                {children}
        </button>
    );
}