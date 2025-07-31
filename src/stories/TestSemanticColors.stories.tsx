import type { Meta, StoryObj } from '@storybook/react';
import { TestSemanticColors } from '../components/TestSemanticColors/TestSemanticColors';

const meta = {
  title: 'Theme/TestSemanticColors',
  component: TestSemanticColors,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestSemanticColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};