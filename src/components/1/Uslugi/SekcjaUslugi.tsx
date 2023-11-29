import { Box, Container, Divider, SimpleGrid, Stack, Text, Title, Card, SegmentedControl, Switch, Chip, Group } from "@mantine/core"
import { Sekcja } from "../Sekcja"
import { useIntersection } from "@mantine/hooks"
import '@mantine/carousel/styles.css';
import { useEffect, useRef, useState } from "react"
import { Cennik } from "../../2/Cennik"
import { SectionI } from "@/src/interface/1/Section";
import { SilowniaI, UslugaI, UslugiI, GrupaStref} from "@/src/interface/1/Uslugi";

export const SekcjaUslugi = ({ data }: { data: SectionI<UslugiI> }) => {
    return (
        <Sekcja data={data.section}>
            {/* <UslugaSilownia data={data.content.uslugi[0]} />
            <UslugaOpen data={data.content.uslugi[1]} /> */}
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
                </Stack>
                <Video src={data.videoSrc} />
            </SimpleGrid>
            <Divider size={'xl'} m={"xl"} />
        </Container>
    )
}

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

    const styleText: React.CSSProperties = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: '20px 0',
        color: '#333',
        textAlign: 'center',
    };

    const styleContainer: React.CSSProperties = {

        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const styleFlexContainer: React.CSSProperties = {
        // marginTop: '1.5rem',
        display: 'flex',           // Dodano Flexbox
        flexDirection: 'row',      // Elementy w układzie wierszowym
        justifyContent: 'space-between', // Rozdziela elementy na przestrzeni kontenera
    }

    const styleLeftSection: React.CSSProperties = {
        flex: 1,                   // Zajmuje 1 część dostępnej przestrzeni
        paddingRight: '20px',      // Odstęp od tekstu
    };

    const styleRightSection: React.CSSProperties = {
        flex: 1,                   // Zajmuje 1 część dostępnej przestrzeni
        // styleText już zawiera odpowiednie właściwości dla tekstu
    };

    const styleSwitchContainer: React.CSSProperties = {
        display: 'flex',      // Używa Flexbox
        alignItems: 'center', // Wyśrodkowuje elementy w pionie
        gap: '10px',          // Odstęp pomiędzy elementami
        marginBottom: '20px', // Odstęp od dolnej części kontenera
    };
    //style

    const [aktywnaGrupaStref, setAktywnaGrupaStref] = useState<keyof typeof data.grupyStref>('czteryStrefy');
    const [czyTreningiGrupowe, setCzyTreningiGrupowe] = useState(true);
    const [czyDo15, setCzyDo15] = useState(false);
    const [wariantKarnetu, setWariantKarnetu] = useState<string>(data.typyKarnetów.okresowy[0].nazwa)
    const [czyStudent, setCzyStudent] = useState(false);

    const wszystkieTypyKarnetow = data.typyKarnetów.okresowy.concat(data.typyKarnetów.wejsciowy);

    return (
        <div style={styleContainer}>
            <Text> Kreator karnetu - skonfiguruj karnet do własnych potrzeb</Text>
            <div style={styleFlexContainer}>
                <div style={styleLeftSection}>
                    {/* Tutaj umieszczasz elementy po lewej stronie */}
                    <SegmentedControl
                        value={aktywnaGrupaStref}
                        onChange={(value) => setAktywnaGrupaStref(value as keyof typeof data.grupyStref)}
                        data={Object.keys(data.grupyStref).map((key) => ({
                            label: data.grupyStref[key as keyof typeof data.grupyStref].nazwa,
                            value: key,
                        }))}
                    />

                    {data.wszystkieStrefy.map((strefa) => <div style={
                        data.grupyStref[aktywnaGrupaStref].Strefy.find((value) => value === strefa) ? styleActive : styleInactive
                    }>{strefa.nazwa}</div>)}
                </div>
                <div style={styleRightSection}>
                    {/* Tutaj umieszczasz tekst */}
                    <Text style={styleText}> Siłownia składa się z sześciu stref wybież te z których będzisz chciał korzystać</Text>
                </div>
            </div>

            <div style={styleFlexContainer}>
                <div style={styleLeftSection}>
                    {/* Tutaj umieszczasz elementy po lewej stronie */}
                    <div style={styleSwitchContainer}>
                        <Text>Zajęcia Grupowe</Text>
                        {/* Tutaj umieszczasz przełącznik */}
                        <Switch
                            checked={czyTreningiGrupowe}
                            onChange={(e) => setCzyTreningiGrupowe(e.target.checked)}
                        />
                    </div>

                    {data.wszystkieZajeciaGrupowe.map((zajcie) =>
                        <div style={czyTreningiGrupowe ? styleActive : styleInactive}>{zajcie.title}</div>)}
                </div>
                <div style={styleRightSection}>
                    {/* Tutaj umieszczasz tekst */}
                    <Text style={styleText}>Czy chcesz uczestniczyć w zajęciach grupowych?</Text>
                </div>
            </div>

            <div style={styleFlexContainer}>
                <div style={styleLeftSection}>
                    {/* Tutaj umieszczasz elementy po lewej stronie */}
                    <div style={styleSwitchContainer}>
                        <Text>do godziny 15</Text>
                        {/* Tutaj umieszczasz przełącznik */}
                        <Switch
                            checked={czyDo15}
                            onChange={(e) => setCzyDo15(e.target.checked)}
                        />
                    </div>
                </div>
                <div style={styleRightSection}>
                    {/* Tutaj umieszczasz tekst */}
                    <Text style={styleText}>Wejście na siłownię do godziny 15 : -10%</Text>
                </div>
            </div>

            <div style={styleFlexContainer}>
                <div style={styleLeftSection}>
                    {/* Tutaj umieszczasz elementy po lewej stronie */}
                    <div style={styleSwitchContainer}>
                        <Text>czy student</Text>
                        {/* Tutaj umieszczasz przełącznik */}
                        <Switch
                            checked={czyStudent}
                            onChange={(e) => setCzyStudent(e.target.checked)}
                        />
                    </div>
                </div>
                <div style={styleRightSection}>
                    {/* Tutaj umieszczasz tekst */}
                    <Text style={styleText}>Studenci i uczniowie otrzymują zniżkę</Text>
                </div>
            </div>

            <div style={styleFlexContainer}>
                <div style={styleLeftSection}>
                    {/* Tutaj umieszczasz elementy po lewej stronie */}
                    <div style={styleSwitchContainer}>

                        {/* Tutaj umieszczasz przełącznik */}
                        <div>
                            <Text>Rodzaj </Text>

                            <Chip.Group defaultValue={wariantKarnetu}>
                                <Text>okresowe</Text>
                                <Group justify="center">
                                    {data.typyKarnetów.okresowy.map((wariant) =>
                                        <Chip value={wariant.nazwa} onClick={() => setWariantKarnetu(wariant.nazwa)} >{wariant.nazwa}</Chip>
                                    )}
                                </Group>
                                <Text>wejściowe</Text>
                                <Group justify="center">
                                    {data.typyKarnetów.wejsciowy.map((wariant) =>
                                        <Chip value={wariant.nazwa} onClick={() => setWariantKarnetu(wariant.nazwa)} >{wariant.nazwa}</Chip>
                                    )}
                                </Group>
                            </Chip.Group>

                            <Text>
                                Karnet ważny przez : {(wszystkieTypyKarnetow.find((wariant) => wariant.nazwa == wariantKarnetu))?.waznyPrzez}
                            </Text>
                            <Text>
                                Ilość dostępnych wizyt: {(wszystkieTypyKarnetow.find((wariant) => wariant.nazwa == wariantKarnetu))?.iloscDostepnychWizyt}
                            </Text>
                        </div>


                    </div>
                </div>

                <div style={styleRightSection}>
                    <Text style={styleText}>Wybierz typ i rodzaj karnetu</Text>
                </div>
            </div>

            <div>
                Cena {data.getKarnet({
                    grupaStref: data.grupyStref[aktywnaGrupaStref],
                    czyDo15: czyDo15,
                    czyStudent: false,
                    czyZajeciaGrupowe: czyTreningiGrupowe,
                    wariantKarnetu: wszystkieTypyKarnetow.find((wariant) => wariant.nazwa == wariantKarnetu) as Wariant
                })}
            </div>
        </div>



    );
}

export const Wersja = ({ data }: { data: GrupaStref }) => {
    return (
        <Card shadow="sm" p="lg">
            <Text size="lg">{data.nazwa}</Text>
            <Text size="sm" >{data.opis}</Text>
            {/* Renderowanie innych szczegółów */}
        </Card>
    );

}

// export const Strefa = ({ data }: { data: StrefaI }) => {
//     return (
//         <div></div>
//     )
// }




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
