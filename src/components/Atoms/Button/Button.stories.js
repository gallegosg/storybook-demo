import React from 'react';

import Button from './Button';

export default {
    component: Button,
    title: 'Atoms/Button',
    argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    disabled: false,
    children: 'Default Button'
};

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button'
};

export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline',
    children: 'Outline Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    children: 'Disabled Button'
};