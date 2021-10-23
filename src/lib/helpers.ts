import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';
import { browser } from '$app/env'

/**
 * Update application path
 */
export const goto = (path: string): void => {
    window.location.hash = path
}

/**
 * Persist a writable Svelte store to local storage
 */
export const persistent = <T>(key: string, initValue: T): Writable<T> => {
    const store = writable(initValue);
    if (!browser) return store;

    try {
        const json = localStorage.getItem(key)
        if (json != null) {
            store.set(JSON.parse(json));
        }
    } catch (err) {
        console.error(err)
    }

    store.subscribe(($value): void => {
        if ([null, undefined].includes($value)) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify($value))
        }
    })

    window.addEventListener('storage', () => {
        const storedValueStr = localStorage.getItem(key);
        if (storedValueStr == null) return;

        const localValue: T = JSON.parse(storedValueStr)
        if (localValue !== get(store)) store.set(localValue);
    });

    return store
}

/**
 * Get the length of a string after it has been trimmed supporting emojis
 * @param name The string to get the length of
 * @returns
 */
export const getTrimmedLength = (name: string | undefined): number => {
    if (!name) {
        return 0
    }

    return name.trim().match(/./gu)?.length ?? 0
}

/**
 * Does the string contain invalid filename chars
 * @param name The name to validate
 * @returns
 */
export const validateFilenameChars = (name: string | undefined): string => {
    if (!name) {
        return
    }
    if (name.startsWith('~')) {
        return 'tilde'
    }
    /* eslint-disable no-control-regex */
    if (/[\u0000-\u001f\u0080-\u009f]/g.test(name)) {
        return 'control'
    }
    if (/^\.\./.test(name)) {
        return 'startDot'
    }
    if (/[<>:"/\\|?*]/g.test(name)) {
        return 'chars'
    }
}

/**
 * Extract initials from string
 */
export const getInitials = (name: string | undefined, maxChars: number): string => {
    if (!name || !name.trim()) {
        return ''
    }

    let initialsArray = name
        .trim()
        .split(' ')
        .filter((n) => n)
        .map((n) => n.match(/./gu)) // match characters for emoji compatibility
        .filter((n) => n)
        .map((n) => n[0])

    if (maxChars) {
        initialsArray = initialsArray.slice(0, maxChars)
    }

    return initialsArray.join('').toUpperCase()
}

/**
 * Truncate strings
 *
 * @param str: String which has to be truncated
 * @param firstCharCount: Number of characters which has to be shown as first portion. Default = 5
 * @param endCharCount: Number of characters which has to be shown at end portion. Default = 5
 * @param dotCount: Count of dots in between first and end portion. Default = 3
 */

export const truncateString = (
    str: string = '',
    firstCharCount: number = 5,
    endCharCount: number = 5,
    dotCount: number = 3
): string => {
    const MAX_LENGTH = 13
    if (!str || str.length <= MAX_LENGTH) {
        return str
    }
    let convertedStr = ''
    convertedStr += str.substring(0, firstCharCount)
    convertedStr += '.'.repeat(dotCount)
    convertedStr += str.substring(str.length - endCharCount, str.length)
    return convertedStr
}

/**
 * Get if a date is considered "recent". Less than 1 month is considered recent.
 * @param date: date to know if recent or not, compared to today. Must be in the past.
 */
export const isRecentDate = (date: Date): { lessThanAMonth; lessThanThreeMonths } => {
    if (!(date instanceof Date)) {
        return null
    }
    const diff = Math.floor(new Date().getTime() - date.getTime())
    const day = 1000 * 60 * 60 * 24
    const days = Math.floor(diff / day)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(weeks / 4.33)
    const threeMonths = Math.floor(months / 3)

    return { lessThanAMonth: months == 0, lessThanThreeMonths: threeMonths == 0 }
}

/**
 * Returns warning text color for last Stronghold backup
 * @param lastBackupDate: Blue if less than a month. Orange if less than three months. Red if more.
 */
export const getBackupWarningColor = (lastBackupDate: Date): string => {
    if (!(lastBackupDate instanceof Date)) {
        return 'red'
    }
    const { lessThanAMonth, lessThanThreeMonths } = isRecentDate(lastBackupDate)

    return lessThanAMonth ? 'blue' : lessThanThreeMonths ? 'yellow' : 'orange'
}

/**
 * Convert HEX color to RGBA
 * @param hexCode: hex color to convert
 * @param opacity: [0,100], default = 100
 */
export const convertHexToRGBA = (hexCode: string, opacity: number = 100): string => {
    let hex = hexCode.replace('#', '')

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r},${g},${b},${opacity / 100})`
}

/**
 * Strip trailing slashes from the text
 * @param str The text to strip the values from
 * @returns The stripped text
 */
export const stripTrailingSlash = (str: string): string => (str ? str.replace(/\/+$/, '') : '')

/**
 * Strip spaces from the text
 * @param str The text to strip the values from
 * @returns The stripped text
 */
export const stripSpaces = (str: string): string => (str ? str.replace(/ /g, '') : '')

/**
 * Create a deep copy of an object
 * @param obj The object to copy
 * @returns The copied object
 */
export function deepCopy(obj: unknown): unknown {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime())
    }

    if (obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepCopy(item)
            return arr
        }, [])
    }

    if (obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, key) => {
            newObj[key] = deepCopy(obj[key])
            return newObj
        }, {})
    }
}