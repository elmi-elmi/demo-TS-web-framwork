export class UserForm {
    constructor(public parent: Element) {

    }

    mapEvents(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseover:h1':this.hoverHeader
        }
    }

    hoverHeader():void{
        console.log('div hover.....')
    }

    onButtonClick(): void {
        console.log('Button clicked.......')
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.mapEvents();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })

        }
    }

    template(): string {
        return `
        <div>
            <h1>
                User Form
            </h1>
            <input type="text"/>
            <button>click me</button>
        </div>
        `;
    }

    render(): void {
        const template = document.createElement('template');
        template.innerHTML = this.template();

        this.bindEvents(template.content)
        this.parent.append(template.content);
    }
}
