import {User} from "../modules/User";


export abstract class View {
     protected constructor(public parent: Element, public model: User) {
        this.bindModel();
    }

    abstract template(): string;abstract mapEvents():{ [key: string]: () => void };


    bindModel() {
        this.model.on("change", () => {
            console.log('change and rerender')
            this.render();
        });
        this.model.on('save',()=>{
            console.log('save and rerender')
        })
    }

    render(): void {
        this.parent.innerHTML = '';
        const template = document.createElement('template');
        template.innerHTML = this.template();

        this.bindEvents(template.content)
        this.parent.append(template.content);

    }


    bindEvents(fragment: DocumentFragment): void {
        console.log(this)
        console.log(this.mapEvents)
        const eventsMap = this.mapEvents();
        console.log('event map',eventsMap)


        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

}


