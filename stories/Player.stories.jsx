import React from 'react';

import { Player } from './Player';

export default {
  title: 'Game/Player',
  component: Player,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Player {...args} />;

export const MainPlayer = Template.bind({});

