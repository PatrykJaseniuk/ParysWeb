import { IconVerifed } from "@/Icons/IconVerified";
import { Site } from "./Interface";
// import { IconInfinity } from "@/Icons/IconInfinity";
import { IconAirconditioner } from "@/Icons/IconAirconditioner";
import { IconShield } from "@/Icons/IconShield";
import { IconMashine } from "@/Icons/IconMashine";
import { IconArea } from "@/Icons/IconArea";
import { IconCalaDoba } from "@/Icons/IconCalaDoba";
import { Icon123, Icon24Hours, IconAccessible, IconAirConditioning, IconArticle, IconBarbell, IconCalendar, IconCircuitGround, IconClock, IconClockShield, IconDoorEnter, IconHeartHandshake, IconInfinity, IconLocation, IconMail, IconPhone, IconRuler2, IconSignLeft, IconSpace, IconSquare, IconSquare0Filled, IconSun, IconUsers, IconUsersGroup } from "@tabler/icons-react";

export const data: Site = {
    header: {
        motto: 'Nie pozwól aby przypadek uformował Twoje ciało',
        feature: [
            {
                title: 'Od 1989',
                description: 'Wieloletnie doświadczenie',
                icon: IconClockShield
            },
            {
                title: 'Sprzęt',
                description: 'Posiadamy wiele maszyny do ćwiczeń najlepszych marek',
                icon: IconBarbell
            },
            {
                title: '1000 m2',
                description: 'Obiekt składa się z sześciu sal o łącznej powierzchni 1000 m2',
                icon: IconSquare
            },
            {
                title: 'Klimatyzacja',
                description: 'Wszystkie pomieszczenia są klimatyzowane',
                icon: IconAirConditioning
            },
            {
                title: 'Partnerzy',
                description: 'Akceptujemy MultiSport, Medicover, FitProfit i PZU',
                imgSrc: 'partnerzy.png',
                icon: IconHeartHandshake
            }
        ]
    },
    Uslugi: {
        sekcja: {
            background: 'SilowniaBackground.png',
            title: 'Usługi',
        },
        zawartosc: {
            uslugi: [
                {
                    title: 'Siłownia',
                    description: 'Siłownia składa się z czterech stref treningowych: wolne ciężary, maszyny ze stosem, cardio, strefa do treningów funkcjonalnych.',
                    videoSrc: 'SilowniaFilmy/Silownia.mp4',
                    cennik: [
                        {
                            nazwa: 'SIŁOWNIA miesięczny', cena: '140 zł', wlasciwosci: [
                                { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                                { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                                { icon: Icon24Hours, text: 'całodobowy dostęp' },
                            ]
                        },
                        {
                            nazwa: ' SIŁOWNIA 2 tygodnie', cena: '100 zł', wlasciwosci: [
                                { icon: IconCalendar, text: 'ważny 2 tygodnie' },
                                { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                                { icon: Icon24Hours, text: 'całodobowy dostęp' },
                            ]
                        },
                        {
                            nazwa: 'SIŁOWNIA 10 wejść', cena: '120 zł', wlasciwosci: [
                                { icon: IconCalendar, text: 'ważny 2 miesiące' },
                                { icon: IconDoorEnter, text: '10 wejść' },
                                { icon: Icon24Hours, text: 'całodobowy dostęp' },

                            ]
                        },
                        {
                            nazwa: 'SIŁOWNIA 8 wejść', cena: '100 zł', wlasciwosci: [
                                { icon: IconCalendar, text: 'ważny 2 miesiące' },
                                { icon: IconDoorEnter, text: '8 wejść' },
                                { icon: Icon24Hours, text: 'całodobowy dostęp' },
                            ]
                        },
                        {
                            nazwa: 'SIŁOWNIA jednorazowy', cena: '25 zł', wlasciwosci: [
                                { icon: IconDoorEnter, text: 'jednorazowa wizyta' },
                            ]
                        },
                        {
                            imgSrc: 'multisport.png', nazwa: '', cena: '', wlasciwosci: [
                                { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                            ]
                        },
                        {
                            imgSrc: 'medicover.png', nazwa: '', cena: '', wlasciwosci: [
                                { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                            ]
                        },
                        {
                            imgSrc: 'fitProfit.png', nazwa: '', cena: '', wlasciwosci: [
                                { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                            ]
                        },

                    ]
                },
                {
                    title: 'Badminton',
                    description: 'Pełnowymiarowy kort do gry w badmintona ',
                    videoSrc: 'crossfit.mp4',
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
                    title: 'Sala CROSS',
                    description: 'Duża, bogato wyposażona sala, która umożliwia wykonanie specjalistycznych treningów: sztuki walki, kalistenika, gimnastyka, trening funkcjonalny. Sala może być rezerwowana, dlatego przed planowany treningiem należy sprawdzić jej dostępność w kalendarzu.',
                    videoSrc: 'crossfit.mp4',
                    cennik: [
                        {
                            nazwa: 'CROSS jednorazowy', cena: '35 zł', wlasciwosci: [
                                { icon: IconDoorEnter, text: 'jednorazowa wizyta' },
                                { icon: IconAccessible, text: 'dostęp do siłowni' },
                                { icon: IconAccessible, text: 'dostęp do sali cross' },
                            ],
                        },
                        {
                            nazwa: 'CROSS miesięczny', cena: '180 zł', wlasciwosci: [
                                { icon: IconCalendar, text: 'ważny 1 miesiąc' },
                                { icon: IconInfinity, text: 'nieograniczona ilość wejść' },
                                { icon: Icon24Hours, text: 'całodobowy dostęp' },
                                { icon: IconAccessible, text: 'dostęp do siłowni' },
                                { icon: IconAccessible, text: 'dostęp do sali cross' },
                            ],
                        },
                        {
                            nazwa: 'CROSS 10 wejść', cena: '160 zł', wlasciwosci: [
                                { icon: IconCalendar, text: 'ważny 2 miesiąc' },
                                { icon: IconDoorEnter, text: '10 wejść' },
                                { icon: Icon24Hours, text: 'całodobowy dostęp' },
                                { icon: IconAccessible, text: 'dostęp do siłowni' },
                                { icon: IconAccessible, text: 'dostęp do sali cross' },
                            ],
                        },
                        {
                            imgSrc: 'multisport.png', nazwa: '', cena: '+ 10 zł', wlasciwosci: [
                                { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                                { icon: IconAccessible, text: 'dostęp do siłowni' },
                                { icon: IconAccessible, text: 'dostęp do sali cross' },
                            ]
                        },
                        {
                            imgSrc: 'medicover.png', nazwa: '', cena: '+ 10 zł', wlasciwosci: [
                                { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                                { icon: IconAccessible, text: 'dostęp do siłowni' },
                                { icon: IconAccessible, text: 'dostęp do sali cross' },
                            ]
                        },
                        {
                            imgSrc: 'fitProfit.png', nazwa: '', cena: '+ 10 zł', wlasciwosci: [
                                { icon: Icon24Hours, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                                { icon: IconAccessible, text: 'dostęp do siłowni' },
                                { icon: IconAccessible, text: 'dostęp do sali cross' },
                            ]
                        },

                    ]
                },
                {
                    title: 'Sauna',
                    description: 'Sauna sucha z leżakownią i prysznicem do 6 osób. Cena za wynajęcia całego pomieszczenia. Prosimy o rezerwacja przynajmniej 1 godzinę przed planowaną wizytą.',
                    videoSrc: 'sauna.mp4',
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
                    videoSrc: 'masaz.mp4',
                    cennik: [
                        { nazwa: 'Masaż', cena: 'od 120', wlasciwosci: [{ icon: IconVerifed, text: '' }] },
                    ]
                },
                {
                    title: 'Bufet i sklep z odżywkami',
                    description: 'W sklepie znajdziesz, napoje, odżywki, suplementy diety, odzież sportową, akcesoria treningowe, natomiast bufet serwuje koktajle proteinowe i kawę.',
                    videoSrc: 'bufet.mp4',
                    cennik: []
                }

            ]
        },
    },
    zajeciaIndywidualne: {
        sekcja: {
            background: 'badmintonBlur.png',
            title: 'Trener osobisty',
        },
        zawartosc: {
            description: 'Trener osobisty to osoba zajmująca się układaniem indywidualnego zestawu ćwiczeń oraz uczeniem ich prawidłowego wykonywania. Jego rolą jest również motywacja klienta i monitorowanie jego wyników. Współpracując z trenerem personalnym można znacząco skrócić czas niezbędny do uzyskania określonego celu sylwetkowego, sportowego, lub zdrowotnego. Zapraszamy do zapisów w recepcji, lub telefonicznie.',
            cennik: [
                {
                    nazwa: 'Trening personalny', cena: '110', wlasciwosci: [
                        { icon: IconUsers, text: 'godzinny trening osobisty' },
                        { icon: IconArticle, text: 'podstawowy plan treningowy' },
                    ]
                },
                {
                    nazwa: 'konsulatacja', cena: '110', wlasciwosci: [
                        { icon: IconRuler2, text: 'pomiar parametrów' },
                        { icon: IconVerifed, text: '' },
                    ]
                }
            ],
            trenerzy: [
                {
                    name: 'Krzysztof',
                    description: 'Trener personalny, właściciel',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Łukasz',
                    description: 'Trener personalny',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Robert',
                    description: 'Trener personalny, masażysta',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Rafał',
                    description: 'Trener personalny',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Adam',
                    description: 'Trener personalny',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
            ]
        },

    },
    zajeciaGrupowe: {
        sekcja: {
            background: 'goraBlur.png',
            title: 'Zajęcia grupowe',
        },

        zawartosc: {
            description: 'Zajęcia grupowe prowadzone przez trenera. Aby brać w nich udział wymagany jest dostęp do sali CROSS.',
            zajecia: [
                {
                    title: 'Crossfit',
                    description: 'Trening, który charakteryzuje się wszechstronnością ćwiczeń z różnych dyscyplin sportowych takich jak: gimnastyka, podnoszenie ciężarów, boks, lekkoatletka. Na treningu kształtujemy wszystkie cechy motoryczne, poprawiamy wzorce ruchowe, mobilizujemy, aktywizujemy mięśnie, oraz poprawiamy wydolność sercowo naczyniową organizmu. Treningi prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.',
                    imgSrc: 'crossfit.png',
                    kalendaz: "https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&mode=WEEK&src=azJsbjN0Z3B0cTZrNmFubXY2amZrczNzbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D50000"
                },
                // {
                //     title: 'Fitness',
                //     description: 'Zajęcia Fitness dla kobiet i nie tylko',
                //     imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
                // },
            ]
        }
    },
    kontakt: [
        {
            nazwa: 'Email',
            opis: ['sportstudioparys@gmail.com'],
            icon: IconMail
        },
        {
            nazwa: 'Telefon',
            opis: ['77 433 63 01'],
            icon: IconPhone
        },
        {
            nazwa: 'Adres',
            opis: ['Poniatowskiego 3 Nysa'],
            icon: IconLocation
        },
        {
            nazwa: 'Godziny otwarcia recepcji',
            opis: ['pon - pt: 9:00 - 21:00', 'sob: 9:00- 14:00'],
            icon: IconSun
        },
    ]
}