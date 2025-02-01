import { Icon } from "../2/Icon"

export interface HeaderI {
    motto: string,
    feature: FitureI[]
}

export interface FitureI {
    title: string,
    description: string,
    icon: Icon,
    imgSrc?: string
}
