interface UserProps {
    name?: string;
    age?: number;
}


export class User {
    constructor(private data: UserProps) {
    }
    get(propName:string): string|number|undefined{
        return this.data[propName as keyof UserProps ]
    }

    set(update:UserProps):void{
        // this.data = update
        Object.assign(this.data, update);
    }
}

