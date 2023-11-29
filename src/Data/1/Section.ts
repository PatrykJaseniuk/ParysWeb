import { SectionI } from "@/src/interface/1/Section";
import { uslugi } from "./Uslugi";
import { ZajeciaIndywidualneI } from "@/src/interface/1/ZajeciaIndywidualne";
import { zajeciaIndywidualne } from "./ZajeciaIndywidualne";
import { ZajeciaGrupoweI } from "@/src/interface/1/ZajeciaGrupowe";
import { zajeciaGrupowe } from "./ZajeciaGrupowe";
import { UslugiI } from "@/src/interface/1/Uslugi";

export const sekcjaUslugi: SectionI<UslugiI> = {
    section: {
        background: "",
        title: "Usługi"
    },
    content: uslugi
}

export const sekcjaZajeciaIndywidulane: SectionI<ZajeciaIndywidualneI> = {
    section: {
        background: "",
        title: "Zajęcia Indywidualne"
    },
    content: zajeciaIndywidualne
}

export const sekcjaZajeciaGrupowe: SectionI<ZajeciaGrupoweI> = {
    section: {
        background: "",
        title: "Zajęcia grupowe"
    },
    content: zajeciaGrupowe
}
