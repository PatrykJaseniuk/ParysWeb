import type { Meta, StoryObj } from '@storybook/react';
import { Strefa } from '@/src/components/1/Uslugi/Strefa';
import { strefy } from '@/src/Data/1/Uslugi';

// import { Header } from './Header';

const meta = {
  title: '1/Uslugi/Strefa',
  component: Strefa,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Strefa>;

export default meta;
type Story = StoryObj<typeof meta>;

export const cardio: Story = {
  args: {
    data: strefy.cardio,
    isActive: true,
    kolor: 'red'
  }
};
