import { ZajeciaIndywidualneI } from "@/src/interface/1/ZajeciaIndywidualne"


export const zajeciaIndywidualne: ZajeciaIndywidualneI = {
    description: "Zajęcia indywidualne z trenerem",
    cennik: {
        wlasciwosciWspolne: [],
        ceny: [
            {
                nazwa: 'godzinny terening', cena: '110 zł', wlasciwosci: [
                ]
            },

        ]
    },
    trenerzy: [
        {
            name: 'Krzysztof',
            description: 'Trener osobisty, właściciel',
            imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
        },
        {
            name: 'Łukasz',
            description: 'Trener osobisty',
            imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
        },
        {
            name: 'Rafał',
            description: 'Trener osobisty',
            imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
        },
        {
            name: 'Andrzej',
            description: 'Trener boksu',
            imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
        },
    ]
}
