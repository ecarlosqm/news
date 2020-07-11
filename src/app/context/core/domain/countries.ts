import { Country } from './country';

export class Countries {

    private static _countries:Country[] = [
        { code: "ae", name: "United Arab Emirates (the)", },
        { code: "ar", name: "Argentina", },
        { code: "at", name: "Austria", },
        { code: "au", name: "Australia", },
        { code: "be", name: "Belgium", },
        { code: "bg", name: "Bulgaria", },
        { code: "br", name: "Brazil", },
        { code: "ca", name: "Canada", },
        { code: "ch", name: "Switzerland", },
        { code: "cn", name: "China", },
        { code: "co", name: "Colombia", },
        { code: "cu", name: "Cuba", },
        { code: "cz", name: "Czechia", },
        { code: "de", name: "Germany", },
        { code: "eg", name: "Egypt", },
        { code: "fr", name: "France", },
        { code: "gb", name: "United Kingdom of Great Britain", },
        { code: "gr", name: "Greece", },
        { code: "hk", name: "Hong Kong", },
        { code: "hu", name: "Hungary", },
        { code: "id", name: "Indonesia", },
        { code: "ie", name: "Ireland", },
        { code: "il", name: "Israel", },
        { code: "in", name: "India", },
        { code: "it", name: "Italy", },
        { code: "jp", name: "Japan", },
        { code: "kr", name: "Korea (the Republic of)", },
        { code: "lt", name: "Lithuania", },
        { code: "lv", name: "Latvia", },
        { code: "ma", name: "Morocco", },
        { code: "mx", name: "Mexico", },
        { code: "my", name: "Malaysia", },
        { code: "ng", name: "Nigeria", },
        { code: "nl", name: "Netherlands (the)", },
        { code: "no", name: "Norway", },
        { code: "nz", name: "New Zealand", },
        { code: "ph", name: "Philippines (the)", },
        { code: "pl", name: "Poland", },
        { code: "pt", name: "Portugal", },
        { code: "ro", name: "Romania", },
        { code: "rs", name: "Serbia", },
        { code: "ru", name: "Russian Federation (the)", },
        { code: "sa", name: "Saudi Arabia", },
        { code: "se", name: "Sweden", },
        { code: "sg", name: "Singapore", },
        { code: "si", name: "Slovenia", },
        { code: "sk", name: "Slovakia", },
        { code: "th", name: "Thailand", },
        { code: "tr", name: "Turkey", },
        { code: "tw", name: "Taiwan", },
        { code: "ua", name: "Ukraine", },
        { code: "us", name: "United States of America (the)", },
        { code: "ve", name: "Venezuela (Bolivarian Republic of)", },
        { code: "za", name: "South Africa", },
    ]

    constructor() {}

    static isAValidCountryCode(countryCode:string){
        return this._countries.some((element)=> element.code == countryCode);
    }

    static get values():Country[]{
        return Array.from(this._countries);
    }
}