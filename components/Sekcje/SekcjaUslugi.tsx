import { CenaDane, SectionDaneAnd, UslugaDane, UslugiDane } from "@/Data/Interface"
import { IconParysLogo } from "@/IconsParys/IconParysLogo"
import { IconParysLogoMini } from "@/IconsParys/IconParysLogoMini"
import { BackgroundImage, Box, Button, Card, Center, Container, Divider, Flex, Modal, SimpleGrid, Space, Stack, Text, Title, Image, Group, Badge, rem, List, ListItem, Transition, ThemeIcon } from "@mantine/core"
import { Sekcja } from "./Sekcja"
import { useDisclosure, useIntersection } from "@mantine/hooks"
import { Carousel, CarouselSlide, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useEffect, useRef, useState } from "react"
import { IconVerifed } from "@/Icons/IconVerified"
import { IconTime } from "@/Icons/IconTime"
import { IconBarbell, IconCalendar, IconHeartPlus, IconHeartbeat, IconInfinity, IconMassage, IconRings, IconStretching, IconStretching2, IconTreadmill, IconUsers, IconUsersGroup, IconWaveSquare, IconWeight } from "@tabler/icons-react"
import { Cennik } from "../Cennik"
import { IconGymStation } from "@/IconsParys/IconGymStation"

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
                    <Title order={2}>
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
    const Icons = [
        { icon: IconBarbell, text: 'WOLNE CIĘŻARY' },
        { icon: IconGymStation, text: 'MASZYNY ZE STOSEM' },
        { icon: IconTreadmill, text: 'CARDIO' },
        { icon: IconStretching, text: 'STREFA FUNKCJONALNA' },
    ]

    return (
        <Container size={"xl"}>
            <SimpleGrid mt={'xl'} cols={{ sm: 1, md: 2 }}>
                <Stack>
                    <Title order={2}>
                        <Text inherit >
                            {data.title}
                        </Text>
                    </Title>
                    <Text>
                    </Text>
                    <List spacing={'md'}>
                        {Icons.map((item, index) => (
                            <List.Item
                                key={index}
                                icon={<ThemeIcon
                                    variant="default"
                                    size={80}
                                    radius={50}>
                                    {<item.icon style={{ width: '70%', height: 'auto' }}
                                    />}
                                </ThemeIcon>}>

                                <Text size="lg"> {item.text}</Text>
                            </List.Item>
                        ))}
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
                    <Title order={2}>
                        <Text inherit >
                            {data.title}
                        </Text>
                    </Title>
                    <Text>

                    </Text>

                    <List spacing={'md'}>
                        <List.Item
                            icon={<ThemeIcon variant="default" size={80} radius={50}>
                                <Flex style={{ width: '80%' }} wrap={'wrap'}>
                                    <IconBarbell style={{ height: 'auto', width: '45%' }} />
                                    <IconGymStation style={{ height: 'auto', width: '45%' }} />
                                    <IconTreadmill style={{ height: 'auto', width: '45%' }} />
                                    <IconStretching style={{ height: 'auto', width: '45%' }} />
                                </Flex>
                            </ThemeIcon>}
                        >
                            <Text size="lg">SIŁOWNIA</Text>
                        </List.Item>
                        <List.Item icon={
                            <ThemeIcon variant="default" size={80} radius={50}><IconRings width={'80%'} height={'auto'} /></ThemeIcon>
                        }>
                            <Text size="lg">SALA CROSS</Text>
                        </List.Item>
                        <List.Item
                            icon={<ThemeIcon
                                variant="default" size={80} radius={50}>
                                <IconUsersGroup style={{ width: '45%', height: 'auto' }} />
                            </ThemeIcon>}
                        >
                            <Text size="1.5rem">ZAJĘCIA GRUPOWE CROSS</Text>
                        </List.Item>
                        <List.Item
                            icon={<ThemeIcon
                                variant="default" size={80} radius={50}>
                                <IconMassage style={{ width: '45%', height: 'auto' }} />
                                <IconWaveSquare style={{ width: '45%', height: 'auto' }} />
                            </ThemeIcon>}
                        >
                            <Text size="1.5rem">ROLLMASAŻ I PLATFORMA WIBRUJĄCA</Text>
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

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        threshold: 0.5,
    });

    useEffect(() => {
        entry?.isIntersecting ? videoRef.current?.play() : videoRef.current?.pause();
    }, [entry?.isIntersecting]);


    return (
        <Box
            ref={ref}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                style={{ width: '100%', objectFit: 'cover', borderRadius: '10%' }}
                src={src}
            />
        </Box>


    )
}
