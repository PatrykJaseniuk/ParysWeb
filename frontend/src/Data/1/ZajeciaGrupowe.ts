import { ZajeciaGrupoweI, ZajecieI } from "@/src/interface/1/ZajeciaGrupowe";

const kalendarzUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&bgcolor=%23ffffff&mode=WEEK&src=NDQ4Njk2NDc4MmQyYTdmMjNjZmZjOWQyNTc5ODY3NmMzN2JhZDM1YzAwZmZjN2Y2ZWZlNWRjZmU4NTQzZTgyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000";

export const crossFit: ZajecieI = {
    title: 'Cross trening',
    description: 'Trening, który charakteryzuje się wszechstronnością ćwiczeń z różnych dyscyplin sportowych takich jak: gimnastyka, podnoszenie ciężarów, boks, lekkoatletka. Na treningu kształtujemy wszystkie cechy motoryczne, poprawiamy wzorce ruchowe, mobilizujemy, aktywizujemy mięśnie, oraz poprawiamy wydolność sercowo-naczyniową organizmu. Treningi prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.',
    imgSrc: 'strefy/cross.png',
    kalendazUrl: kalendarzUrl,
    videoSrc: 'strefy/cross.mp4'
}



export const boks: ZajecieI = {
    title: "Boks",
    description: " Zajęcia bokserskie w naszej siłowni to świetna okazja, aby nauczyć się podstaw tego ekscytującego sportu walki. Poprowadzi je doświadczony trener, który wprowadzi uczestników w tajniki prawidłowej techniki uderzeń, defensywy i przemieszczania się po ringu. Zajęcia składają się z rozgrzewki, rozmaitych ćwiczeń technicznych, oraz sparingów w parach. Niezależnie od poziomu zaawansowania, każdy może wziąć udział i podnieść swoją kondycję fizyczną, siłę i koordynację. Zapraszamy wszystkich chętnych do dołączenia do naszej grupy bokserskiej!",
    imgSrc: "strefy/cross.png",
    videoSrc: "zajecia_grupowe/boks.mp4",
    kalendazUrl: kalendarzUrl,
}


export const zajeciaGrupowe: ZajeciaGrupoweI = {
    description: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&bgcolor=%23ffffff&mode=WEEK&src=NDQ4Njk2NDc4MmQyYTdmMjNjZmZjOWQyNTc5ODY3NmMzN2JhZDM1YzAwZmZjN2Y2ZWZlNWRjZmU4NTQzZTgyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000",
    zajecia: [
        crossFit,
        boks,
    ],
    kalendarzUrl: kalendarzUrl
}