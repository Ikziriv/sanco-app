import { writable } from 'svelte/store';

// User/JWT-related
// https://stackoverflow.com/a/61300826/2933427
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createWritableStore = (key: string, startValue: any): any => {
    const { subscribe, set } = writable(startValue);

    return {
        subscribe,
        set,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }

            subscribe((current) => {
                localStorage.setItem(key, JSON.stringify(current));
            });
        },
    };
};

// JWT-related
export const aud = writable('UNKNOWN');
export const jwt = writable('UNKNOWN');
export const browser = writable('UNKNOWN');
export const ip = writable('UNKNOWN');
export const os = writable('UNKNOWN');

// JS on/off-related
export const js = writable(false);

// Data, Theme / Color
export const data = createWritableStore('data', { deepLinking: false, language: 'en', darkMode: false, notifications: true });
export const theme = createWritableStore('theme', { darkMode: false });
export const dark = writable(true);
export const user = createWritableStore('user', {});