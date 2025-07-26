import type { Meta, StoryObj } from '@storybook/react-vite';

import { TopBar } from '../components/TopBar/TopBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'FrameParts/TopBar',
  component: TopBar,
  parameters: {
    // Use fullscreen layout so TopBar can take up entire viewport
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#000000',
      }}>
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    height: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['main', 'alt1', 'alt2'],
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
    },
    left: {
      control: {
        type: 'number',
      },
    },
    right: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    height: 'md',
    color: 'main',
    position: 'top',
    left: 0,
    right: 0,
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    height: 'md',
    color: 'main',
    position: 'top',
    left: 0,
    right: 0,
  },
  render: (args) => (
    <TopBar {...args}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
      }}>
        TopBar Content
      </div>
    </TopBar>
  ),
};

export const BottomPosition: Story = {
  args: {
    height: 'lg',
    color: 'alt1',
    position: 'bottom',
    left: 0,
    right: 0,
  },
  render: (args) => (
    <TopBar {...args}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
      }}>
        Bottom TopBar
      </div>
    </TopBar>
  ),
};

export const WithOffsets: Story = {
  args: {
    height: 'sm',
    color: 'alt2',
    position: 'top',
    left: 100,
    right: 100,
  },
  render: (args) => (
    <TopBar {...args}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
      }}>
        TopBar with Offsets
      </div>
    </TopBar>
  ),
};

export const MultipleTopBars: Story = {
  render: () => (
    <>
      <TopBar height="sm" color="main" position="top" left={0} right={0}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'black',
          fontSize: '14px',
        }}>
          Top Bar
        </div>
      </TopBar>
      <TopBar height="md" color="alt1" position="bottom" left={0} right={0}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'black',
          fontSize: '14px',
        }}>
          Bottom Bar
        </div>
      </TopBar>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        Multiple TopBars
        <br />
        <span style={{ fontSize: '16px', opacity: 0.8 }}>
          Top and bottom bars with different sizes
        </span>
      </div>
    </>
  ),
};