import { Card, Image, Divider, List, ListItem, Modal, Title, Text, Button, Center } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconCalendar, IconInfinity, IconClock, IconInfoCircle, IconLock } from "@tabler/icons-react"

import { useEffect } from "react"
import { Video } from "./Uslugi/SekcjaUslugi"
import Fireworks from "@fireworks-js/react"
import { Kalendaz } from "./Kalendarz"
import { zajeciaGrupowe } from "@/src/Data/1/ZajeciaGrupowe"

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
        <>
            <Modal transitionProps={{ transition: "fade", }} withCloseButton={false} centered size={"lg"} opened={isOpened} onClose={toggle}>
                <Fireworks style={{

                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    // background: '#000',
                    pointerEvents: 'none',
                }}

                />
                <Center>
                    <Title order={2}>
                        🥊 BOKS 🥊
                    </Title>

                </Center>

                <div style={{ zIndex: 10000 }}>
                    <Video src='zajecia_grupowe/boks.mp4' />
                </div>

                <Text mt="2" size="xl"> Zapraszamy na nowe zajęcia grupowe.</Text>


                <Center p={'1em'}><Button onClick={toggle}> OK</Button></Center>



            </Modal>
        </>
    )
}