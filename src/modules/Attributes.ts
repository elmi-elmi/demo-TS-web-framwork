export class Attributes<T> {
    constructor(public data: T) {
    }

    get = <K extends keyof T>(key: K): T[K] =>{
        return this.data[key];
        // return this.data[propName as keyof UserProps];
    }

    set(update: T): void {
        // this.data = update
        Object.assign(this.data, update);
    }

    getAll=():T=>{
        console.log(this.data)
        return this.data
    }
}
