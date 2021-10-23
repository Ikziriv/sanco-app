/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module 'svelte-swipe';
declare module 'svelte-pdf';
declare module 'svelte-click-outside';
declare module 'svelte-awesome';
declare module 'cookie';
declare module 'js-cookie';

declare module '@tailwindcss/typography';
declare module '@tailwindcss/forms';
declare module '@tailwindcss/line-clamp';
//#region Ensure image file endings have a type for TypeScript
/**
 * These declarations tell TypeScript that we allow import of images, e.g.
 * ```
        <script lang='ts'>
            import successkid from 'images/successkid.jpg';
        </script>
        <img src="{successkid}">
     ```
 */
declare module '*.gif' {
    const value: string;
    export = value;
}

declare module '*.jpg' {
    const value: string;
    export = value;
}

declare module '*.jpeg' {
    const value: string;
    export = value;
}

declare module '*.png' {
    const value: string;
    export = value;
}

declare module '*.svg' {
    const value: string;
    export = value;
}

declare module '*.webp' {
    const value: string;
    export = value;
}
//#endregion

interface Locals {
    userid: string;
}

interface ImportMetaEnv {
    SVELTEKIT_STARTER_BASE_URL: string;
    SVELTEKIT_STARTER_CHUCK_NORRIS_API_URL: string;
    SVELTEKIT_STARTER_CHUCK_NORRIS_API_LANG: string;
    SVELTEKIT_STARTER_SESSION_KEY: string;
    SVELTEKIT_STARTER_TWITTER_API_KEY: string;
    SVELTEKIT_STARTER_TWITTER_TWEETS_ENDPOINT: string;
    SVELTEKIT_STARTER_TWITTER_SEARCH_URL: string;
    SVELTEKIT_STARTER_GITHUB_API_URL: string;
}