import React from 'react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backColor1: { control: 'color' },
    backColor2: { control: 'color' },
    backColor3: { control: 'color' },
    frontColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Dealt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dealt.args = {
    backColor1: "#e07a35", 
    backColor2: "#b1cb55",
    backColor3: "#6e3288",
    frontColor: "#b1cb55",
};

export const inDeck = Template.bind({});
inDeck.args = {
    backColor1: "#e07a35", 
    backColor2: "#b1cb55",
    backColor3: "#6e3288",
    frontColor: "#b1cb55",
};
/*
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
 */