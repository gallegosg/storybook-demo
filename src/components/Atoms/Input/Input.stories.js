import React from 'react';

import Input from './Input';

export default {
    component: Input,
    title: 'Atoms/Input',
    argTypes: { onChange: { action: 'cahnge' } },
};

const Template = args => <Input {...args} />;


export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    placeholder: 'Default Input'
};

export const Small = Template.bind({});
Small.args = {
    variant: 'small',
    placeholder: 'Small Input'
};

export const Medium = Template.bind({});
Medium.args = {
    variant: 'medium',
    placeholder: 'Medium Input'
};

export const Large = Template.bind({});
Large.args = {
    variant: 'large',
    placeholder: 'Large Input'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    placeholder: 'Disabled Input'
};