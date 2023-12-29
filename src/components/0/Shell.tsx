import { useDisclosure, useMediaQuery, useScrollIntoView, useWindowScroll } from "@mantine/hooks"
import { SekcjaUslugi } from "../1/Uslugi/SekcjaUslugi";
import { sekcjaUslugi } from "@/src/Data/1/Section";
import React, { Component, useEffect, useRef, useState } from "react";
import { Box, Burger, Button, Container, Divider, Flex, Group, Stack, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Kontakt } from "../1/Kontakt";
import { SekcjaAktualnosci } from "../1/SekcjaAktualnosci";
import { SekcjaZajeciaGrupowe } from "../1/SekcjaZajeciaGrupowe";
import { SekcjaZajeciaIndywidualne } from "../1/SekcjaZajeciaIndywidualne";
import { Tytul } from "../1/Tytul";
import { SiteI } from "@/src/interface/0top/Site";
import { ColorSchemeToggle } from "../2/ColorSchemeToggle";
import { IconParysLogo } from "../2/IconsParys/IconParysLogo";
import { Promocja } from "../1/Promocja";

type ElementsForNavigation = { name: string, scroll: () => void }[]


export const Shell = ({ data }: { data: SiteI }) => {

    const isMobile = useMediaQuery('(max-width: 1000px)', true);
    const site = {
        header: { content: <Tytul data={data.header.content} />, name: data.header.nazwa },
        uslugi: { content: <SekcjaUslugi data={data.uslugi.content} />, name: data.uslugi.nazwa },
        zajeciaIndywidualne: { content: <SekcjaZajeciaIndywidualne data={data.zajeciaIndywidualne.content} />, name: data.zajeciaIndywidualne.nazwa },
        zajeciaGrupowe: { content: <SekcjaZajeciaGrupowe data={data.zajeciaGrupowe.content} />, name: data.zajeciaGrupowe.nazwa },
        aktualnosci: { content: <SekcjaAktualnosci data={data.aktualnosci.content} />, name: data.aktualnosci.nazwa },
        kontakt: { content: <Kontakt data={data.kontakt.content} />, name: data.kontakt.nazwa },
    }


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

    const elementsForNavigation: ElementsForNavigation = elementsWithScrollIntoView
        .map((element) => ({
            name: element.name,
            scroll: element.scrollIntoView.scroll
        }))
        .filter((element) => element.name)


    const elementsForMain = elementsWithScrollIntoView.map((element) => ({
        content: element.content,
        targetRef: element.scrollIntoView.targetRef
    }))

    const compponentsForMain = elementsForMain.map((element) =>
        <div ref={element.targetRef}>{element.content}</div>)


    compponentsForMain.push(<Promocja />)

    return (
        <div>
            {isMobile ?
                <MobileShell data={elementsForNavigation}> {compponentsForMain} </MobileShell>
                :
                <DesktopShell data={elementsForNavigation} >{compponentsForMain} </DesktopShell >
            }
        </div>
    )
}

const MobileShell = ({ data, children }: { data: ElementsForNavigation, children: React.ReactNode }) => {
    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();

    const backgroundColor = colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];

    const barStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: backgroundColor,
        paddingTop: '0.5em',
        paddingInline: '1em'
    }

    return (
        <div>
            <SlidingBar>
                <div style={barStyle}>
                    <Box style={{ width: '4rem' }}><IconParysLogo mini /></Box>

                    <SiteBar
                        content={(close) =>
                            <Container style={{ backgroundColor: backgroundColor, }}>

                                <Divider m={'md'} />

                                <Stack>
                                    {data.map((element) => (
                                        <Button fullWidth
                                            key={element.name}
                                            onClick={() => { element.scroll(); close() }}
                                            aria-label={`Scroll to ${element.name}`}
                                        >
                                            {element.name}
                                        </Button>
                                    ))}
                                    <Divider m={'md'} />

                                    <Group>
                                        <Button variant="default">Log in</Button>
                                        <ColorSchemeToggle />
                                    </Group>
                                </Stack>

                            </Container>
                        }
                    />
                </div>
            </SlidingBar>
            {children}
        </div>
    )
}

const SiteBar = ({ content }: { content: (close: () => void) => React.ReactNode }) => {


    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const backgroundColor = colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];

    const [isOpen, { toggle }] = useDisclosure();
    useEffect(() => {
        const overflow = isOpen ? 'hidden' : 'unset';
        document.body.style.overflow = overflow;
    }, [isOpen])

    const siteBarStyle: React.CSSProperties = {
        // top: 0,
        left: 0,
        position: 'fixed',
        width: isOpen ? '100%' : '0', // Ustaw szerokość na 100% gdy otwarty, 0 gdy zamknięty
        overflow: 'hidden', // Ukryj zawartość poza szerokością panelu
        transition: 'width 0.3s ease-in-out', // Animacja przejścia
        height: '100vh',
        background: backgroundColor
    }

    const cont = content(toggle);

    return (
        <div style={{ display: 'flex', flexFlow: 'column' }}>
            <Burger onClick={toggle} opened={isOpen} ></Burger>
            <div>
                <div style={siteBarStyle}>
                    {content(toggle)}
                </div>
            </div>
        </div>



    )

}

const DesktopShell = ({ data, children }: { data: ElementsForNavigation, children: React.ReactNode }) => {


    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();

    const backgroundColor = colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];

    const barStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: backgroundColor,
        paddingTop: '3px'
    }

    return (
        <>
            <SlidingBar>
                <div style={barStyle}>
                    <div>
                        <Box style={{ width: '4rem' }}><IconParysLogo mini /></Box>
                    </div>
                    <Group>
                        {data.map((element) => (
                            <Button
                                variant="subtle"
                                key={element.name}
                                onClick={() => { element.scroll() }}
                                aria-label={`Scroll to ${element.name}`}
                            >
                                {element.name}
                            </Button>
                        ))}
                    </Group>

                    <Group>
                        <Button variant="default">Log in</Button>
                        <ColorSchemeToggle />
                    </Group>
                </div>
            </SlidingBar>
            {children}
        </>

    )
}

const SlidingBar = ({ children }: { children: React.ReactNode }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        ref.current && setHeight(ref.current.clientHeight);
        setWysuniecie(height)
    }, [height]);

    const [{ y: scroll }] = useWindowScroll()
    const [previousScroll, setPreviousScroll] = useState(0);
    const [wysuniecieNavBar, setWysuniecie] = useState(height);

    useEffect(() => {
        const przesuniecieEkranu = previousScroll - scroll;
        const noweWysuniecieNavBar = wysuniecieNavBar + przesuniecieEkranu
        const ograniczoneWysuniecieNavBar =
            noweWysuniecieNavBar > height ?
                height : noweWysuniecieNavBar < 0 ?
                    0 : noweWysuniecieNavBar;

        setPreviousScroll(scroll)
        setWysuniecie(ograniczoneWysuniecieNavBar)
    }, [scroll])

    // Improved styling for the navigation bar and buttons
    const mainBarStyle: React.CSSProperties = {
        width: '100%',
        position: 'fixed',
        transform: `translate(0px, ${wysuniecieNavBar - height}px)`,
        zIndex: 100,
    };

    return (
        <div ref={ref} style={mainBarStyle}>
            {children}
        </div>
    )
}

// niedziała zbyt dobrze
const NavBar2 = ({ children }: { children: React.ReactNode }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [heightNavBar, setHeight] = useState(0);

    useEffect(() => {
        ref.current && setHeight(ref.current.clientHeight);
    }, [heightNavBar]);

    const [{ y: scroll }] = useWindowScroll()
    const [polozenieNavBar, setPolozenieNavBar] = useState(0);

    useEffect(() => {
        const nowePolozenieNavBar =
            scroll < polozenieNavBar ?
                scroll : scroll > polozenieNavBar + heightNavBar ?
                    scroll - heightNavBar : polozenieNavBar

        setPolozenieNavBar(nowePolozenieNavBar);
    }, [scroll])

    // Improved styling for the navigation bar and buttons
    const mainBarStyle: React.CSSProperties = {
        width: '100%',
        position: 'relative',
        transform: `translate(0px, ${polozenieNavBar}px)`,
        zIndex: 110,
    };

    return (
        <div ref={ref} style={mainBarStyle}>
            {children}
        </div>
    )
}