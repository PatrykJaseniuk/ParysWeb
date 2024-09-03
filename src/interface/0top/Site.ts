import { HeaderI } from "../1/Header";
import { KontaktI } from "../1/Kontakt";
import { SectionI } from "../1/Section";
import { UslugiI } from "../1/Uslugi";
import { ZajeciaGrupoweI } from "../1/ZajeciaGrupowe";
import { ZajeciaIndywidualneI } from "../1/ZajeciaIndywidualne";
import { AktualnosciFacebookI } from "../1/Aktualnosci";


type LinkableElement<T> = {
    nazwa: string,
    content: T
}

export interface SiteI {
    header: LinkableElement<HeaderI>,
    uslugi: LinkableElement<SectionI<UslugiI>>,
    zajeciaIndywidualne: LinkableElement<SectionI<ZajeciaIndywidualneI>>,
    zajeciaGrupowe: LinkableElement<SectionI<ZajeciaGrupoweI>>,
    aktualnosci: LinkableElement<SectionI<AktualnosciFacebookI>>
    kontakt: LinkableElement<KontaktI>,
    promocja?: PromocjaI
}