import { CennikI } from "../2/Cennik"

export interface ZajeciaIndywidualneI {
    description: string,
    cennik: CennikI,
    trenerzy: TrenerI[]
}

export interface TrenerI {
    name: string,
    description: string,
    imgSrc: string
}
