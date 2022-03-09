import {CollectionView} from "./CollectionView";
import {User, UserProps} from "../modules/User";


export class UserList extends CollectionView<User, UserProps>{
    renderItem(model: User, itemParent: Element) {
    }
}