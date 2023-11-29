import type { Meta, StoryObj } from '@storybook/react';
import { Kontakt } from '../../../components/1/Kontakt';
import { kontakt } from '../../../Data/1/Kontakt';
import { SekcjaUslugi } from '@/src/components/1/Uslugi/SekcjaUslugi';
import { sekcjaUslugi } from '@/src/Data/1/Section';
// import { Header } from './Header';

const meta = {
  title: '1/Uslugi/SekcjaUslugi',
  component: SekcjaUslugi,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SekcjaUslugi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: sekcjaUslugi
  }
};
