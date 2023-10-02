import { CenaDane } from "@/Data/Interface";
import { IconTime } from "@/Icons/IconTime";
import { IconVerifed } from "@/Icons/IconVerified";
import { Embla, useAnimationOffsetEffect, Carousel } from "@mantine/carousel";
import { Modal, Card, Title, Divider, List, ListItem, Button, Image, Text, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfinity, IconCalendar } from "@tabler/icons-react";
import { useState } from "react";

export const Cennik = ({ data }: { data: CenaDane[] }) => {


    const colorSheme = useMantineColorScheme()
    const theme = useMantineTheme()
    const color = colorSheme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9]

    const [opened, { open, close }] = useDisclosure(false);

    // problem with carusel in modal
    const TRANSITION_DURATION = 200;
    const [embla, setEmbla] = useState<Embla | null>(null);
    useAnimationOffsetEffect(embla, TRANSITION_DURATION);
    return (
        <>
            <Modal opened={opened} onClose={close} title="cennik" centered >
                <Carousel
                    getEmblaApi={setEmbla}
                    slideGap="md"
                >
                    {data.map((cena, index) =>
                        <Carousel.Slide key={index}>
                            <Card shadow="sm" mx={'xl'} padding="xl" radius="md" withBorder>
                                {
                                    cena.imgSrc &&
                                    <Card.Section m='md'>
                                        <Image
                                            src={cena.imgSrc}
                                            h={150}
                                            // w="auto"
                                            fit="contain"
                                            radius="xl"
                                            mb="md"
                                        />
                                    </Card.Section>
                                }
                                <Title order={4}>
                                    <Text ta={'center'} inherit size="xl" variant="gradient" gradient={{ from: color, to: 'red' }} >
                                        {cena.nazwa}
                                    </Text>
                                </Title>



                                <Divider my={"xs"} />
                                <Title order={3}>
                                    <Text ta={'center'} inherit size="xl" variant="gradient" gradient={{ from: 'red', to: color }} >
                                        {(cena.cena)}
                                    </Text>
                                </Title>

                                <List
                                    spacing={'md'}
                                >
                                    {cena.wlasciwosci.map((wlasciwosc, index) => {
                                        return (
                                            <ListItem key={index}
                                                icon={<div> <wlasciwosc.icon /> </div>}>
                                                {/* zmniejsz odlogłość miedzy liniami */}
                                                <Text lh={'sm'} key={index}>
                                                    {wlasciwosc.text}
                                                </Text>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Card>
                        </Carousel.Slide>
                    )}
                </Carousel>
            </Modal >
            <Button variant="light" onClick={open}>CENNIK</Button>
        </>
    )
}