import { Card, Image, Divider, List, ListItem, Modal, Title, Text, Button, Center } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconCalendar, IconInfinity, IconClock, IconInfoCircle, IconLock } from "@tabler/icons-react"

import { useEffect } from "react"

export const Promocja = () => {

    const wlasciwosci = [
        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
        { icon: IconClock, text: 'wejście od 0-00 do 15-00' },
        { icon: IconInfoCircle, text: 'Uczniowie lub studenci do 26 roku życia' },
        { icon: IconLock, text: 'możliwość zablokowania karnetu' }
    ]


    const [isOpened, { toggle }] = useDisclosure();
    useEffect(() => {
        setTimeout(toggle, 5000)
    }, [])

    return (
        <Modal size={"lg"} opened={isOpened} onClose={toggle}>


            {/* <Card shadow="sm" mx={'xl'} padding="xl" radius="md" withBorder>
                <Card.Section m='md'> */}
            <Image
                alt="promocja"
                // quality={10}
                // alt="Student 99zł"
                src='promocja2.png'
                loading="lazy"
                // h={150}
                // w="auto"
                fit="contain"
                radius="xl"
                mb="md"
            />
            {/* </Card.Section> */}

            {/* <Title order={4}>
                    <Text ta={'center'} inherit size="xl" variant="gradient" gradient={{ from: color, to: 'red' }} >
                        {cena.nazwa}
                    </Text>
                </Title>

                <Divider my={"xs"} />
                <Title order={3}>
                    <Text ta={'center'} inherit size="xl" variant="gradient" gradient={{ from: 'red', to: color }} >
                        {(cena.cena)}
                    </Text>
                </Title> */}

            <List
                spacing={'md'}
            >
                {wlasciwosci.map((wlasciwosc, index) => {
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
            <Center p={'1em'}><Button onClick={toggle}> OK</Button></Center>

        </Modal>)
}