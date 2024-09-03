import { Container, Text, Image, Title, SimpleGrid, Divider, Stack, Button, Modal, Box } from "@mantine/core"
import { Sekcja } from "./Sekcja"
import { Cennik } from "../2/Cennik"
import { useDisclosure } from "@mantine/hooks"
import { ZajeciaGrupoweI, ZajecieI } from "@/src/interface/1/ZajeciaGrupowe"
import { SectionI } from "@/src/interface/1/Section"
import { Kalendaz } from "./Kalendarz"
import { Video } from "./Uslugi/SekcjaUslugi"

export const SekcjaZajeciaGrupowe = ({ data }: { data: SectionI<ZajeciaGrupoweI> }) => {
    return (
        <Sekcja data={data.section}>
            <ZajeciaGrupowe data={data.content} />
        </Sekcja>
    )
}

const ZajeciaGrupowe = ({ data }: { data: ZajeciaGrupoweI }) => {

    return (
        <Container size={'xl'} my={'xl'}>
            <Stack>

                <Kalendaz data={data.kalendarzUrl} />


                {data.zajecia.map((zajecie) =>
                    <Zajecie key={zajecie.title} data={zajecie} />
                )}



            </Stack>

        </Container>



    )

}

const Zajecie = ({ data }: { data: ZajecieI }) => {
    return (
        <Container size={"xl"}>
            <SimpleGrid mt={'xl'} cols={{ sm: 1, md: 2 }}>
                <Stack my={'xl'}>
                    <Title order={2}>
                        <Text inherit >
                            {data.title}
                        </Text>
                    </Title>
                    <Text>
                        {data.description}
                    </Text>
                    {data.kalendazUrl && <Kalendaz data={data.kalendazUrl} />}
                </Stack>
                {data.videoSrc &&
                    <Video src={data.videoSrc} />
                    ||
                    data.imgSrc &&
                    <Image alt={data.title} loading="lazy" radius={'xl'} width={'100%'} height={'auto'} src={data.imgSrc} />
                }

            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>
    )
}


