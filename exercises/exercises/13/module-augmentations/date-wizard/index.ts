// This enables module augmentation mode.
import { DateDetails } from 'date-wizard';

declare module 'date-wizard' {
    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }

    export function pad(value: number): string;
}