import type { Meta, StoryObj } from '@storybook/react-vite';
import { TestThemeColors } from '../test-theme-colors';

const meta = {
  title: 'Theme/TestThemeColors',
  component: TestThemeColors,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestThemeColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};