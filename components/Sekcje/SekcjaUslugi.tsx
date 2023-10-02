import { CenaDane, SectionDaneAnd, UslugaDane, UslugiDane } from "@/Data/Interface"
import { IconParysLogo } from "@/IconsParys/IconParysLogo"
import { IconParysLogoMini } from "@/IconsParys/IconParysLogoMini"
import { BackgroundImage, Box, Button, Card, Center, Container, Divider, Flex, Modal, SimpleGrid, Space, Stack, Text, Title, Image, Group, Badge, rem, List, ListItem, Transition, ThemeIcon } from "@mantine/core"
import { Sekcja } from "./Sekcja"
import { useDisclosure, useIntersection } from "@mantine/hooks"
import { Carousel, CarouselSlide, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useRef, useState } from "react"
import { IconVerifed } from "@/Icons/IconVerified"
import { IconTime } from "@/Icons/IconTime"
import { IconBarbell, IconCalendar, IconHeartPlus, IconHeartbeat, IconInfinity, IconMassage, IconRings, IconStretching, IconStretching2, IconTreadmill, IconWaveSquare, IconWeight } from "@tabler/icons-react"
import { Cennik } from "../Cennik"

export const SekcjaUslugi = ({ data }: { data: SectionDaneAnd<UslugiDane> }) => {
    return (
        <Sekcja data={data.sekcja}>
            <UslugaSilownia data={data.zawartosc.uslugi[0]} />
            <UslugaOpen data={data.zawartosc.uslugi[1]} />
            {data.zawartosc.uslugi.slice(2).map((usluga, index) =>
                <Usluga key={index} data={usluga} />
            )}
        </Sekcja>
    )
}

const Usluga = ({ data }: { data: UslugaDane }) => {
    return (
        <Container size={"xl"}>
            <SimpleGrid mt={'xl'} cols={{ sm: 1, md: 2 }}>
                <Stack>
                    <Title order={3}>
                        <Text inherit >
                            {data.title}
                        </Text>

                    </Title>
                    <Text>
                        {data.description}
                    </Text>
                    {data.cennik.length > 0 && <Cennik data={data.cennik} />}
                </Stack>
                <Video src={data.videoSrc} />
            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>
    )
}

const UslugaSilownia = ({ data }: { data: UslugaDane }) => {

    return (
        <Container size={"xl"}>
            <SimpleGrid mt={'xl'} cols={{ sm: 1, md: 2 }}>
                <Stack>
                    <Title order={3}>
                        <Text inherit >
                            {data.title}
                        </Text>
                    </Title>
                    <Text>
                        W ramach tej usługi możesz korzystać ze stref:
                    </Text>
                    <List>
                        <List.Item icon={<IconBarbell />}>
                            Wolnych ciężarów
                        </List.Item>
                        <List.Item icon={<IconWeight />}>
                            Maszyn ze stosem
                        </List.Item>

                        <List.Item icon={<IconTreadmill />}>
                            Cardio
                        </List.Item>

                        <List.Item icon={<IconStretching />}>
                            Treningów funkcjonalnych
                        </List.Item>
                    </List>
                    {data.cennik.length > 0 && <Cennik data={data.cennik} />}
                </Stack>
                <Video src={data.videoSrc} />
            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>

    )
}

const UslugaOpen = ({ data }: { data: UslugaDane }) => {

    return (
        <Container size={"xl"}>
            <SimpleGrid mt={'xl'} cols={{ sm: 1, md: 2 }}>
                <Stack>
                    <Title order={3}>
                        <Text inherit >
                            {data.title}
                        </Text>
                    </Title>
                    <Text>
                        W ramach tej usługi możesz korzystać z:
                    </Text>
                    <List spacing={'xl'}>

                        <List.Item icon={<ThemeIcon variant="light" size={100} radius={50}>
                            <SimpleGrid cols={2}><IconWeight /><IconBarbell /><IconTreadmill /><IconStretching /></SimpleGrid>
                        </ThemeIcon>}>
                            <Text size="xl">Siłowni</Text>
                        </List.Item>
                        <List.Item icon={
                            <ThemeIcon variant="light" size={100} radius={50}><IconRings width={'80%'} height={'auto'} /></ThemeIcon>
                        }>
                            Sali Cross
                        </List.Item>

                        <List.Item icon={<><ThemeIcon variant="light" size={100} radius={50}><IconMassage /><IconWaveSquare /></ThemeIcon></>}>
                            Rollmasażu i platformy wibrującej
                        </List.Item>
                    </List>
                    {data.cennik.length > 0 && <Cennik data={data.cennik} />}
                </Stack>
                <Video src={data.videoSrc} />
            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>
    )
}



const Video = ({ src }: { src: string }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        root: containerRef.current,
        threshold: 1,
    });

    return (
        <Box
            ref={ref}>
            <Transition
                keepMounted
                mounted={entry?.isIntersecting ? true : false}
                transition="scale-x"
                duration={800}
                timingFunction="ease"
            >
                {(styles) => {
                    styles.visibility = styles.display == 'none' ? 'hidden' : 'visible'
                    styles.display = ''
                    return <div style={{ ...styles }}>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{ width: '100%', objectFit: 'cover', borderRadius: '10%' }}
                            src={src}
                        />
                    </div>
                }
                }
            </Transition>
        </Box>


    )
}
