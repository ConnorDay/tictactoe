import { BaseValidationError } from "./base_validation";

export class InvalidAttributeError extends BaseValidationError{
    constructor(target: any, attribute: string, expected_value: string, found_value: string) {
        super(target, `Attribute '${attribute}' has type '${found_value}', but was expecting type '${expected_value}`);
    }
}