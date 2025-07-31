import type { Meta, StoryObj } from '@storybook/react-vite';

import { Frame } from '../components/Frame/Frame';
import { lcarsColors } from '../providers/theme/theme.utils';

// Semantic color paths for frame components
const semanticColorOptions = [
  // Frame-specific semantic colors
  'frame.primary',
  'frame.secondary',
  'frame.accent',
  'frame.divider',
  'frame.corner',
  'frame.sidebar',
  'frame.topbar',
  // Action colors for interactive frames
  'action.primary',
  'action.secondary',
  'action.disabled',
  // Status colors for state indication
  'status.info',
  'status.success',
  'status.warning',
  'status.error',
  'status.neutral',
  // Navigation colors
  'navigation.item',
  'navigation.itemActive',
  'navigation.indicator',
  // Content colors
  'content.primary',
  'content.secondary',
  // Background colors
  'background.base',
  'background.elevated',
] as const;

// Get all LCARS color names for the select options
const colorOptions = [
  '--- Semantic Colors (Recommended) ---',
  ...semanticColorOptions,
  '--- Legacy Colors (Deprecated) ---',
  'main', 'alt1', 'alt2', // Legacy colors
  '--- Appearance-based Colors (Deprecated) ---',
  ...Object.keys(lcarsColors) // All LCARS colors
] as const;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'FrameParts/Frame',
  component: Frame,
  parameters: {
    // Use fullscreen layout so Frame can take up entire viewport
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
    leftWidth: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'none'],
    },
    rightWidth: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'none'],
    },
    topWidth: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'none'],
    },
    bottomWidth: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'none'],
    },
    leftColor: {
      control: {
        type: 'select',
      },
      options: colorOptions,
    },
    rightColor: {
      control: {
        type: 'select',
      },
      options: colorOptions,
    },
    topColor: {
      control: {
        type: 'select',
      },
      options: colorOptions,
    },
    bottomColor: {
      control: {
        type: 'select',
      },
      options: colorOptions,
    },
  },
  args: {
    leftWidth: 'md',
    rightWidth: 'none',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'frame.primary',
    rightColor: 'frame.primary',
    topColor: 'frame.primary',
    bottomColor: 'frame.primary',
  },
  render: (args) => (
    <Frame {...args}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 10,
      }}>
        Frame Content Area
        <br />
        <span style={{ fontSize: '16px', opacity: 0.8 }}>
          This content is positioned in the center of the frame
        </span>
      </div>
    </Frame>
  ),
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
    leftColor: 'frame.primary',
    rightColor: 'frame.primary',
    topColor: 'frame.primary',
    bottomColor: 'frame.primary',
  },
};

export const FullFrame: Story = {
  args: {
    leftWidth: 'lg',
    rightWidth: 'md',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'frame.primary',
    rightColor: 'frame.secondary',
    topColor: 'frame.accent',
    bottomColor: 'frame.primary',
  },
};

export const SidebarOnly: Story = {
  args: {
    leftWidth: 'md',
    rightWidth: 'none',
    topWidth: 'none',
    bottomWidth: 'none',
    leftColor: 'frame.sidebar',
    rightColor: 'frame.sidebar',
    topColor: 'frame.sidebar',
    bottomColor: 'frame.sidebar',
  },
};

export const NoFrame: Story = {
  args: {
    leftWidth: 'none',
    rightWidth: 'none',
    topWidth: 'none',
    bottomWidth: 'none',
    leftColor: 'frame.primary',
    rightColor: 'frame.primary',
    topColor: 'frame.primary',
    bottomColor: 'frame.primary',
  },
};

// Showcase semantic colors for different frame purposes
export const SemanticColors: Story = {
  args: {
    leftWidth: 'lg',
    rightWidth: 'md',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'frame.primary',
    rightColor: 'frame.secondary',
    topColor: 'frame.accent',
    bottomColor: 'frame.divider',
  },
};

export const InteractiveFrame: Story = {
  args: {
    leftWidth: 'lg',
    rightWidth: 'md',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'action.primary',
    rightColor: 'action.secondary',
    topColor: 'navigation.item',
    bottomColor: 'navigation.itemActive',
  },
};

export const SystemStates: Story = {
  args: {
    leftWidth: 'md',
    rightWidth: 'md',
    topWidth: 'sm',
    bottomWidth: 'sm',
    leftColor: 'status.success',
    rightColor: 'status.error',
    topColor: 'status.warning',
    bottomColor: 'status.info',
  },
};