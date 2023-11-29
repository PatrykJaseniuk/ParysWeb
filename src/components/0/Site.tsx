import { useDisclosure, useScrollIntoView, useWindowScroll } from '@mantine/hooks';
import { AppShell, Box, Burger, Button, Center, Container, Divider, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ColorSchemeToggle } from '../2/ColorSchemeToggle';
import { IconParysLogo } from '@/src/components/2/IconsParys/IconParysLogo';
import { SiteI } from '@/src/interface/0top/Site';
import { Tytul } from '../1/Tytul';
import { SekcjaUslugi } from '../1/Uslugi/SekcjaUslugi';
import { SekcjaZajeciaIndywidualne } from '../1/SekcjaZajeciaIndywidualne';
import { SekcjaZajeciaGrupowe } from '../1/SekcjaZajeciaGrupowe';
import { Kontakt } from '../1/Kontakt';

export const Site = ({ siteData }: { siteData: SiteI }) => {

  const site = {
    header: { content: <Tytul data={siteData.header.content} />, name: siteData.header.nazwa },
    uslugi: { content: <SekcjaUslugi data={siteData.uslugi.content} />, name: siteData.uslugi.nazwa },
    zajeciaIndywidualne: { content: <SekcjaZajeciaIndywidualne data={siteData.zajeciaIndywidualne.content} />, name: siteData.zajeciaIndywidualne.nazwa },
    zajeciaGrupowe: { content: <SekcjaZajeciaGrupowe data={siteData.zajeciaGrupowe.content} />, name: siteData.zajeciaGrupowe.nazwa },
    kontakt: { content: <Kontakt data={siteData.kontakt.content} />, name: siteData.kontakt.nazwa },
  }

  const [opened, { toggle }] = useDisclosure();

  const headerVisible = useIsScrollUp()

  const elementsWithScrollIntoView =
    Object.keys(site).map((key) => {
      const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
      return {
        ...site[key as keyof typeof site],
        scrollIntoView: {
          scroll: scrollIntoView,
          targetRef: targetRef,
        }
      }
    })

  const LogInAndColor =
    <Group>
      <Button variant="default">Log in</Button>
      <ColorSchemeToggle />
    </Group>

  return (
    <AppShell
      header={{ height: 60, collapsed: headerVisible && !opened, }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { desktop: true, mobile: !opened } }}
    >
      <AppShell.Header>
        <Group justify='space-between' p='lg' >
          <Burger opened={opened} onClick={toggle} hiddenFrom='md' size="sm" />
          <Center><Box style={{ width: '4rem' }}><IconParysLogo mini /></Box></Center>
          <Group visibleFrom='md'>
            {elementsWithScrollIntoView?.map((element, index) =>
              element.name &&
              <Button
                key={index}
                variant="subtle"
                onClick={() => element.scrollIntoView.scroll()}
              >
                {element.name}
              </Button>
            )}
          </Group>
          <Box visibleFrom='md'>
            {LogInAndColor}
          </Box>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar >
        {elementsWithScrollIntoView?.map((element, index) =>
          element.name &&
          <Button
            key={index}
            variant="subtle"
            style={{}}
            justify='start'
            onClick={() => { element.scrollIntoView.scroll(); toggle() }}
          >
            {element.name}
          </Button>)
        }
        <Divider my={'sm'} />

        <Container>
          {LogInAndColor}
        </Container>
      </AppShell.Navbar>

      <AppShell.Main>
        {elementsWithScrollIntoView?.map((element, index) =>
          <Box
            key={index}

            ref={element.scrollIntoView.targetRef}
          >
            {element.content}
          </Box>)
        }
      </AppShell.Main>
      {/* <AppShell.Footer>Stopka</AppShell.Footer> */}
    </AppShell >
  );
}

// does not work on mobile
const useIsScrollUp = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [previousPosition, setPreviousPosition] = useState(0);
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    setPreviousPosition(scroll.y);
    setIsUp(previousPosition < scroll.y)
  }, [scroll.y]);

  return isUp;
}