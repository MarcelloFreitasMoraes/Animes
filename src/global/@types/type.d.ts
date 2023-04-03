export interface HomeProps {
    sort?: string
    limit?: any
    icon?: jsx.element
    title?: any
    text?: any
    meta?: any
    count?: any
    categoryes?: any
}

export interface DataProps {
    attributes: Array<string>
    posterImage: Array<string>
    original: string
    slug: string
}