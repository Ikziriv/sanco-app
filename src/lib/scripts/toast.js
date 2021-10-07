import { writable } from 'svelte/store';

// Custom Store
const newToast = () => {
    const { subscribe, update } = writable([]);

    function send(message) {
        update((store) => [...store, message]);
    }

    function remove() {
        update((store) => {
            let [first, ...rest] = store;
            return [...rest];
        });
    }

    return { subscribe, send, remove };
};

export const toast = newToast();
