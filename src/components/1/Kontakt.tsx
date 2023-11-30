
import { IconGithub } from "@/src/Data/2/Icons/IconGithub";
import { KontaktI, OpcjaKontaktowaI } from "@/src/interface/1/Kontakt";
import { ActionIcon, Button, Container, Group, SimpleGrid, TextInput, Textarea, Title, Text, Box, rem, Stack, useMantineTheme, Divider, Space } from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconSun, IconAt, IconMapPin, IconPhone } from "@tabler/icons-react";

export const Kontakt = ({ data }: { data: KontaktI }) => {
    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} variant="transparent">
            <Icon size="1.4rem" stroke={1.5} />
        </ActionIcon>
    ));
    const theme = useMantineTheme()

    return (
        <Box bg={"blue"} >
            <Container size={'xl'} p={0} >
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                    <Container>
                        <Title order={1}>{data.tytul}</Title>
                        <OpcjeKontaktowe data={data.opcjeKontaktowe} />
                        <Group mt="xl">{icons}</Group>
                    </Container>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.8985260142413!2d17.32172837733394!3d50.4802327852178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711c4125f989f0b%3A0xb3c7ba6aef95e9fb!2sSI%C5%81OWNIA%20Parys%20Nysa!5e0!3m2!1spl!2spl!4v1689690588688!5m2!1spl!2spl" style={{ width: '100%', height: '40rem' }} loading="lazy" >
                    </iframe>
                </SimpleGrid>
                <Divider c={'red'} size={'md'} mt={'md'} />
                <Group __size={'sm'} align="end" justify="end" p="md">
                    <Text >Written by Patryk</Text>
                    <IconGithub /></Group>

            </Container>

        </Box >
    )
}


const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function OpcjeKontaktowe({ data }: { data: OpcjaKontaktowaI[] }) {
    const items = data.map((item, index) => <OpcjaKontaktowa key={index} data={item} />);
    return <Stack>{items}</Stack>;
}

function OpcjaKontaktowa({ data }: { data: OpcjaKontaktowaI }) {
    return (
        <div   >
            <Box mr="md">
                <data.icon style={{ width: rem(24), height: rem(24) }} />
            </Box>

            <div>
                <Text size="xs" >
                    {data.nazwa}
                </Text>
                {data.opis.map((opis, index) => <Text key={index} >{opis}</Text>)}
            </div>
        </div>
    );
}
