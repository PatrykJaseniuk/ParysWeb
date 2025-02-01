import type { Meta, StoryObj } from '@storybook/react';
import { Kontakt } from '../../components/1/Kontakt';
import { kontakt } from '../../Data/1/Kontakt';
import { Shell } from '@/src/components/0/Shell';
import { site } from '@/src/Data/0top/Site';
// import { Header } from './Header';

const meta = {
    title: '0/Shell',
    component: Shell,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    // tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Shell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {
        data: site
    }
};
