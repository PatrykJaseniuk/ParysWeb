import { SilowniaI, StrefaI, UslugaI, UslugiI, GrupaStref } from "@/src/interface/1/Uslugi";
import { cardio } from "@/src/stories/1/Uslugi/Strefa.stories";
import { keys } from "@mantine/core";
import { zajeciaGrupowe } from "./ZajeciaGrupowe";

// definicje pogrupowane w warstwy

// ----------Level 3---------------------------

type Strefy = { [key in 'wolneCiezary' | 'maszynyZeStosem' | 'cardio' | 'rozgrzewka' | 'rollmasazIPlatformaWibrujaca' | 'cross']: StrefaI };

export const strefy: Strefy = {
    wolneCiezary: {
        nazwa: "Wolne Ciężary",
        opis: " ",
        media: {
            thumbnail: 'badmintonBlur.png',
            video: "filmy/Bufet.mp4"
        }
    },
    maszynyZeStosem: {
        nazwa: "Maszyny ze Stosem",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'badmintonBlur.png',
            video: "filmy/Bufet.mp4"
        }
    },
    cardio: {
        nazwa: "Cardio",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'badmintonBlur.png',
            video: "filmy/Bufet.mp4"
        }
    },
    rozgrzewka: {
        nazwa: "Rozgrzewka",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'badmintonBlur.png',
            video: "filmy/Bufet.mp4"
        }
    },
    cross: {
        nazwa: "Cross",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'badmintonBlur.png',
            video: "filmy/Bufet.mp4"
        }
    },
    rollmasazIPlatformaWibrujaca: {
        nazwa: "Rollmasaż",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'badmintonBlur.png',
            video: "filmy/Bufet.mp4"
        }
    },
}


// ----------Level 2---------------------------
const czteryStrefy: GrupaStref = {
    nazwa: "Cztery Strefy",
    opis: "Karnet basic",
    Strefy: [
        strefy.cardio,
        strefy.maszynyZeStosem,
        strefy.wolneCiezary,
        strefy.rozgrzewka
    ],
    cena: 0
}

const piecStref: GrupaStref = {
    nazwa: "Pięć Stref",
    opis: "Karnet premium",
    Strefy: [
        strefy.cardio,
        strefy.maszynyZeStosem,
        strefy.rozgrzewka,
        strefy.wolneCiezary,
        strefy.cross,
    ],
    cena: 0
}

const szescStref: GrupaStref = {
    nazwa: "Sześć Stref",
    opis: "Full wypas",
    Strefy: [
        strefy.cardio,
        strefy.maszynyZeStosem,
        strefy.rozgrzewka,
        strefy.wolneCiezary,
        strefy.cross,
        strefy.rollmasazIPlatformaWibrujaca,
    ],
    cena: 0
}

// ----------Level 1---------------------------
const silownia: SilowniaI = {
    title: 'Siłownia',
    opis: 'Super fajna silownia',
    karnety: [
        {
            nazwa: '6 stref',
            cennik: [
                {
                    cena: '100 zł',
                    nazwa: 'Miesięczny',
                    wlasciwosci: []
                },

            ],
            dostepneStrefy: [
                strefy.cardio,
                strefy.cross,
                strefy.maszynyZeStosem
            ],
            czyDostepneZajeciaGrupowe: false,
        },
        {
            nazwa: '2 stref',
            cennik: [
                {
                    cena: '100 zł',
                    nazwa: 'Miesięczny',
                    wlasciwosci: []
                },

            ],
            dostepneStrefy: [
                strefy.cardio,
                strefy.cross
            ],
            czyDostepneZajeciaGrupowe: true
        }
    ],
    wszystkieStrefy: Object.keys(strefy).map((key) => strefy[key as keyof Strefy]),
    wszystkieZajeciaGrupowe: zajeciaGrupowe.zajecia
}

// ----------Level 0---------------------------
export const uslugi: UslugiI = {
    silownia: silownia,
    uslugiStandardowe: [
        {
            title: "Badminton",
            description: "Pełnowymiarowy kort do gry w badmintona",
            videoSrc: "filmy/Badminton.mp4",
            cennik: [
                {
                    nazwa: "Godzina gry",
                    cena: '60 zł',
                    wlasciwosci: [],
                }
            ]
        }
    ]
}


