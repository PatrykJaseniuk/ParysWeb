import { KarnetI, SilowniaI } from "@/src/interface/1/Uslugi"
import { Text, Container, SimpleGrid, Stack, Title, Divider, SegmentedControl, DefaultMantineColor, Group, Button, useMantineTheme } from "@mantine/core"
import { Cennik } from "../../2/Cennik"
import { useState } from "react"
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
                        {data.karnety.map((karnet, index) =>
                            <Button
                                key={index}
                                variant={karnet.nazwa == aktywnyKarnetNazwa ? 'filled' : 'light'}
                                color={karnet.nazwa == aktywnyKarnetNazwa ? aktywnyKarnetKolor.kolor : 'gray'}
                                onClick={() => setAktywnyKarnetNazwa(karnet.nazwa)} >{karnet.nazwa}
                            </Button>
                        )}
                    </Group>

                }

                <Text>strefy </Text>
                <SimpleGrid cols={{ base: 2, md: 3 }}>
                    {data.wszystkieStrefy.map((strefa, index) => {
                        const isActive = aktywnyKarnetKolor.karnet.dostepneStrefy.find((strefaAktywnegoKarnetu) =>
                            strefaAktywnegoKarnetu === strefa
                        ) != undefined;

                        return (
                            <Strefa key={index} isActive={isActive} data={strefa} kolor={aktywnyKarnetKolor.kolor} />
                        )
                    })}
                </SimpleGrid>

                <Text>zajęcia grupowe</Text>
                <SimpleGrid cols={{ base: 2, md: 3 }}>
                    {data.wszystkieZajeciaGrupowe.map((zajecie, index) =>
                        <ZajecieGrupowe
                            key={index}
                            data={zajecie}
                            isActive={aktywnyKarnetKolor.karnet.dostepneZajeciaGrupowe.find((zajeciee) => zajeciee === zajecie) != undefined}
                            kolor={aktywnyKarnetKolor.kolor}
                        />
                    )}
                </SimpleGrid>

                <Cennik nazwa={aktywnyKarnetKolor.karnet.nazwa} data={aktywnyKarnetKolor.karnet.cennik} kolor={aktywnyKarnetKolor.kolor} />

            </Stack>
            <Divider size={'xl'} m={"xl"} />
        </Container >
    )
}