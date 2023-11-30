import { ZajeciaGrupoweI, ZajecieI } from "@/src/interface/1/ZajeciaGrupowe";



const crossFit: ZajecieI = {
    title: 'Cross trening',
    description: 'Trening, który charakteryzuje się wszechstronnością ćwiczeń z różnych dyscyplin sportowych takich jak: gimnastyka, podnoszenie ciężarów, boks, lekkoatletka. Na treningu kształtujemy wszystkie cechy motoryczne, poprawiamy wzorce ruchowe, mobilizujemy, aktywizujemy mięśnie, oraz poprawiamy wydolność sercowo-naczyniową organizmu. Treningi prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.',
    imgSrc: 'strefy/cross.png',
    kalendazUrl: "https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&mode=WEEK&src=azJsbjN0Z3B0cTZrNmFubXY2amZrczNzbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D50000",
    videoSrc: 'strefy/cross.mp4'
}


export const zajeciaGrupowe: ZajeciaGrupoweI = {
    description: "",
    zajecia: [
        crossFit
    ]
}