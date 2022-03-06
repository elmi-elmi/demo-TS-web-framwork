import {User} from "../modules/User";

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.render();
        this.bindModel();
    }

    bindModel() {
        console.log('*************')
        this.model.on("change", () => {
            // this.updateView();
            this.render();
        });
    }

    mapEvents(): { [key: string]: () => void } {
        return {
            "click:.set-name": this.setNameClick,
            "click:.set-age": this.setAgeClick,
        };
    }

    setNameClick = (): void => {
        console.log('**********2')

        const input = document.querySelector("input");
        if (input) {
            const name = input.value;

            this.model.set({name});
        } else {
            throw new Error("input element not found");
        }
    };
    setAgeClick = (): void => {
        console.log('**********1')
        this.model.setRandomAge();
    };

    bindEvents(fragment: DocumentFragment): void {
        console.log('**********3')

        console.log();
        const eventsMap = this.mapEvents();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    template(): string {
        return `
        <div>
            <h1>
                User Form
            </h1>
            <div ><h2>User Name: ${this.model.get("name")}</h2> </div>
            <div ><h2>User Age: ${this.model.get("age")}</h2></div>
            <input type="text"/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
        </div>
        `;
    }

    render(): void {
        this.parent.innerHTML = '';
        const template = document.createElement('template');
        template.innerHTML = this.template();

        this.bindEvents(template.content)
        this.parent.append(template.content);

        // console.log('****render*******')
        // const template:HTMLTemplateElement = this.markupView();
        // this.bindEvents(template.content);
        // this.parent.append(template.content);
    }

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
