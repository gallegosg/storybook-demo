import React from 'react';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import "./InputLabel.css"

export default function InputLabel({ label, isRequired }) {
    return (
        <div>
            <Label
                for="input"
                onClick={() => { }}
                variant="primaryLabel"
            >
                {label}{' '}{isRequired && '*'}
            </Label>
            <Input
                id="input"
                onChange={() => { }}
                placeholder={label}
            />
        </div >
    );
}
