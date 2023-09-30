import { useDisclosure, useHeadroom, useScrollIntoView, useWindowScroll } from '@mantine/hooks';
import { Anchor, AppShell, Box, Burger, Button, Center, Container, Divider, Group, Stack } from '@mantine/core';
import { ReactNode, use, useEffect, useState } from 'react';
import Head from 'next/head';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import { IconParysLogo } from '@/IconsParys/IconParysLogo';
import { IconParysLogoMini } from '@/IconsParys/IconParysLogoMini';

interface Element {
  name?: string;
  content: ReactNode;
}

interface ElementScrollInToView extends Element {
  scrollIntoView: {
    scroll: () => void;
    targetRef: React.MutableRefObject<HTMLDivElement>;
  }

}



export const Shell = ({ elements }: { elements?: Element[] }) => {
  const [opened, { toggle }] = useDisclosure();

  const headerVisible = useIsScrollUp()

  const elementsWithScrollIntoView =
    elements?.map((element) => {
      const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
      return {
        ...element,
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
          <Center><Box style={{ width: '4rem' }}><IconParysLogoMini /></Box></Center>
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