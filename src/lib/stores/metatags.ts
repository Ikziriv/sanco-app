import { Writable, writable } from 'svelte/store'

type Metatags = {
    title: string,
    description: string,
    type: string,
    image: string,
    alt: string,
    'twitter:title': string,
    "twitter:description": string,
    "twitter:card": string,
    "twitter:image": string,
    "twitter:image:alt": string,
    "og:title": string,
    "og:description": string,
    "og:type": string,
    "og:image": string,
    "og:image:alt": string,
    "og:url": string

}

const initialTags: Metatags = {
    title: 'PT Sanco Indonesia',
    description: 'We provide innovative product solutions for sustainable progress our professional team works to increase productivity and cost effectiveness on the market.',
    type: 'website',
    image: 'https://raw.githubusercontent.com/svelte-society/sveltesociety.dev/main/src/routes/metatag.png',
    alt: 'sanco.co.id',
    "twitter:title": 'Sanco Indonesia IOT',
    "twitter:description": 'We provide innovative product solutions for sustainable progress our professional team works to increase productivity and cost effectiveness on the market.',
    "twitter:card": 'summary_large_image',
    "twitter:image": 'https://raw.githubusercontent.com/svelte-society/sveltesociety.dev/main/src/routes/metatag.png',
    "twitter:image:alt": 'sanco.co.id',
    "og:title": 'Sanco Indonesia IOT',
    "og:description": 'We provide innovative product solutions for sustainable progress our professional team works to increase productivity and cost effectiveness on the market.',
    "og:type": 'website',
    "og:image": 'https://raw.githubusercontent.com/svelte-society/sveltesociety.dev/main/src/routes/metatag.png',
    "og:image:alt": 'sanco.co.id',
    "og:url": 'https://sanco.co.id/'
}

type MetaTagsStore = {
    subscribe: Writable<Metatags>["subscribe"],
    set: Writable<Metatags>["set"],
    title: (title: string) => void,
    desc: (desc: string) => void,
    image: (image: string) => void,
    alt: (alt: string) => void,
    url: (url: string) => void
}

function CreateMetatagsStore(): MetaTagsStore {
    const { subscribe, set, update } = writable(initialTags)

    const title = (title) => update(curr => ({ ...curr, title: title, "og:title": title, 'twitter:title': title }))
    const desc = (desc) => update(curr => ({ ...curr, description: desc, "og:description": desc, 'twitter:description': desc }))
    const image = (image) => update(curr => ({ ...curr, image: image, "og:image": image, 'twitter:image': image }))
    const alt = (alt) => update(curr => ({ ...curr, alt: alt, "og:image:alt": alt, "twitter:image:alt": alt }))
    const url = (url) => update(curr => ({ ...curr, "og:url": url }))


    return {
        subscribe,
        set,
        url,
        title,
        desc,
        image,
        alt
    }

}

const store: MetaTagsStore = CreateMetatagsStore()

export default store;