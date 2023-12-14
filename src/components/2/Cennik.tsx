import { Embla, useAnimationOffsetEffect, Carousel } from "@mantine/carousel";
import { Modal, Card, Title, Divider, List, ListItem, Button, Image, Text, useMantineColorScheme, useMantineTheme, DefaultMantineColor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { CennikI } from "../../interface/2/Cennik";
import { IconCoin, IconCoinBitcoin, IconFreeRights, IconHandGrab, IconInfoCircle, IconRegistered, IconSignLeft } from "@tabler/icons-react";
import IconFreedom from "./IconsParys/IconFreedom";

export const Cennik = ({ data, kolor, nazwa = 'cennik' }: { data: CennikI, kolor?: DefaultMantineColor, nazwa?: string }) => {


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
            <Modal
                size={'100%'}
                opened={opened}
                onClose={close}
                title={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <Text size="lg" style={{ fontWeight: 'bold' }}>{nazwa}</Text>
                    </div>
                }
                centered
            >
                <Carousel
                    // style={{ width: '100%' }}
                    getEmblaApi={setEmbla}
                    slideGap="md"
                    slideSize={{ base: '100%', xs: '100%', sm: '50%', md: '33.333333%', lg: '25%', xl: '20%' }}
                    align={'start'}
                >
                    {data.ceny.map((cena, index) =>
                        <Carousel.Slide key={index} >
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
                                                <Text lh={'xs'} key={index}>
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
                <Divider my={"xs"} />
                <List
                    spacing={'md'}
                >
                    {data.wlasciwosciWspolne.map((wlasciwosc, index) => {
                        return (
                            <ListItem key={index}
                                icon={<div> <wlasciwosc.icon /> </div>}>
                                {/* zmniejsz odlogłość miedzy liniami */}
                                <Text lh={'xs'} key={index}>
                                    {wlasciwosc.text}
                                </Text>
                            </ListItem>
                        )
                    })}
                </List>
            </Modal >
            <Button color={kolor} variant="light" onClick={open}>CENNIK</Button>
        </>
    )
}