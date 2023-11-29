import { SiteI } from "@/src/interface/0top/Site";
import { header } from "../1/Header";
import { kontakt } from "../1/Kontakt";
import { sekcjaUslugi, sekcjaZajeciaGrupowe, sekcjaZajeciaIndywidulane } from "../1/Section";


export const site: SiteI = {
    header: { content: header, nazwa: '' },
    uslugi: { content: sekcjaUslugi, nazwa: 'Uslugi' },
    zajeciaGrupowe: { content: sekcjaZajeciaGrupowe, nazwa: 'Zajecia Grupowe' },
    zajeciaIndywidualne: { content: sekcjaZajeciaIndywidulane, nazwa: 'Zajecia Indywidualne' },
    kontakt: { content: kontakt, nazwa: 'Kontakt' },
}