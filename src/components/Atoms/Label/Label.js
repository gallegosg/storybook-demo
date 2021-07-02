import React from 'react';
import './Label.css'

export default function Label({children, variant, ...props}) {
    return (
        <p
            {...props}
            className={`label ${variant}`}>
                {children}
        </p>
    );
}