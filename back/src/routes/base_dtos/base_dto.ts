import { InvalidAttributeError } from "./errors/invalid_attribute";
import { InvalidTargetError } from "./errors/invalid_target";
import { MissingAttributeError } from "./errors/missing_attribute";

type TypeOfResults = "string" | "number" | "boolean";

export interface Attribute{
    key: string;
    required?: boolean;
    type: TypeOfResults | Attribute[];
    is_array?: boolean;
}

export function ValidateObject( attributes: Attribute[], target: any ){
    if (typeof target !== "object") {
        throw new InvalidTargetError(target);
    }
    attributes.forEach( attribute => {
        if (target[attribute.key] === undefined && attribute.required) {
            throw new MissingAttributeError(target, attribute.key);
        }
        const target_type = typeof target[attribute.key];
        if ( target_type === "object" ){
            if (Array.isArray(target[attribute.key]) !== !!attribute.is_array) {
                throw new InvalidAttributeError(target, attribute.key, "array", target_type);
            } else {
                return;
            }
        }
    });
}

export function ValidateArray( attributes: Attribute[], target: any[] ){

}