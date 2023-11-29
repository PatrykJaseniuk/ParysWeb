import type { Meta, StoryObj } from '@storybook/react';
import { Kontakt } from '../../components/1/Kontakt';
import { kontakt } from '../../Data/1/Kontakt';
// import { Header } from './Header';

const meta = {
  title: '1/Kontakt',
  component: Kontakt,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Kontakt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    data: kontakt
  }
};
