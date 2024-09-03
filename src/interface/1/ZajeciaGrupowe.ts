import { Url } from "next/dist/shared/lib/router/router"

export interface ZajeciaGrupoweI {
    kalendarzUrl: KalendarzI
    description: string,
    zajecia: ZajecieI[]
}

export interface ZajecieI {
    title: string,
    description: string,
    imgSrc: string,
    videoSrc: string
    kalendazUrl?: KalendarzI,
}

export type KalendarzI = string

type url = `https://${string}` | `http://${string}`