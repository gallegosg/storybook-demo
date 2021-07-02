import React from 'react';
import Button from '../../Atoms/Button/Button'
import Label from '../../Atoms/Label/Label'

export default function Header({ title, subtitle, buttonLabel }) {
    return (
        <header style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label
                    onClick={() => { }}
                    variant="bold"
                >
                    {title}
                </Label>
                <Label
                    onClick={() => { }}
                >
                    {subtitle}
                </Label>
            </div>
            {buttonLabel &&
                <div style={{ float: 'right' }}>
                    <Button>{buttonLabel}</Button>
                </div>}
        </header>
    );
}
