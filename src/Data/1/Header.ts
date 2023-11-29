import { FitureI, HeaderI } from "@/src/interface/1/Header"
import { CSSProperties } from "react"

export const header: HeaderI = {
    motto: "",
    feature: []
}

export const fiture: FitureI = {
    title: "",
    description: "",
    icon: function ({ style, className }: { style?: CSSProperties | undefined; className?: string | undefined }): JSX.Element {
        throw new Error("Function not implemented.")
    }
}
