
import { createTheme, rem, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const generateTheme = () => {


  const isLargeScreen = useMediaQuery(`(min-width: 1000px)`);
  const isMiddleScreen = useMediaQuery(`(min-width: 800px)`);

  const size = isLargeScreen ? 'lg' : isMiddleScreen ? 'md' : 'sm';
  const scale = {
    sm: 0.6,
    md: 0.8,
    lg: 1
  }
  const scaleValue = scale[size];

  return createTheme({
    headings: {
      // properties for all headings
      // fontWeight: '400',
      // fontFamily: 'Roboto',

      // properties for individual headings, all of them are optional
      sizes: {
        h1: { fontSize: rem(70 * scaleValue), fontWeight: '1000', lineHeight: '1.5' },
        h2: { fontSize: rem(50 * scaleValue), lineHeight: '1.5' },
        h3: { fontSize: rem(30 * scaleValue) },
        h4: { fontSize: rem(20 * scaleValue) },
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
      ],
    },
    primaryColor: 'red',
    fontSizes: {
      xl: rem(30 * scaleValue),
      lg: rem(25 * scaleValue),
      md: rem(20 * scaleValue)
    }
  })
};

