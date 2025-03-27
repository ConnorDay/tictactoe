type callback = (...args: any[]) => any;

export class CallbackNotDefined extends Error{}

export class EventManager <events extends string> {
    private _callbacks: {[key in events]?: callback[]} = {};

    public on( event: events, callback: callback) {
        if (this._callbacks[event] === undefined) {
            this._callbacks[event] = [];
        }
        this._callbacks[event].push(callback);
    }
    public off( event: events, callback: callback) {
        if (this._callbacks[event] === undefined){
            throw new CallbackNotDefined();
        }
        this._callbacks[event] = this._callbacks[event].filter( (cb) => cb !== callback );
    }
    public clearAll( event: events ) {
        this._callbacks[event] = [];
    }

    public emit( event: events, ...args: any[] ) {
        return this._callbacks[event]?.map( (cb) => cb(...args));
    }
}