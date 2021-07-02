import React from 'react';

import Form from './Form';
import * as InputLabelStories from '../../Molecules/InputLabel/InputLabel.stories';


export default {
    component: Form,
    title: 'Organisms/Form'
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default Label',
    inputs: [
        { id: '1', label: 'input 1' },
        { id: '2', label: 'input 2' },
        { id: '3', label: 'input 3' },
        { id: '4', label: 'input 4' },
    ]
};

export const WithHeader = Template.bind({});
WithHeader.args = {
    label: 'WithHeader Label',
    hasHeader: true,
    inputs: [
        ...Default.args.inputs,
    ]
};

export const WithRequired = Template.bind({});
WithRequired.args = {
    label: 'WithRequired Label',
    inputs: [
        ...Default.args.inputs,
        { id: '6', label: 'required input 5', isRequired: true },
    ]
};