import { KontaktI } from "@/src/interface/1/Kontakt";
import { IconPhone } from "@tabler/icons-react";
import { CSSProperties } from "react";

export const kontakt: KontaktI = {
    tytul: "Kontakt",
    opcjeKontaktowe: [
        {
            nazwa: "Telefon",
            opis: ['77 433 63 01'],
            icon: IconPhone
        }
    ]
}
