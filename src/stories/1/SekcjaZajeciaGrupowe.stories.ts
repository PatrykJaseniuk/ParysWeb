import type { Meta, StoryObj } from '@storybook/react';
import { Kontakt } from '../../components/1/Kontakt';
import { kontakt } from '../../Data/1/Kontakt';
import { zajeciaGrupowe } from '@/src/Data/1/ZajeciaGrupowe';
import { SekcjaZajeciaGrupowe } from '@/src/components/1/SekcjaZajeciaGrupowe';
import { sekcjaZajeciaGrupowe } from '@/src/Data/1/Section';
// import { Header } from './Header';

const meta = {
  title: '1/SekcjaZajeciaGrupowe',
  component: SekcjaZajeciaGrupowe,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SekcjaZajeciaGrupowe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    data: sekcjaZajeciaGrupowe
  }
};
