import { SiteI } from "@/src/interface/0top/Site";
import { header } from "../1/Header";
import { kontakt } from "../1/Kontakt";
import { sekcjaUslugi, sekcjaZajeciaGrupowe, sekcjaZajeciaIndywidulane } from "../1/Section";
import { sekcjaAktualnosciFacebook } from "../1/SekcjaAktualnosci";


export const site: SiteI = {
    header: { content: header, nazwa: '' },
    uslugi: { content: sekcjaUslugi, nazwa: 'Oferta' },
    zajeciaGrupowe: { content: sekcjaZajeciaGrupowe, nazwa: 'Zajecia Grupowe' },
    zajeciaIndywidualne: { content: sekcjaZajeciaIndywidulane, nazwa: 'Zajecia Personalne' },
    // aktualnosci: { content: sekcjaAktualnosciFacebook, nazwa: 'Aktualności' },
    kontakt: { content: kontakt, nazwa: 'Kontakt' },
}