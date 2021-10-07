
export const config = {
    baseUrl: import.meta.env.VITE_BASE_URL
}
// SEO Base URL
export const siteBase = {
    title: 'Sanco Indonesia',
    description: 'We provide innovative product solutions for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.',
    keywords: 'iot, innovative, solutions, manufacture, hms',
    canonical: import.meta.env ? import.meta.env.VITE_SITE_URL : 'https://www.example.com'
};
// Open Graph
export const siteGraph = {
    title: 'Sanco Indonesia',
    description: 'We provide innovative product solutions for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.',
    url: import.meta.env ? import.meta.env.VITE_SITE_URL : '',
    type: 'website',
    images: [
        {
            url: './img/sanco-logo.png',
            width: 850,
            height: 650,
            alt: 'Solution for your IOT industries'
        }
    ]
};
// Open Graph for Article
export const siteArticle = {
    type: 'article',
    article: {
        publishedTime: "2020-08-03T17:31:37Z",
        modifiedTime: "2020-08-20T09:31:37Z",
        expirationTime: "2025-12-21T17:31:37Z",
        section: "Section II",
        authors: [
            "https://www.example.com/authors/@firstnameA-lastnameA",
            "https://www.example.com/authors/@firstnameB-lastnameB",
        ],
        tags: ["Tag A", "Tag B", "Tag C"],
    }
}
// SEO Twitter for Article
export const siteTwitter = {
    site: "@sanco.coid",
    title: "PT Sanco Indonesia",
    description: "We provide innovative product solutions for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.",
    image: "https://www.example.com/images/cover.jpg",
    imageAlt: "Alt text for the card!",
}