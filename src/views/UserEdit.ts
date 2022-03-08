
import {View} from "./View";
import {UserForm} from "./UserForm";
import {User} from "../modules/User";
import {UserShow} from "./UserShow";

export class UserEdit extends View<User>{
    // constructor(parent:Element, model:User) {
    //     super(parent, model);
    //
    // }

    onRender():void{
        // @ts-ignore
        new UserForm(this.parent.querySelector('.show-form'), this.model).render();
        // @ts-ignore
        new UserShow(this.parent.querySelector('.show-user'), this.model).render();
    }

    template():string{
        return `
        <div class="show-user" ></div>
        <div class="show-form" ></div>
        `
    }
}