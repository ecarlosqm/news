import { StringValueObject } from '../../core/domain/string_value_object';

export class UserAuthId extends StringValueObject{
    constructor(value:string){
        super(value);
    }
}