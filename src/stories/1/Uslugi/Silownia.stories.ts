import type { Meta, StoryObj } from '@storybook/react';
import { Silownia } from '@/src/components/1/Uslugi/Silownia';
import { strefy, uslugi } from '@/src/Data/1/Uslugi';

// import { Header } from './Header';

const meta = {
  title: '1/Uslugi/Siłownia',
  component: Silownia,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Silownia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    data: uslugi.silownia
  }
};
