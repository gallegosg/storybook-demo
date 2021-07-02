import React from 'react';
import InputLabel from '../../Molecules/InputLabel/InputLabel'
import Header from '../../Molecules/Header/Header'
import Button from '../../Atoms/Button/Button'

export default function Form({ inputs, label, hasHeader }) {
    return (
        <div>
            {hasHeader &&<Header
                subtitle="Form subtitle"
                title={label}
            />}
            {inputs.map((input) => (
                <InputLabel {...input} />
            ))}
            <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'row' }}>
                <Button
                    onClick={() => { }}
                    variant="outline"
                >
                    Form Secondary
                </Button>
                <Button
                    onClick={() => { }}
                    variant="primary"
                >
                    Form Primary
                </Button>
            </div>
        </div >
    );
}
