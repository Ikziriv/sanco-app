
import { get, derived, writable } from "svelte/store";
import {
    _,
    date,
    init,
    locale,
    number,
    dictionary,
    addMessages,
    getLocaleFromNavigator,
} from "svelte-i18n";
import { locales, fallbackLocale } from "./l10n";

const MESSAGE_FILE_URL_TEMPLATE = "../../../static/lang/{locale}.json";
let _activeLocale;
const isDownloading = writable(false);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function setupI18n(options = {}) {
    try {
        const locale_ = supported(
            options.withLocale ||
            language(getLocaleFromNavigator()),
        );

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        init({ initialLocale: locale_ });

        if (!hasLoadedLocale(locale_)) {
            isDownloading.set(true);

            const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
                "{locale}",
                locale_,
            );

            const messages = await loadJson(messagesFileUrl);
            _activeLocale = locale_;
            addMessages(locale_, messages);
            locale.set(locale_);
            isDownloading.set(false);

            return messages
        }
    } catch (err) {
        // catches errors both in fetch and response.json
        console.log(err);
    }
}


const isLocaleLoaded = derived(
    [isDownloading, dictionary],
    ([$isDownloading, $dictionary]) =>
        !$isDownloading &&
        $dictionary[_activeLocale] &&
        Object.keys($dictionary[_activeLocale]).length > 0,
);

const dir = derived(locale, ($locale) =>
    $locale === "ar" ? "rtl" : "ltr",
);

/**
 * @param {RequestInfo} url
 */
async function loadJson(url) {
    const response = await fetch(url);
    return await response.json();
}

/**
 * @param {string | number} locale
 */
function hasLoadedLocale(locale) {
    return get(dictionary)[locale];
}

/**
 * @param {string} locale
 */
function language(locale) {
    return locale;
}

/**
 * @param {string} locale
 */
function supported(locale) {
    if (Object.keys(locales).includes(locale)) {
        return locale;
    } else {
        return fallbackLocale;
    }
}


export {
    _,
    setupI18n,
    isLocaleLoaded,
    locale,
    dir,
    date,
    number,
};