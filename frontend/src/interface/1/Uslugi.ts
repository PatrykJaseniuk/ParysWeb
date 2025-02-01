import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";
import { CennikI } from "../2/Cennik";
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
    dostepneZajeciaGrupowe: ZajecieGrupoweI[],
    cennik: CennikI,
}


export interface UslugaI {
    title: string,
    description: string,
    videoSrc: string,
    cennik?: CennikI
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


