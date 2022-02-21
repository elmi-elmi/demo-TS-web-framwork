import axios, { AxiosResponse } from "axios";
import {Eventing} from "./Eventing";
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}


export class User {
  public events:Eventing= new Eventing();
  constructor(private data: UserProps) {}

  get(propName:string): string | number | undefined {
    return this.data[propName as keyof UserProps];
  }

  set(update: UserProps): void {
    // this.data = update
    Object.assign(this.data, update);
  }


  fetch(): void {
    const id = this.get('id');
    console.log(id)
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });

    //
    // axios.get(`http://localhost:3000/users/${this.}`)
  }

  save(): void {
    const id = this.data["id"];

    if (!id) {
      axios.post(`http://localhost:3000/users`, this.data);
    } else {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    }
  }
}
