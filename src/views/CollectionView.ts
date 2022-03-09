import {Collection} from "../modules/Collection";

export abstract class CollectionView<T, K>{
    constructor(public parent:Element, public collection:Collection<T, K>) {
    }
    abstract renderItem(model:T, itemParent:Element):void;
    render(){}
}