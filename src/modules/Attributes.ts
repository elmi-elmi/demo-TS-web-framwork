export class Attributes<T> {
    constructor(public data: T) {
    }

    get = <K extends keyof T>(key: K): T[K] =>{
        console.log('attributes',this.data[key],key,this.data)
        console.log(key)
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
