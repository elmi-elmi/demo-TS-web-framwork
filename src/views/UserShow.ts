import {User} from "../modules/User";
import {View} from "./View";

export class UserShow extends View{
    constructor( parent:Element,  model:User) {
        super(parent, model)
    }

    mapEvents (): { [key: string]: () => void }{
        return {

        };
    }

    template():string{
        return `
            <div>
                <h1>User Detail</h1>
                <h3>name: ${this.model.get('name')}</h3>
                <h3>age: ${this.model.get('age')}</h3>
            </div>
        `
    }
}