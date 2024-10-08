import { StrefaI } from "@/src/interface/1/Uslugi";
import { ZajecieI } from "@/src/interface/1/ZajeciaGrupowe";
import { useMantineTheme, Card, Image, Text, Modal, DefaultMantineColor, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { Kalendaz } from "../Kalendarz";


export const ZajecieGrupowe = ({ data, isActive, kolor }: { data: ZajecieI, isActive: boolean, kolor: DefaultMantineColor }) => {
    const theme = useMantineTheme();

    // Styl bazowy dla karty z dodanym efektem przejścia
    const cardBaseStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        margin: 'auto',
        transition: 'opacity 0.5s ease, filter 0.5s ease, border-color 0.5s ease', // efekt przejścia dla opacity, filter i border-color
        border: '3px solid transparent', // transparent border for smooth transition
    };

    // Styl dla aktywnego komponentu
    const activeStyle = {
        shadow: 'md',
        opacity: 1,
        filter: 'none',
        borderColor: kolor // kolor ramki z motywu
    };

    // Styl dla nieaktywnego komponentu
    const inactiveStyle = {
        shadow: 'sm',
        opacity: 0.7,
        filter: 'grayscale(100%)',
        borderColor: 'transparent' // przeźroczysta ramka dla nieaktywnego komponentu
    };


    // Wybór odpowiedniego stylu
    const cardStyle = isActive ? activeStyle : inactiveStyle;

    const [modalOpened, setModalOpened] = useState(false);
    return (
        <>
            <UnstyledButton onClick={() => setModalOpened(true)}>
                <Card
                    shadow={cardStyle.shadow}
                    p="lg"
                    style={{ ...cardBaseStyle, opacity: cardStyle.opacity, filter: cardStyle.filter, borderColor: cardStyle.borderColor }}
                >
                    <Card.Section>

                        <Image alt={data.title} loading="lazy" src={data.imgSrc} width="100%" />
                    </Card.Section>
                    <Text size="md" style={{ marginTop: theme.spacing.sm }}>
                        {data.title}
                    </Text>
                    {/* <Text size="sm" style={{ color: isActive ? theme.colors.gray[6] : 'lightgray' }}>
                    {data.opis}
                </Text> */}
                </Card>
            </UnstyledButton>
            <ZajecieModal data={data} opened={modalOpened} onClose={() => setModalOpened(false)} />
        </>
    );
};


const ZajecieModal = ({ data, opened, onClose }: { data: ZajecieI, opened: boolean, onClose: () => void }) => {
    const theme = useMantineTheme();

    // Styl dla tytułu modala
    const modalTitleStyle: React.CSSProperties = {
        textAlign: 'center', // Wyśrodkowanie tekstu
        fontSize: theme.fontSizes.xl, // Większy rozmiar czcionki
        fontWeight: 'bold', // Pogrubienie czcionki
        color: theme.colors.gray[8], // Kolor czcionki
        marginBottom: theme.spacing.md, // Margines na dole
    };
    return (
        <Modal opened={opened} onClose={onClose} title={<div style={modalTitleStyle}>{data.title}</div>} size="lg" >
            <div style={{ textAlign: 'center' }}>

                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    controls={false}
                    width="100%"
                    style={{ maxWidth: '100%', marginBottom: theme.spacing.md }}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <source src={data.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Text size="md" style={{ marginBottom: theme.spacing.xs }}>{data.description}</Text>
                {data.kalendazUrl && <Kalendaz data={data.kalendazUrl} />}
            </div>
        </Modal>
    );
};