import { BaseValidationError } from "./base_validation";

export class MissingAttributeError extends BaseValidationError {
    constructor(target: any, attribute: string){
        super(target, `Missing the '${attribute}' attribute`)
    }
}