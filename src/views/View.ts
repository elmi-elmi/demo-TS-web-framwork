import { User } from "../modules/User";

export abstract class View {
  protected constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract template(): string;
  // regions():{[key:string]:string}{return {}}
  mapEvents =(): { [key: string]: () => void } =>{
    return {};
  }




  bindModel = ()=> {
    this.model.on("change", () => {
      console.log("change and rerender");
      this.render();
    });
    this.model.on("save", () => {
      console.log("save and rerender");
    });
  }

  onRender():void{}

  render = (): void =>{
    console.log('renderrr')
    console.log(this.parent)
    this.parent.innerHTML = "";
    const template = document.createElement("template");
    template.innerHTML = this.template();
    // console.log(template.innerHTML)

    this.bindEvents(template.content);
    this.parent.append(template.content);
    this.onRender()
    // console.log(this.parent)
  }

  bindEvents = (fragment: DocumentFragment): void =>{
    const eventsMap = this.mapEvents();
    // console.log('bind event')
    // console.log(eventsMap)

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
