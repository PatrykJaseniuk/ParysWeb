import { SilowniaI, StrefaI, UslugaI, UslugiI, } from "@/src/interface/1/Uslugi";
import { boks, crossFit, zajeciaGrupowe } from "./ZajeciaGrupowe";
import { Icon24Hours, IconBooks, IconCalendar, IconClock, IconDoorEnter, IconInfinity, IconInfoCircle, IconLock, IconUsersGroup } from "@tabler/icons-react";
import { IconVerifed } from "../2/Icons/IconVerified";
import { IconGift } from "@tabler/icons-react";
import IconFreedom from "@/src/components/2/IconsParys/IconFreedom";

// definicje pogrupowane w warstwy

// ----------Level 3---------------------------

type Strefy = { [key in 'wolneCiezary' | 'maszynyZeStosem' | 'cardio' | 'rozgrzewka' | 'rollmasazIPlatformaWibrujaca' | 'cross']: StrefaI };

export const strefy: Strefy = {
    wolneCiezary: {
        nazwa: "Wolne ciężary",
        opis: "Podstawowa sala do ćwiczeń jest wyposażona w maszyny na talerze, takie jak hamery o zmiennej geometrii ruchu, przeznaczone na wszystkie partie mięśniowe. Znajdziemy tu sztangi olimpijskie, łamane, kratownice, sztangielki, trap bar hex. Sala oferuje również szereg ławeczek skośnych, poziomych i ławeczek ze stojakami do wyciskania skośnego i poziomego. Posiadamy także suwnice Schmita, hack squat do przysiadów wypychających, oraz konstrukcje Rack z drążkami, poręczami i stojakami do przysiadów i martwych ciągów. Strefa ta, ze swoją bogatą różnorodnością maszyn, ciężarów i gryfów, jest w stanie zaskoczyć nawet najbardziej wymagające osoby.",
        media: {
            thumbnail: 'strefy/wolneCiezary.png',
            video: "strefy/wolneCiezary.mp4"
        }
    },
    maszynyZeStosem: {
        nazwa: "Maszyny ze stosem",
        opis: "Strefa ta posiada dwie sale, podzielone tematycznie, z bogatą ofertą maszyn z regulacją ciężaru na stosy. Dostępność maszyn pozwala pobudzić wszystkie partie mięśniowe w różnych wariantach ruchowych oraz płaszczyznach wykonywanych ćwiczeń.",
        media: {
            thumbnail: 'strefy/maszynyZeStosem.png',
            video: "strefy/maszynyZeStosem.mp4"
        }
    },
    cardio: {
        nazwa: "Cardio",
        opis: "Urządzenia do ćwiczeń aerobowych pozwalają rozgrzać termicznie nasze ciało, wzmocnić układ sercowo-naczyniowy oraz przyspieszyć metabolizm, mobilizując spalanie tkanki tłuszczowej. Bogactwo maszyn cardio, takich jak bieżnie, orbitreki, stepy, wioślarze, narciarze, rowerki poziome, pionowe i hybrydowe, umożliwia wykonanie najbardziej zaawansowanego treningu wydolnościowego.",
        media: {
            thumbnail: 'strefy/cardio.png',
            video: "strefy/cardio.mp4"
        }
    },
    rozgrzewka: {
        nazwa: "Sala funkcjonalna",
        opis: '',
        media: {
            thumbnail: 'strefy/rozgrzewka.png',
            video: "strefy/rozgrzewka.mp4"
        }
    },
    cross: {
        nazwa: "Sala cross",
        opis: "Hala przystosowana do ćwiczeń z własnym ciałem, do crossfitu, kalisteniki, oraz sztuk walki. Wysoka na 7m sala posiada kratownicę z linami do podciągania, taśmami do ewolucji powietrznych, kółkami gimnastycznymi. Wyposażona jest w długą konstrukcję RAK, na której zainstalowane są drążki, poręcze, kółka, taśmy TRX, gumy do podciągania, rękawy do ćwiczeń na brzuch, uchwyty do przysiadów, poręcze gimnastyczne. Sala posiada podłoże gumowane; do dyspozycji są materace gimnastyczne, kalimaty oraz rozkładana mata do ćwiczeń sztuk walki. Na wyposażeniu mamy łapy bokserskie, osłony, tarcze bokserskie, skakanki, gumy oporowe, taśmy oporowe, rowery airbike, narciarze, piłki lekarskie, stepy, skrzynie, kettelbelle, talerze, sztangi. Bogactwo przyrządów tej sali daje możliwość przeprowadzenia każdego treningu wytrzymałościowo-siłowego, jak również specjalistycznego.",
        media: {
            thumbnail: 'strefy/cross.png',
            video: "strefy/cross.mp4"
        },
        kalendarz: 'https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTitle=1&showNav=0&showPrint=0&showTabs=0&mode=WEEK&showCalendars=0&showTz=0&title=Dost%C4%99pno%C5%9B%C4%87%20sali&src=MWt1M280MjcyZnVvMWg2bDFjY200cGJsYW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=azJsbjN0Z3B0cTZrNmFubXY2amZrczNzbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548&color=%23D50000'
    },
    rollmasazIPlatformaWibrujaca: {
        nazwa: "Rollmasaż i platforma wibrująca",
        opis: "Popularnie nazywana rolką, to bęben z rolek drewnianych, który obracając się wykonuje ruch masujący ciało. Bęben, obracając się, drenuje ciało, poprawiając ukrwienie, zwiększając przepływ krwi i limfy. Urządzenie to poprawia przemianę materii, usuwa wodę zbieraną podskórną, likwiduje nierówności skórne, takie jak cellulit, i ma istotny wpływ na spalanie tkanki tłuszczowej. Platforma wibrująca medyczna ma bardzo szerokie zastosowanie. Jest to biomechaniczna stymulacja mięśniowa, która powoduje pracę mięśni, rozgrzewając je, zwiększa ukrwienie, przyspiesza metabolizm i powoduje drenaż limfatyczny ciała. Jest to bardzo dobra metoda fizykalna do treningów osób z problemami narządu ruchu. Dla sportowców i osób aktywnych jest doskonałym uzupełnieniem treningu, poprzez regulację częstotliwości drgań, wywołując pracę mięśni głębokich i powierzchniowych.",
        media: {
            thumbnail: 'strefy/rollWibra.png',
            video: "strefy/rollWibra.mp4"
        },
        kalendarz: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showNav=1&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=MG44bzgwdGk2OTBodmRxZmpmMzY0ZGhjZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688'
    },
}


// ----------Level 2---------------------------


// ----------Level 1---------------------------
const silownia: SilowniaI = {
    title: 'Siłownia',
    opis: 'Wybierz dostęp do stref treningowych i zajęć grupowych, który najbardziej Ci odpowiada.',
    karnety: [
        {
            nazwa: '4 strefy',
            cennik: {
                wlasciwosciWspolne: [
                    { icon: IconFreedom, text: 'Brak umów płatniczych' },
                    { icon: IconInfoCircle, text: 'wpisowe 15zł' },
                ],
                ceny: [
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
                        ]
                    },
                    {
                        nazwa: 'MIESIĘCZNY uczeń/senior', cena: '129 zł', wlasciwosci: [
                            { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                            { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                            { icon: Icon24Hours, text: 'całodobowy dostęp' },
                            { icon: IconInfoCircle, text: 'Uczniowie lub studenci do 26 roku życia' },
                            { icon: IconInfoCircle, text: 'Seniorzy od 67 roku życia' },
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
                        ]
                    },
                    {
                        imgSrc: 'zasoby/multisport.png', nazwa: '', cena: '', wlasciwosci: [
                            { icon: IconClock, text: 'dostęp w godzinach otwarcia recepcji' },
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

                ]
            },
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                // strefy.cross,
                // strefy.rollmasazIPlatformaWibrujaca,
            ],
            dostepneZajeciaGrupowe: []
        },
        {
            nazwa: '5 stref',
            cennik: {
                wlasciwosciWspolne: [
                    { icon: IconFreedom, text: 'Brak umów płatniczych' },
                    { icon: IconInfoCircle, text: 'wpisowe 15zł' },
                ],
                ceny: [
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
                        ]
                    },
                ]
            },
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                strefy.cross,
                // strefy.rollmasazIPlatformaWibrujaca,
            ],
            dostepneZajeciaGrupowe: []
        },
        {
            nazwa: '6 stref + zajęcia grupowe',
            cennik: {
                wlasciwosciWspolne: [
                    { icon: IconFreedom, text: 'Brak umów płatniczych' },
                    { icon: IconInfoCircle, text: 'wpisowe 15zł' },
                ],
                ceny: [
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
                        ]
                    },
                    {
                        nazwa: '10 WEJŚĆ', cena: '170 zł', wlasciwosci: [
                            { icon: IconCalendar, text: 'ważny 2 miesiące' },
                            { icon: IconDoorEnter, text: '10 wejść' },
                            { icon: Icon24Hours, text: 'całodobowy dostęp' },

                        ]
                    },
                ]
            },
            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                strefy.cross,
                strefy.rollmasazIPlatformaWibrujaca,
            ],
            dostepneZajeciaGrupowe: [boks, crossFit],
        },
        {
            nazwa: '4 strefy + cross',
            cennik: {
                wlasciwosciWspolne: [
                    { icon: IconFreedom, text: 'Brak umów płatniczych' },
                    { icon: IconInfoCircle, text: 'wpisowe 15zł' },
                ],
                ceny: [
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
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
                            { icon: IconLock, text: 'możliwość zablokowania karnetu' }
                        ]
                    },
                    {
                        imgSrc: 'zasoby/multisport.png', nazwa: '', cena: '', wlasciwosci: [
                            { icon: IconClock, text: 'dostęp w godzinach otwarcia recepcji' },
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
                ]
            },

            dostepneStrefy: [
                strefy.cardio,
                strefy.maszynyZeStosem,
                strefy.rozgrzewka,
                strefy.wolneCiezary,
                // strefy.cross,
                // strefy.rollmasazIPlatformaWibrujaca,
            ],
            dostepneZajeciaGrupowe: [crossFit]
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
        cennik: {
            wlasciwosciWspolne: [],
            ceny: [
                {
                    nazwa: 'BADMINTON godzina', cena: '60 zł', wlasciwosci: [{
                        icon: IconClock,
                        text: '1 godzina gry'
                    }]
                },
            ]
        },
        kalendarz: 'https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTitle=1&showNav=0&showPrint=0&showTabs=0&mode=WEEK&showCalendars=0&showTz=0&title=Dost%C4%99pno%C5%9B%C4%87%20sali&src=MWt1M280MjcyZnVvMWg2bDFjY200cGJsYW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=azJsbjN0Z3B0cTZrNmFubXY2amZrczNzbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548&color=%23D50000'
    },
    {
        title: 'Sauna',
        description: 'Sauna sucha z leżakownią i prysznicem do 6 osób. Cena za wynajęcia całego pomieszczenia. Prosimy o rezerwacja przynajmniej 1 godzinę przed planowaną wizytą.',
        videoSrc: 'oferta/Sauna.mp4',
        cennik: {
            wlasciwosciWspolne: [],
            ceny: [
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
        kalendarz: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTitle=1&showNav=1&showDate=0&showPrint=0&showTabs=0&showTz=0&showCalendars=0&mode=WEEK&src=ODYyOTdlNTk1Y2E0OTlhMTc2ZDMxMGU4YjNlOWVlNjAzN2E3NTljOGNkZjJiYWUyYmFkNDBkZjg1MjI2YzYzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E'
    },
    {
        title: 'Masaż',
        description: 'Różne rodzaje masaży: klasyczny, sportowy, próżniowy, relaksacyjny. Zapraszamy do zapisów w recepcji, lub telefonicznie.',
        videoSrc: 'oferta/Masaz.mp4',
        cennik: {
            wlasciwosciWspolne: [],
            ceny: [
                { nazwa: 'MASAŻ', cena: 'od 120', wlasciwosci: [{ icon: IconVerifed, text: '' }] },
            ]
        }
    },
    {
        title: 'Bufet i sklep z odżywkami',
        description: 'W sklepie znajdziesz, napoje, odżywki, suplementy diety, odzież sportową, akcesoria treningowe, natomiast bufet serwuje koktajle proteinowe i kawę.',
        videoSrc: 'oferta/Bufet.mp4',
        // cennik: []
    }
]

// ----------Level 0---------------------------
export const uslugi: UslugiI = {
    silownia: silownia,
    uslugiStandardowe: uslugiStandardowe
}


