import { KarnetI, SilowniaI, StrefaI, UslugaI } from "@/src/interface/1/Uslugi"
import { Text, Container, SimpleGrid, Stack, Title, Divider, SegmentedControl, DefaultMantineColor, Chip, Group, Button, useMantineTheme } from "@mantine/core"
import { Cennik } from "../../2/Cennik"
import { Video } from "./SekcjaUslugi"
import { useState } from "react"
import { CenaI } from "@/src/interface/2/Cena"
import { Strefa } from "./Strefa"
import { ZajecieGrupowe } from "./ZajecieGrupowe"
import { useMediaQuery } from "@mantine/hooks"




export const Silownia = ({ data }: { data: SilowniaI }) => {

    // style
    const styleActive: React.CSSProperties = {
        transition: 'all 1s ease',
        opacity: 1,
        color: 'black',

    };
    const styleInactive: React.CSSProperties = {
        transition: 'all 1s ease',
        opacity: 0.4,
        color: 'grey'
    };

    const theme = useMantineTheme();
    const isLargeScreen = useMediaQuery(`(min-width: 1000px)`);


    type KarnetKolorI = { karnet: KarnetI, kolor: DefaultMantineColor }
    const kolory: DefaultMantineColor[] = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    const karnetyKolory = data.karnety.map((karnet, index) => ({ karnet: karnet, kolor: kolory[index % kolory.length] }))

    const [aktywnyKarnetNazwa, setAktywnyKarnetNazwa] = useState(data.karnety[0].nazwa);
    const aktywnyKarnetKolor = (karnetyKolory.find((karnetKolor) => karnetKolor.karnet.nazwa == aktywnyKarnetNazwa) || karnetyKolory[0]) as KarnetKolorI;
    return (
        <Container size={"xl"}>

            <Stack>
                <Title order={2}>
                    <Text inherit >
                        {data.title}
                    </Text>
                </Title>
                <Text>
                    {data.opis}
                </Text>

                {isLargeScreen ?
                    <SegmentedControl
                        color={aktywnyKarnetKolor.kolor}
                        value={aktywnyKarnetNazwa}
                        onChange={(value) => setAktywnyKarnetNazwa(value)}
                        data={data.karnety.map((karnet) => karnet.nazwa)}
                    />
                    :
                    <Group>
                        {data.karnety.map((karnet) =>
                            <Button
                                variant={karnet.nazwa == aktywnyKarnetNazwa ? 'filled' : 'light'}
                                color={karnet.nazwa == aktywnyKarnetNazwa ? aktywnyKarnetKolor.kolor : 'gray'}
                                onClick={() => setAktywnyKarnetNazwa(karnet.nazwa)} >{karnet.nazwa}
                            </Button>
                        )}
                    </Group>

                }

                <Text>strefy </Text>
                <SimpleGrid cols={3}>
                    {data.wszystkieStrefy.map((strefa) => {
                        const isActive = aktywnyKarnetKolor.karnet.dostepneStrefy.find((strefaAktywnegoKarnetu) =>
                            strefaAktywnegoKarnetu === strefa
                        ) != undefined;

                        return (
                            <Strefa isActive={isActive} data={strefa} kolor={aktywnyKarnetKolor.kolor} />
                        )
                    })}
                </SimpleGrid>

                <Text>zajęcia grupowe</Text>
                <SimpleGrid cols={3}>
                    {data.wszystkieZajeciaGrupowe.map((zajecie) =>
                        <ZajecieGrupowe
                            data={zajecie}
                            isActive={aktywnyKarnetKolor.karnet.czyDostepneZajeciaGrupowe}
                            kolor={aktywnyKarnetKolor.kolor}
                        />
                    )}
                </SimpleGrid>

                <Cennik data={aktywnyKarnetKolor.karnet.cennik} kolor={aktywnyKarnetKolor.kolor} />

            </Stack>
            <Divider size={'xl'} m={"xl"} />
        </Container >
    )
}