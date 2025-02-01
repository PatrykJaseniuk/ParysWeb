import { sekcjaUslugi } from '@/src/Data/1/Section';
import { Sekcja } from '@/src/components/1/Sekcja';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: '1/Sekcja',
  component: Sekcja,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sekcja>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    data: { title: 'Sekcja', background: '' },
    children: <div> dziecko</div>
  }
};
