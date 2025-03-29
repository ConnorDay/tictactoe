export abstract class BaseValidationError extends Error{
    public target: any;
    constructor(target: any, message?: string){
        super(message);
        this.target = target;
    }
}
