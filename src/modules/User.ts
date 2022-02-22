import axios, {AxiosResponse} from "axios";
import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl: string = 'http://localhost3000:/users'

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps> = new Attributes<UserProps>(this.data);

    constructor(private data: UserProps) {
    }
}

