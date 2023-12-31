import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { generateTheme } from '../theme';


export const withMantine = (Story: any) => {

    const theme = generateTheme();

    return (<MantineProvider theme={theme}>
        <Story />
    </MantineProvider>)
};
