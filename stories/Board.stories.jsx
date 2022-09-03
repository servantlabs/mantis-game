import React from 'react';

import { Board } from './Board';

export default {
  title: 'Game/Board',
  component: Board,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Board {...args} />;

export const MainBoard = Template.bind({});

