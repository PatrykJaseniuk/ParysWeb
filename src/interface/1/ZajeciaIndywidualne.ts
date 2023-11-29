import { CenaI as CenaI } from "../2/Cena"

export interface ZajeciaIndywidualneI {
    description: string,
    cennik: CenaI[],
    trenerzy: TrenerI[]
}

export interface TrenerI {
    name: string,
    description: string,
    imgSrc: string
}
