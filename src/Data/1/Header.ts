import { FitureI, HeaderI } from "@/src/interface/1/Header"
import { IconClockShield, IconBarbell, IconSquare, IconAirConditioning, IconHeartHandshake, IconParking } from "@tabler/icons-react";
import { CSSProperties } from "react"

export const header: HeaderI = {
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
        },
        {
            title: 'Parking',
            description: 'Darmowy parking dla samochodów osobowych i rowerów',
            icon: IconParking

        }
    ]
}

export const fiture: FitureI = {
    title: "",
    description: "",
    icon: function ({ style, className }: { style?: CSSProperties | undefined; className?: string | undefined }): JSX.Element {
        throw new Error("Function not implemented.")
    }
}
