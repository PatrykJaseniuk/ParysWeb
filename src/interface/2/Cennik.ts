import { Icon } from "./Icon"

interface CenaI {
    imgSrc?: string | undefined
    nazwa: string
    cena: string
    wlasciwosci: { icon: Icon, text: string }[]
}

export type CennikI = {
    wlasciwosciWspolne: { icon: Icon, text: string }[],
    ceny: CenaI[]
}