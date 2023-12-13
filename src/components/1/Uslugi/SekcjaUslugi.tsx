import { Box, Container, Divider, SimpleGrid, Stack, Text, Title, Card, SegmentedControl, Switch, Chip, Group } from "@mantine/core"
import { Sekcja } from "../Sekcja"
import { useIntersection } from "@mantine/hooks"
import '@mantine/carousel/styles.css';
import { useEffect, useRef, useState } from "react"
import { Cennik } from "../../2/Cennik"
import { SectionI } from "@/src/interface/1/Section";
import { SilowniaI, UslugaI, UslugiI, } from "@/src/interface/1/Uslugi";
import { Silownia } from "./Silownia";
import { Kalendaz } from "../Kalendarz";

export const SekcjaUslugi = ({ data }: { data: SectionI<UslugiI> }) => {
    return (
        <Sekcja data={data.section}>
            <Silownia data={data.content.silownia} />
            {data.content.uslugiStandardowe.map((usluga, index) =>
                <Usluga key={index} data={usluga} />
            )}
        </Sekcja>
    )
}

const Usluga = ({ data }: { data: UslugaI }) => {
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
                    {data.kalendarz && <Kalendaz data={data.kalendarz} />}
                </Stack>
                <Video src={data.videoSrc} />
            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>
    )
}

export const Video = ({ src }: { src: string }) => {

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
