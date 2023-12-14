import type { Meta, StoryObj } from '@storybook/react';
import { Promocja } from '@/src/components/1/Promocja';
// import { Header } from './Header';

const meta = {
  title: '1/Promocja',
  component: Promocja,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Promocja>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
  }
};
