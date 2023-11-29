import type { Meta, StoryObj } from '@storybook/react';
import { Strefa, Wersja } from '@/src/components/1/Uslugi/SekcjaUslugi';
import { strefy, uslugi } from '@/src/Data/1/Uslugi';

// import { Header } from './Header';

const meta = {
  title: '1/Uslugi/Wersja',
  component: Wersja,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Wersja>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: uslugi.silownia.basic
  }
};
