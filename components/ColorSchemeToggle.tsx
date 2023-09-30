'use client';

import { ActionIcon, Button, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  })

  const colorScheame = useMantineColorScheme();
  return (
    <Button
      onClick={toggleColorScheme}
      variant="default"
      // size="xl"
      aria-label="Toggle color scheme"
    >

      {isClient &&// solving hydration error 
        colorScheame.colorScheme === 'light' ?
        <IconSun />
        :
        <IconMoon />
      }
    </Button>
    // <></>
  );
}
