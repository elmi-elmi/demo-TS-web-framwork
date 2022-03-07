
import {View} from "./View";
import {UserForm} from "./UserForm";
import {User} from "../modules/User";
import {UserShow} from "./UserShow";

export class UserEdit extends View{
    constructor(parent:Element, model:User) {
        super(parent, model);

    }





    onRender():void{
        console.log('******')
        console.log(this.parent)
        new UserForm(this.parent.querySelector('.show-form'), this.model).render()
        new UserShow(this.parent.querySelector('.show-user'), this.model).render()
    }

    template():string{
        return `
        <div class="show-user" ></div>
        <div class="show-form" ></div>
        `
    }
}