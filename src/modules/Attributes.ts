import {UserProps} from "./User";

export class Attributes<T>{
    constructor(private data:T){}
    get<K extends keyof T>(key: K): T[K]{
        return this.data[key];
        // return this.data[propName as keyof UserProps];
    }

    set(update: T): void {
        // this.data = update
        Object.assign(this.data, update);
    }
}


const att = new Attributes<UserProps>({id:1,name:'shah',age:29})
const a = att.get('id')