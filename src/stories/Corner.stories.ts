import type { Meta, StoryObj } from '@storybook/react-vite';

import { Corner } from '../components/Corner/Corner';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'FrameParts/Corner',
  component: Corner,
  parameters: {
    // Use default layout (padded) but allow natural sizing
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      },
    },
    verticalSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    horizontalSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    position: 'top-left',
    verticalSize: 'lg',
    horizontalSize: 'sm',
  },
} satisfies Meta<typeof Corner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    position: 'top-left',
    verticalSize: 'lg',
    horizontalSize: 'sm',
  },
};
