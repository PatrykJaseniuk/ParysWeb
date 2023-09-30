'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  headings: {
    // properties for all headings
    // fontWeight: '400',
    // fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: rem(100), fontWeight: '1000', lineHeight: '1.5' },
      h2: { fontSize: rem(70), lineHeight: '1.5' },
      h3: { fontSize: rem(50) },
      h4: { fontSize: rem(30) },
      // // ...up to h6
      // h6: { fontWeight: '900' },
    },
  },
  colors: {
    red: [
      "#ffeaea",
      "#fed4d5",
      "#f5a6a9",
      "#ee7679",
      "#e84d52",
      "#e43338",
      "#e31e24",
      "#cb171d",
      "#b50e19",
      "#9f0012"
    ]
  }
});
