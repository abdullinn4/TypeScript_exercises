declare module 'str-utils' {
    type StringDecorator = (input: string) => string;

    export const strReverse: StringDecorator;
    export const strToLower: StringDecorator;
    export const strToUpper: StringDecorator;
    export const strRandomize: StringDecorator;
    export const strInvertCase: StringDecorator;
}