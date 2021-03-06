import {User} from "../modules/User";
import {View} from "./View";

export class UserForm extends View<User>{
    // constructor( parent:Element,  model:User) {
    //     super(parent, model);
    //
    // }

    mapEvents = (): { [key: string]: () => void }=>{
        return {
            "click:.set-name": this.setNameClick,
            "click:.set-age": this.setAgeClick,
            "click:.save": this.setSaveClick,
        };
    }

    setSaveClick = ():void=>{
            this.model.save();
        }

    setNameClick = (): void => {
        const input = document.querySelector("input");
        if (input) {
            const name = input.value;

            this.model.set({name});
        } else {
            throw new Error("input element not found");
        }
    };
    setAgeClick = (): void => {
        this.model.setRandomAge();
    };

    template(): string {
        return `
        <div>
            <h1>
                User Form
            </h1>
            <input type="text" placeholder="${this.model.get('name')}"/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save" >Save</button>
        </div>
        `;
    }


    // render(): void {
    //     this.parent.innerHTML = '';
    //     const template = document.createElement('template');
    //     template.innerHTML = this.template();
    //
    //     this.bindEvents(template.content)
    //     this.parent.append(template.content);
    //
    //     // console.log('****render*******')
    //     // const template:HTMLTemplateElement = this.markupView();
    //     // this.bindEvents(template.content);
    //     // this.parent.append(template.content);
    // }

    // markupView(): HTMLTemplateElement {
    //     const template = document.createElement("template");
    //     template.innerHTML = this.template();
    //     return template;
    // }
    //
    // updateView() {
    //     console.log('*******update view')
    //     const newDom = document
    //         .createRange()
    //         .createContextualFragment(this.markupView().innerHTML.trim());
    //     const newNodeList = Array.from(newDom.querySelectorAll("*"));
    //     const currNodeList = Array.from(this.parent.querySelectorAll('*'));
    //
    //     console.log("update view:");
    //
    //     newNodeList.forEach((el, i) => {
    //
    //         const currEl = currNodeList[i];
    //         if (el.firstChild?.nodeValue?.trim()   && !el.isEqualNode(currEl) && currEl.firstChild) {
    //             currEl.firstChild.textContent = el.firstChild.textContent;
    //             console.log(currEl);
    //         }
    //     });
    // }
}
