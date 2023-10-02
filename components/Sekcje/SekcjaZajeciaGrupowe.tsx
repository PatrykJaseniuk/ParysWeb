import { SectionDaneAnd, ZajeciaGrupoweDane, ZajecieDane } from "@/Data/Interface"
import { Container, Text, Image, Title, SimpleGrid, Divider, Stack, Button, Modal, Box } from "@mantine/core"
import { Sekcja } from "./Sekcja"
import { Cennik } from "../Cennik"
import { useDisclosure } from "@mantine/hooks"

export const SekcjaZajeciaGrupowe = ({ data }: { data: SectionDaneAnd<ZajeciaGrupoweDane> }) => {


    return (
        <Sekcja data={data.sekcja}>
            {data.zawartosc.zajecia.map((d, index) => <Zajecie key={index} data={d} />)}
        </Sekcja>
    )
}


const Zajecie = ({ data }: { data: ZajecieDane }) => {
    return (
        <Container size={"xl"}>
            <SimpleGrid mt={'xl'} cols={{ sm: 1, md: 2 }}>
                <Stack my={'xl'}>
                    <Title order={3}>
                        <Text inherit >
                            {data.title}
                        </Text>

                    </Title>
                    <Text>
                        {data.description}
                    </Text>
                    <Kalendaz data={data.kalendaz} />
                </Stack>
                <Image radius={'xl'} width={'100%'} height={'auto'} src={data.imgSrc} />
            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>
    )
}


const Kalendaz = ({ data }: { data: string }) => {
    const [opened, { open, close }] = useDisclosure(false);


    return (
        <>
            <Modal fullScreen opened={opened} onClose={close} title="Kalendarz" centered  >
                <iframe src={data} style={{ width: '100%', height: '75vh' }} ></iframe>
            </Modal >
            <Button variant="light" onClick={open}>Kalendarz</Button>
        </>
    )
}
