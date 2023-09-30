import { Icon } from "@/Icons/Icon"
import { type } from "os"

export interface Site {
    header: HeaderDane,
    Uslugi: SectionDaneAnd<UslugiDane>,
    zajeciaIndywidualne: SectionDaneAnd<ZajeciaIndywidualneDane>,
    zajeciaGrupowe: SectionDaneAnd<ZajeciaGrupoweDane>,
    kontakt: KontaktDane[]
}

export interface SectionDane {
    background: string,
    title: string,
}

export interface SectionDaneAnd<T> {
    sekcja: SectionDane
    zawartosc: T
}

export interface HeaderDane {
    motto: string,
    feature: FitureDane[]
}

export interface UslugiDane {
    uslugi: UslugaDane[]
}

export interface ZajeciaIndywidualneDane {
    description: string,
    cennik: CenaDane[],
    trenerzy: TrenerDane[]
}

export interface ZajeciaGrupoweDane {
    description: string,
    zajecia: ZajecieDane[]
}


export interface KontaktDane {
    nazwa: string,
    opis: string[],
    icon: Icon,
}

export interface ZajecieDane {
    title: string,
    description: string,
    imgSrc: string,
    kalendaz: string,
}

export interface CenaDane {
    imgSrc?: string | undefined
    nazwa: string
    cena: string
    wlasciwosci: { icon: Icon, text: string }[]
}

export interface UslugaDane {
    title: string,
    description: string,
    videoSrc: string,
    cennik: CenaDane[]
}

export interface TrenerDane {
    name: string,
    description: string,
    imgSrc: string
}

export interface FitureDane {
    title: string,
    description: string,
    icon: Icon,
    imgSrc?: string
}






