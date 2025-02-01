import type { Preview } from '@storybook/react';
// import { withMantine } from './decotator';
import { withMantine } from '../src/stories/decorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [withMantine];

export default preview;


