import {User} from "../modules/User";

interface ModelForView {
    on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends ModelForView> {
     constructor(public parent: Element, public model: T) {
         this.bindModel();

    }

    abstract template(): string;

    // regions():{[key:string]:string}{return {}}
    mapEvents = (): { [key: string]: () => void } => {
        return {};
    };

    bindModel = () => {

        this.model.on("change", () => {
            console.log("change and rerender");
            this.render();
        });
        this.model.on("save", () => {
            console.log("save and rerender");
        });
    };

    onRender(): void {
    }

    render = (): void => {
        this.parent.innerHTML = "";
        const template = document.createElement("template");
        template.innerHTML = this.template();

        this.bindEvents(template.content);
        this.parent.append(template.content);
        this.onRender();
    };

    bindEvents = (fragment: DocumentFragment): void => {
        const eventsMap = this.mapEvents();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    };
}
