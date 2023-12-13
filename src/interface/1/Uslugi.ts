import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";
import { CenaI as CenaI } from "../2/Cena";
import { ZajecieI as ZajecieGrupoweI } from "./ZajeciaGrupowe";
import { Url } from "url";

export interface UslugiI {
    silownia: SilowniaI,
    uslugiStandardowe: UslugaI[]
}
export interface SilowniaI {
    title: string,
    opis: string
    wszystkieStrefy: StrefaI[]
    wszystkieZajeciaGrupowe: ZajecieGrupoweI[]
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
    kalendarz?: string
}


export interface StrefaI {
    nazwa: string;
    opis: string;
    media: {
        video: string;
        thumbnail: string;
    };
    kalendarz?: string;
}


