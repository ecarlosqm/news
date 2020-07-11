import { Category } from './category';

export class Categories {

    private static _categories:Category[] = [
        {code:"business", name: "Negocios"},
        {code:"entertainment", name: "Entretenimiento"},
        {code:"general", name: "General"},
        {code:"health", name: "Salud"},
        {code:"science", name: "Ciencia"},
        {code:"sports", name: "Deportes"},
        {code:"technology", name: "Tecnologia"},
    ]

    constructor() {}

    static isAValidCategory(categoryCode:string){
        return this._categories.some((element)=> element.code == categoryCode);
    }

    static get values():Category[]{
        return Array.from(this._categories);
    }
}


