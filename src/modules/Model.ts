import {AxiosPromise, AxiosResponse} from "axios";
import {UserProps} from "./User";

interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];

    set(update: T): void;

    getAll(): T;
}

interface Events {
    // events
    on(eventName: string, callback: () => void): void;

    trigger(eventName: string): void;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;

    save<T>(data: T): AxiosPromise;
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {
    }

    on = this.events.on;

    trigger = this.events.trigger;

    get = this.attributes.get;
    // get on() {
    //     return this.events.on;
    // }
    //
    // get trigger() {
    //     return this.events.trigger;
    // }
    //
    // get get() {
    //     console.log('Model get')
    //     return this.attributes.get;
    // }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger("change");
    }

    fetch(): void {
        const id = this.attributes.get("id");

        if (typeof id !== "number") throw new Error("cannot fetch without an id");
        console.log(id);
        this.sync
            .fetch(id)
            .then((res: AxiosResponse) => {
                console.log("sync model fetch:", res.data);
                this.set(res.data);
            })
            .catch((err) => console.error(err.message));
    }

    save() {
        this.sync.save(this.attributes.getAll()).then((res: AxiosResponse) => {
            this.trigger("save");
        });
    }
}
