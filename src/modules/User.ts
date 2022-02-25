// ------ Extracting a model class ------
import {Model} from "./Model";
import {Collection} from "./Collection";

import axios, {AxiosResponse} from "axios";
import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl: string = "http://localhost:3000/users";

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User{
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new Sync<UserProps>(rootUrl)
        );
    };

    static buildCollection():Collection<User, UserProps>{
        return new Collection<User, UserProps>(rootUrl,(json:UserProps)=>User.buildUser(json))
    }
}

// import axios, {AxiosResponse} from "axios";
// import {Eventing} from "./Eventing";
// import {Sync} from "./Sync";
// import {Attributes} from "./Attributes";
//
// export interface UserProps {
//     id?: number;
//     name?: string;
//     age?: number;
// }
//
// const rootUrl: string = "http://localhost:3000/users";
//
// export class User {
//     public events: Eventing = new Eventing();
//     public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
//     public attributes: Attributes<UserProps>;
//
//     constructor(private attrs: UserProps) {
//         this.attributes = new Attributes<UserProps>(attrs);
//     }
//
//     get on() {
//         console.log("on");
//         return this.events.on;
//     }
//
//     get trigger() {
//         console.log("trigger");
//         return this.events.trigger;
//     }
//
//     get get() {
//         console.log("get");
//         return this.attributes.get;
//     }
//
//     set(update: UserProps): void {
//         this.attributes.set(update);
//         this.events.trigger("change");
//         console.log("set");
//     }
//
//     fetch(): void {
//         const id = this.attributes.get("id");
//
//         if (typeof id !== "number") throw new Error("cannot fetch without an id");
//
//         this.sync
//             .fetch(id)
//             .then((res: AxiosResponse) => {
//                 this.set(res.data);
//             })
//             .catch((err) => console.error(err.message));
//     }
//
//     save() {
//         this.sync
//             .save(this.attributes.getAll())
//             .then((res: AxiosResponse) => {
//                 console.log("-->save")
//                 this.trigger('save')
//             });
//     }
// }
