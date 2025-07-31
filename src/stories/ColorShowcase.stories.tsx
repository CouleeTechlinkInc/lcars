import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorShowcase } from '../components/ColorShowcase/ColorShowcase';

const meta = {
  title: 'Theme/ColorShowcase',
  component: ColorShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};