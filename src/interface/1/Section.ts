
export type SectionBaseI = {
    background: string,
    title: string,
}

export type SectionI<T> = {
    section: SectionBaseI,
    content: T
}