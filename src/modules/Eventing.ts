type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[] } = {};

    on = (eventName: string, callback: Callback): void => {
        if(this.events.hasOwnProperty(eventName)) return
        const handler = this.events[eventName] || [];
        handler.push(callback);
        this.events[eventName] = handler;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) return;

        handlers.forEach((callback) => callback());
    }
}