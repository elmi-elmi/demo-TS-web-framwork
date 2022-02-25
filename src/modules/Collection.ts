import {User, UserProps} from "./User";
import {Eventing} from "./Eventing";
import axios, {AxiosResponse} from "axios";
import {Attributes} from "./Attributes";

export class Collection<T, K>{
    models:T[] = [];
    events:Eventing = new Eventing();

    constructor(public rootUrl:string,
                public deserialize:(json:K)=>T) {
    }

    fetch():void{
        axios.get(this.rootUrl).then((res:AxiosResponse)=>{
            res.data.forEach((value:K)=>{
                const user:T = this.deserialize(value);
                this.models.push(user)
            })
            this.trigger('change')
        })
    }
    get on(){
        return this.events.on
    }

    get trigger(){
        return this.events.trigger
    }

}