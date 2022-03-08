import {View} from "./View";
import {UserForm} from "./UserForm";
import {User} from "../modules/User";
import {UserShow} from "./UserShow";

export class UserEdit extends View<User> {
    // constructor(parent:Element, model:User) {
    //     super(parent, model);
    //
    // }

    regionsMap(): { [key: string]: string } {
        return {
            userShow: ".show-user",
            userForm: ".show-form",
        };
    }

    onRender(): void {
        console.log(this.regions)

        new UserForm(this.regions.userForm, this.model).render();
        new UserShow(this.regions.userShow, this.model).render();
    }

    template(): string {
        return `
        <div class="show-user" ></div>
        <div class="show-form" ></div>
        `;
    }
}
