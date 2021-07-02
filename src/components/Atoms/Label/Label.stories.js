import React from 'react';

import Label from './Label';

export default {
    component: Label,
    title: 'Atoms/Label',
    argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <Label {...args} />;


export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    disabled: false,
    children: 'Default label'
};

export const Bold = Template.bind({});
Bold.args = {
    variant: 'bold',
    children: 'Bold Label'
};

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primaryLabel',
    children: 'Primary Label'
};
