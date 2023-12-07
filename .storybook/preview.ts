import type { Preview } from '@storybook/react';
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
function useEffect(arg0: () => () => any, arg1: any[]) {
  throw new Error('Function not implemented.');
}

