import { StringValueObject } from '../../core/domain/string_value_object';

export class Password extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}