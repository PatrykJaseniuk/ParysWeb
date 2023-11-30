import { KontaktI } from "@/src/interface/1/Kontakt";
import { IconLocation, IconMail, IconPhone, IconSun } from "@tabler/icons-react";
import { CSSProperties } from "react";

export const kontakt: KontaktI = {
    tytul: "Kontakt",
    opcjeKontaktowe: [
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
