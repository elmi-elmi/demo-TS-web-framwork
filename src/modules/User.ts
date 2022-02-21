interface UserProps {
    name?: string;
    age?: number;
}

type Callback = ()=>void;
export class User {

    events:{[key:string]:Callback[]} = {};

    constructor(private data: UserProps) {
    }
    get(propName:string): string|number|undefined{
        return this.data[propName as keyof UserProps ]
    }

    set(update:UserProps):void{
        // this.data = update
        Object.assign(this.data, update);
    }

    on(eventName:string, callback:Callback):void{
        const handler = this.events[eventName] || [];
        handler.push(callback);
        this.events[eventName] = handler;
    }


    trigger(eventName:string):void{
        const handlers = this.events[eventName];

        if(!handlers|| (handlers.length === 0)) return;


        handlers.forEach(callback=>callback())
    }
}

