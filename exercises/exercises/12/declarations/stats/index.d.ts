declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    type IndexMapper<T> = (value: T) => number;
    type ValueExtractor<T> = (item: T) => number;

    export function getMaxIndex<T>(arr: T[], comparator: Comparator<T>): number;
    export function getMaxElement<T>(arr: T[], comparator: Comparator<T>): T | null;

    export function getMinIndex<T>(arr: T[], comparator: Comparator<T>): number;
    export function getMinElement<T>(arr: T[], comparator: Comparator<T>): T | null;

    export function getMedianIndex<T>(arr: T[], comparator: Comparator<T>): number;
    export function getMedianElement<T>(arr: T[], comparator: Comparator<T>): T | null;

    export function getAverageValue<T>(arr: T[], valueExtractor: ValueExtractor<T>): number;
}