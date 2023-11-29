import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/src/theme';

export const withMantine = (Story: any) => (

    <MantineProvider theme={theme}>
        <Story />
    </MantineProvider>
);
