import { Icon } from "../2/Icon";

export interface KontaktI {
    tytul: string,
    opcjeKontaktowe: OpcjaKontaktowaI[]
}

export type OpcjaKontaktowaI = {
    nazwa: string,
    opis: string[],
    icon: Icon,
}