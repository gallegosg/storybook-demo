import React from 'react';

import InputLabel from './InputLabel';
import * as LabelStories from '../../Atoms/Label/Label.stories';
import * as InputStories from '../../Atoms/Input/Input.stories';
import * as ButtonStories from '../../Atoms/Button/Button.stories';

export default {
    component: InputLabel,
    title: 'Molecules/InputLabel'
};

const Template = args => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default Input',
};


export const Required = Template.bind({});
Required.args = {
    label: 'Required Input',
    isRequired: true
};

