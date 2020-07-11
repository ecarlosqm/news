import { Countries } from "../../core/domain/countries";
import { Categories } from '../../core/domain/categories';


export class NewsSourceSearchCriteria {
    constructor(
        public readonly countryCode: string,
        public readonly category: string,
        public readonly page?: number,
        public readonly pageSize?: number,
    ) {
        this.assertContryCodeIsValid(countryCode);
        this.assertCategoryIsValid(category);
    }

    assertContryCodeIsValid(countryCode: string):void {
        if (!Countries.isAValidCountryCode(countryCode)) {
            throw new Error("The country code is not valid");
        }
    }

    assertCategoryIsValid(category: string):void {
        if (!Categories.isAValidCategory(category)) {
            throw new Error("The category is not valid");
        }
    }
}