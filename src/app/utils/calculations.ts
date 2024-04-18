import path from "path";

export class Calculator {

    static calculateRechnungen(x: number) {
        if (x >= 1 && x <= 5) {
            return x * 9.5 * 12;
        } else if (x >= 6 && x <= 10) {
            return x * 8.25 * 12;
        } else if (x >= 11 && x <= 20) {
            return x * 7.5 * 12;
        } else if (x >= 21 && x <= 30) {
            return x * 7 * 12;
        } else if (x >= 31 && x <= 50) {
            return x * 6.5 * 12;
        } else if (x >= 51 && x <= 75) {
            return x * 6 * 12;
        } else if (x >= 76 && x <= 100) {
            return x * 5 * 12;
        } else if (x > 100) {
            return x * 4 * 12;
        } 
    }

    static calculateMwst(text: any) {
        switch (text) {
            case 'Item 1':
                return 0;
            case 'Item 2':
                return 360;
            case 'Item 3':
                return 180;
            case 'Item 4':
                return 90;
        }
    }

    static calculateMitarbeiter(x: number) {
        if (x >= 1 && x <= 9) {
            return 348 * x;
        } else if (x >= 10 && x <= 19) {
            return 315 * x;
        } else if (x >= 20 && x <= 29) {
            return 300 * x;
        } else if (x >= 30) {
            return 270 * x;
        }
    }
}


export const pdfsDirectory: string = path.resolve('./public/pdfs');