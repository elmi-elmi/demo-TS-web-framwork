import {User} from "../modules/User";
export class UserForm {
    constructor(public parent: Element, public model:User) {
        this.bindModel();
    }

    bindModel(){
        this.model.on('change',()=>{
            this.render();
        })
    }

    mapEvents(): { [key: string]: () => void } {
        return {
            'click:.set-name': this.setNameClick,
            'click:.set-age': this.setAgeClick,
        }
    }

    setNameClick = ():void=>{
        const input = document.querySelector('input');
        if(input){
        const name = input.value;

        this.model.set({name})
        this.model.trigger('change');
        }else{
            throw new Error('input element not found');
        }
    }
    setAgeClick = ():void=>{
        this.model.setRandomAge()
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
        <p>hi</p>
            <h1>
                User Form
            </h1>
            <div ><h2>User Name: ${this.model.get('name')}</h2> </div>
            <div ><h2>User Age: ${this.model.get('age')}</h2></div>
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
    }
}
