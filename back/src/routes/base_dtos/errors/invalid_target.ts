import { BaseValidationError } from "./base_validation";

export class InvalidTargetError extends BaseValidationError {
    constructor(target: any) {
        super(target, `Unexpected target for JSON validation: '${target}'`)
    }
}