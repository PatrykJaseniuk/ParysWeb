import { Icon } from "./Icon"

export interface CenaI {
    imgSrc?: string | undefined
    nazwa: string
    cena: string
    wlasciwosci: { icon: Icon, text: string }[]
}