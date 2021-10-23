import { appSettings } from './appSettings'
import { addMessages, dictionary, getLocaleFromNavigator, init, _, getDateFormatter } from 'svelte-i18n'
import { derived, get, writable } from 'svelte/store'
import type { LocaleOptions } from './typings/i18n'

const MESSAGE_FILE_URL_TEMPLATE = 'lang/{locale}.json'

// Locales our app supports
export const locales = {
    en: 'English',
    id: 'Indonesian',
}

// Init options: eg locale to show when we don't support the
// requested locale
const INIT_OPTIONS: LocaleOptions = {
    fallbackLocale: 'en',
    initialLocale: null,
    loadingDelay: 200,
    formats: {},
    warnOnMissingMessages: true,
}

// Internal store for tracking network
// loading state
const isDownloading = writable(false)

const setupI18n = (options: LocaleOptions = { fallbackLocale: 'en', initialLocale: null }): Promise<unknown> => {
    // If we're given an explicit locale, we use
    // it. Otherwise, we attempt to auto-detect
    // the user's locale.
    const _locale = supported(options.initialLocale || reduceLocale(getLocaleFromNavigator() || 'en'))

    init({ ...INIT_OPTIONS, initialLocale: _locale } as LocaleOptions)

    // Don't re-download translation files
    if (!hasLoadedLocale(_locale)) {
        const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', _locale)
        // Download translation file for given locale/language
        return loadJson(messagesFileUrl).then((messages) => {
            addMessages(_locale, messages)
            appSettings.set({
                ...get(appSettings),
                language: _locale,
            })
            isDownloading.set(false)

            // If we have not loaded "en" make sure we have it as a backup language
            // in case the chosen language does not have all the translations
            if (_locale !== 'en' && !hasLoadedLocale('en')) {
                const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', 'en')
                void loadJson(messagesFileUrl).then((messages) => {
                    addMessages('en', messages)
                })
            }
        })
    }
}

const isLocaleLoaded = derived(
    [isDownloading, dictionary, appSettings],
    ([$isDownloading, $dictionary, $appSettings]) =>
        !$isDownloading &&
        $dictionary[$appSettings.language] &&
        Object.keys($dictionary[$appSettings.language]).length > 0
)

const hasLoadedLocale = (locale: string) =>
    // If the svelte-i18n dictionary has an entry for the
    // locale, then the locale has already been added
    get(dictionary)[locale]

// Extract the "en" bit from fully qualified
// locales, like "en-US"
function reduceLocale(locale) {
    return locale.replace('_', '-').split('-')[0]
}

// Check to see if the given locale is supported
// by our app. If it isn't, return our app's
// configured fallback locale.
function supported(locale) {
    if (Object.keys(locales).includes(locale)) {
        return locale
    } else {
        return INIT_OPTIONS.fallbackLocale
    }
}

function loadJson(url) {
    return fetch(url).then((response) => response.json())
}

const dir = derived(
    appSettings,
    (_appSettings) =>
        // TODO: Implement RTL support
        // return appSettings.language === 'ar' ? 'rtl' : 'ltr'
        'ltr'
)

const setLanguage = (item: { value: any }): void => {
    const locale = Object.keys(locales).find((key) => locales[key] === item.value)
    appSettings.set({
        ...get(appSettings),
        language: locale,
    })

    void setupI18n({ fallbackLocale: 'en', initialLocale: locale })
}

const localize = get(_) as (string, values?) => string

/**
 * @param date
 * @param format
 * @returns Formatted date
 */
const formatDate = (date: Date, options: Intl.DateTimeFormatOptions & { format?: string; locale?: string }): string =>
    getDateFormatter({ locale: getLocaleFromNavigator(), ...options }).format(date)

// We expose the svelte-i18n _ store so that our app has
// a single API for i18n
export { _, setupI18n, dir, isLocaleLoaded, localize, setLanguage, formatDate }