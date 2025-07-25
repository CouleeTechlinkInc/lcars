import type { Meta, StoryObj } from '@storybook/react-vite';

import { Frame } from '../components/Frame/Frame';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'FrameParts/Frame',
  component: Frame,
  parameters: {
    // Use default layout (padded) but allow natural sizing
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    leftWidth: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'none'],
      },
    },
    rightWidth: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'none'],
      },
    },
    topWidth: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'none'],
      },
    },
    bottomWidth: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'none'],
      },
    },
    leftColor: {
      control: {
        type: 'select',
        options: ['main', 'alt1', 'alt2'],
      },
    },
    rightColor: {
      control: {
        type: 'select',
        options: ['main', 'alt1', 'alt2'],
      },
    },
    topColor: {
      control: {
        type: 'select',
        options: ['main', 'alt1', 'alt2'],
      },
    },
    bottomColor: {
      control: {
        type: 'select',
        options: ['main', 'alt1', 'alt2'],
      },
    },
  },
  args: {
    leftWidth: 'md',
    rightWidth: 'none',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'main',
    rightColor: 'main',
    topColor: 'main',
    bottomColor: 'main',
  },
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    leftWidth: 'md',
    rightWidth: 'none',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'main',
    rightColor: 'main',
    topColor: 'main',
    bottomColor: 'main',
  },
};

export const FullFrame: Story = {
  args: {
    leftWidth: 'lg',
    rightWidth: 'md',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'main',
    rightColor: 'alt1',
    topColor: 'alt2',
    bottomColor: 'main',
  },
};

export const SidebarOnly: Story = {
  args: {
    leftWidth: 'md',
    rightWidth: 'none',
    topWidth: 'none',
    bottomWidth: 'none',
    leftColor: 'main',
    rightColor: 'main',
    topColor: 'main',
    bottomColor: 'main',
  },
};

export const NoFrame: Story = {
  args: {
    leftWidth: 'none',
    rightWidth: 'none',
    topWidth: 'none',
    bottomWidth: 'none',
    leftColor: 'main',
    rightColor: 'main',
    topColor: 'main',
    bottomColor: 'main',
  },
}; 