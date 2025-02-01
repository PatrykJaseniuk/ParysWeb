

import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import { url } from 'inspector';
import { generateTheme } from '@/src/theme';

import { Metadata } from 'next';

import { BreadcrumbList, ListItem, WithContext } from 'schema-dts';
import { GoogleAnalytics } from '@/src/components/0/GoogleAnalitics';



export const metadata: Metadata = {
  title: 'Sport Studio Parys',
  description: 'Nie pozwól aby przypadek uformował Twoje ciało!',
};

export default function RootLayout({ children }: { children: any }) {



  return (
    <html lang="pl">
      <head>
        {/* <ColorSchemeScript /> */}
        {/* <meta charSet="utf-8" /> */}
        {/* <title>{metadata.title}</title> */}
        {/* <script type="application/ld+json">
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://parys.nysa.pl/",
          "logo": "https://parys.nysa.pl/Parys_logo_wektor.svg"
        </script> */}


        <link rel="icon" type="image/svg+xml" href="IconParysLogoMini.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/* <meta name="description" content={metadata.description} /> */}


      </head>
      {/* <GoogleAnalytics /> */}

      <body>
        {children}
      </body>
    </html>
  );
}
