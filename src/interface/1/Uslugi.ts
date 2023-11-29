import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";
import { CenaI as CenaI } from "../2/Cena";
import { ZajecieI as ZajecieGrupoweI } from "./ZajeciaGrupowe";

export interface UslugiI {
    silownia: SilowniaI,
    uslugiStandardowe: UslugaI[]
}
export interface SilowniaI {
    title: string,
    opis: string
    wszystkieStrefy: StrefaI[]
    wszystkieZajeciaGrupowe: ZajecieGrupoweI[]
    // typyKarnetów: TypyKarnetow,
    karnety: KarnetI[]
}

export type KarnetI = {
    nazwa: string
    dostepneStrefy: StrefaI[],
    czyDostepneZajeciaGrupowe: boolean
    cennik: CenaI[],
}


export interface UslugaI {
    title: string,
    description: string,
    videoSrc: string,
    cennik: CenaI[]
}

export interface GrupaStref {
    nazwa: string,
    opis: string,
    Strefy: StrefaI[],
    cena: number
}

export interface StrefaI {
    nazwa: string;
    opis: string;
    media: {
        video: string;
        thumbnail: string;
    };
}

// export type TypyKarnetow = {
//     okresowy: Wariant[],
//     wejsciowy: Wariant[],
// }

// export type Wariant = {
//     nazwa: string,
//     mnoznikCeny: number,
//     waznyPrzez: string,
//     iloscDostepnychWizyt: string
// }



