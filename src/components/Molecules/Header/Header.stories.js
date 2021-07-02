import React from 'react';

import Header from './Header';
import * as LabelStories from '../../Atoms/Label/Label.stories';
import * as InputStories from '../../Atoms/Input/Input.stories';
import * as ButtonStories from '../../Atoms/Button/Button.stories';

export default {
    component: Header,
    title: 'Molecules/Header'
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Header'
};

export const HeaderWithSubtitle = Template.bind({});
HeaderWithSubtitle.args = {
    title: 'Default Header',
    subtitle: 'default subtitle'
};


export const HeaderWithButton = Template.bind({});
HeaderWithButton.args = {
    title: 'Default HeaderWithButton',
    subtitle: 'default subtitle',
    buttonLabel: 'Sign in'
};
