import { CenaDane, SectionDaneAnd, UslugaDane, UslugiDane } from "@/Data/Interface"
import { IconParysLogo } from "@/IconsParys/IconParysLogo"
import { IconParysLogoMini } from "@/IconsParys/IconParysLogoMini"
import { BackgroundImage, Box, Button, Card, Center, Container, Divider, Flex, Modal, SimpleGrid, Space, Stack, Text, Title, Image, Group, Badge, rem, List, ListItem, Transition } from "@mantine/core"
import { Sekcja } from "./Sekcja"
import { useDisclosure, useIntersection } from "@mantine/hooks"
import { Carousel, CarouselSlide, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useRef, useState } from "react"
import { IconVerifed } from "@/Icons/IconVerified"
import { IconTime } from "@/Icons/IconTime"
import { IconCalendar, IconInfinity } from "@tabler/icons-react"
import { Cennik } from "../Cennik"

export const SekcjaUslugi = ({ data }: { data: SectionDaneAnd<UslugiDane> }) => {
    return (
        <Sekcja data={data.sekcja}>
            {data.zawartosc.uslugi.map((usluga, index) =>
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
