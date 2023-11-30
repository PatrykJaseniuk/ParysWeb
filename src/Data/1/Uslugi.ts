import { SilowniaI, StrefaI, UslugaI, UslugiI, GrupaStref } from "@/src/interface/1/Uslugi";
import { cardio } from "@/src/stories/1/Uslugi/Strefa.stories";
import { keys } from "@mantine/core";
import { zajeciaGrupowe } from "./ZajeciaGrupowe";
import { Icon24Hours, IconCalendar, IconClock, IconDoorEnter, IconGif, IconInfinity, IconInfoCircle, IconTableHeart, IconUsersGroup } from "@tabler/icons-react";
import { IconVerifed } from "../2/Icons/IconVerified";
import { IconGift } from "@tabler/icons-react";

// definicje pogrupowane w warstwy

// ----------Level 3---------------------------

type Strefy = { [key in 'wolneCiezary' | 'maszynyZeStosem' | 'cardio' | 'rozgrzewka' | 'rollmasazIPlatformaWibrujaca' | 'cross']: StrefaI };

export const strefy: Strefy = {
    wolneCiezary: {
        nazwa: "Wolne ciężary",
        opis: " ",
        media: {
            thumbnail: 'strefy/wolneCiezary.png',
            video: "strefy/wolneCiezary.mp4"
        }
    },
    maszynyZeStosem: {
        nazwa: "Maszyny ze stosem",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'strefy/maszynyZeStosem.png',
            video: "strefy/maszynyZeStosem.mp4"
        }
    },
    cardio: {
        nazwa: "Cardio",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'strefy/cardio.png',
            video: "strefy/cardio.mp4"
        }
    },
    rozgrzewka: {
        nazwa: "Sala funkcjonalna",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'strefy/rozgrzewka.png',
            video: "strefy/rozgrzewka.mp4"
        }
    },
    cross: {
        nazwa: "Sala cross",
        opis: "Duża, bogato wyposażona sala, która umożliwia wykonanie specjalistycznych treningów: sztuki walki, kalistenika, gimnastyka, trening funkcjonalny.",
        media: {
            thumbnail: 'strefy/cross.png',
            video: "strefy/cross.mp4"
        }
    },
    rollmasazIPlatformaWibrujaca: {
        nazwa: "Rollmasaż i platforma wibrująca",
        opis: "filmy/Bufet.mp4",
        media: {
            thumbnail: 'strefy/rollWibra.png',
            video: "strefy/rollWibra.mp4"
        }
    },
}


// ----------Level 2---------------------------


// ----------Level 1---------------------------
const silownia: SilowniaI = {
    title: 'Siłownia',
    opis: 'Wybierz pakiet dostępu do stref treningowych i zajęć grupowych, który najbardziej Ci odpowiada.',
    karnety: [
        {
            nazwa: '4 strefy',
            cennik: [
                {
                    cena: '25 zł',
                    nazwa: 'JEDNORAZOWY',
                    wlasciwosci: [
                        { icon: IconDoorEnter, text: 'jedno wejście' },

                    ],
                },
                {
                    nazwa: 'MIESIĘCZNY', cena: '139 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: 'MIESIĘCZNY uczeń/senior', cena: '129 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                        { icon: IconInfoCircle, text: 'Uczniowie lub studenci do 26 roku życia' },
                        { icon: IconInfoCircle, text: 'Seniorzy od 68 roku życia' },
                    ]
                },
                {
                    nazwa: 'MIESIĘCZNY uczeń do 15', cena: '99 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: IconClock, text: 'wejście od 8-00 do 15-00' },
                        { icon: IconInfoCircle, text: 'Uczniowie lub studenci do 26 roku życia' },

                    ]
                },
                {
                    nazwa: '2 TYGODNIE', cena: '100 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 tygodnie' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: '10 WEJŚĆ', cena: '120 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 miesiące' },
                        { icon: IconDoorEnter, text: '10 wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },

                    ]
                },
                {
                    nazwa: '8 WEJŚĆ', cena: '110 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 miesiące' },
                        { icon: IconDoorEnter, text: '8 wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: '4 WEJŚĆ', cena: '70 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 miesiące' },
                        { icon: IconDoorEnter, text: '4 wejścia' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: 'ROCZNY', cena: '1390 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 12 miesięcy' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                        { icon: IconGift, text: 'dwa miesiące gratis' },
                    ]
                },
                {
                    imgSrc: 'zasoby/multisport.png', nazwa: '', cena: '', wlasciwosci: [
                        { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                    ]
                },
                {
                    imgSrc: 'zasoby/medicover.png', nazwa: '', cena: '', wlasciwosci: [
                        { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                    ]
                },
                {
                    imgSrc: 'zasoby/fitProfit.png', nazwa: '', cena: '', wlasciwosci: [
                        { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                    ]
                },

            ],
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                // strefy.cross,
                // strefy.rollmasazIPlatformaWibrujaca,
            ],
            czyDostepneZajeciaGrupowe: false
        },
        {
            nazwa: '5 stref',
            cennik: [
                {
                    cena: '35 zł',
                    nazwa: 'JEDNORAZOWY',
                    wlasciwosci: [
                        { icon: IconDoorEnter, text: 'jedno wejście' },

                    ],
                },
                {
                    nazwa: 'MIESIĘCZNY', cena: '160 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: '10 WEJŚĆ', cena: '150 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 miesiące' },
                        { icon: IconDoorEnter, text: '10 wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },

                    ]
                },
                {
                    nazwa: 'ROCZNY', cena: '1600 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 12 miesięcy' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                        { icon: IconGift, text: 'dwa miesiące gratis' },
                    ]
                },
            ],
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                strefy.cross,
                // strefy.rollmasazIPlatformaWibrujaca,
            ],
            czyDostepneZajeciaGrupowe: false
        },
        {
            nazwa: '6 stref + zajęcia grupowe',
            cennik: [
                {
                    cena: '35 zł',
                    nazwa: 'JEDNORAZOWY',
                    wlasciwosci: [
                        { icon: IconDoorEnter, text: 'jedno wejście' },

                    ],
                },
                {
                    nazwa: 'MIESIĘCZNY', cena: '180 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: '10 WEJŚĆ', cena: '170 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 miesiące' },
                        { icon: IconDoorEnter, text: '10 wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },

                    ]
                },
            ],
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                strefy.cross,
                strefy.rollmasazIPlatformaWibrujaca,
            ],
            czyDostepneZajeciaGrupowe: true,
        },

        {
            nazwa: '4 strefy + zajęcia grupowe',
            cennik: [
                {
                    cena: '35 zł',
                    nazwa: 'JEDNORAZOWY',
                    wlasciwosci: [
                        { icon: IconDoorEnter, text: 'jedno wejście' },

                    ],
                },
                {
                    nazwa: 'MIESIĘCZNY', cena: '160 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: '2 TYGODNIE', cena: '120 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 tygodnie' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                    ]
                },
                {
                    nazwa: '10 WEJŚĆ', cena: '150 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 2 miesiące' },
                        { icon: IconDoorEnter, text: '10 wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },

                    ]
                },
                {
                    nazwa: 'ROCZNY', cena: '1600 zł', wlasciwosci: [
                        { icon: IconCalendar, text: 'ważny 12 miesięcy' },
                        { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                        { icon: Icon24Hours, text: 'całodobowy dostęp' },
                        { icon: IconGift, text: 'dwa miesiące gratis' },
                    ]
                },
                {
                    imgSrc: 'zasoby/multisport.png', nazwa: '', cena: '', wlasciwosci: [
                        { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                    ]
                },
                {
                    imgSrc: 'zasoby/medicover.png', nazwa: '', cena: '', wlasciwosci: [
                        { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                    ]
                },
                {
                    imgSrc: 'zasoby/fitProfit.png', nazwa: '', cena: '', wlasciwosci: [
                        { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                    ]
                },
            ],
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                // strefy.cross,
                // strefy.rollmasazIPlatformaWibrujaca,
            ],
            czyDostepneZajeciaGrupowe: true
        },

    ],
    wszystkieStrefy: Object.keys(strefy).map((key) => strefy[key as keyof Strefy]),
    wszystkieZajeciaGrupowe: zajeciaGrupowe.zajecia
}

const uslugiStandardowe: UslugaI[] = [
    {
        title: "Badminton",
        description: "Pełnowymiarowy kort do gry w badmintona",
        videoSrc: "oferta/Badminton.mp4",
        cennik: [
            {
                nazwa: 'BADMINTON godzina', cena: '60 zł', wlasciwosci: [{
                    icon: IconClock,
                    text: '1 godzina gry'
                }]
            },
        ]
    },
    {
        title: 'Sauna',
        description: 'Sauna sucha z leżakownią i prysznicem do 6 osób. Cena za wynajęcia całego pomieszczenia. Prosimy o rezerwacja przynajmniej 1 godzinę przed planowaną wizytą.',
        videoSrc: 'oferta/Sauna.mp4',
        cennik: [
            {
                nazwa: 'SAUNA godzina', cena: '60', wlasciwosci: [{
                    icon: IconClock,
                    text: 'wynajęcie na 1 godzinę'
                },
                {
                    icon: IconUsersGroup,
                    text: 'maksymalnie 6 osób'
                }
                ]
            },
        ]
    },
    {
        title: 'Masaż',
        description: 'Różne rodzaje masaży: klasyczny, sportowy, próżniowy, relaksacyjny. Zapraszamy do zapisów w recepcji, lub telefonicznie.',
        videoSrc: 'oferta/Masaz.mp4',
        cennik: [
            { nazwa: 'MASAŻ', cena: 'od 120', wlasciwosci: [{ icon: IconVerifed, text: '' }] },
        ]
    },
    {
        title: 'Bufet i sklep z odżywkami',
        description: 'W sklepie znajdziesz, napoje, odżywki, suplementy diety, odzież sportową, akcesoria treningowe, natomiast bufet serwuje koktajle proteinowe i kawę.',
        videoSrc: 'oferta/Bufet.mp4',
        cennik: []
    }
]

// ----------Level 0---------------------------
export const uslugi: UslugiI = {
    silownia: silownia,
    uslugiStandardowe: uslugiStandardowe
}


