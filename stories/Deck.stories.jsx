import React from 'react';

import { Deck } from './Deck';


export default {
  title: 'Game/Deck',
  component: Deck,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Deck {...args} />;

export const MainDeck = Template.bind({});

