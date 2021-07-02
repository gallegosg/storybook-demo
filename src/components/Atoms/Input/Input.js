import React from 'react';
import './Input.css'

export default function Input({variant, ...props}) {
    return (
        <input 
            {...props}
            className={`input ${variant}`}
        />
    );
}