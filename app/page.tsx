'use client';
import { Shell } from '@/src/components/0/Shell';
import { site } from '@/src/Data/0top/Site';
import { generateTheme } from '@/src/theme';
import { MantineProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
import { useEffect } from 'react';


export default function HomePage() {

  const isLargeScreen = useMediaQuery(`(min-width: 1000px)`);
  const isMiddleScreen = useMediaQuery(`(min-width: 800px)`);

  const size = isLargeScreen ? 'lg' : isMiddleScreen ? 'md' : 'sm';
  const scale = {
    sm: 0.6,
    md: 0.8,
    lg: 1
  }
  const scaleValue = scale[size];
  return (
    <MantineProvider theme={generateTheme()}>
      {/* <Site siteData={site} /> */}
      <Shell data={site} />
    </MantineProvider>
  )
}
