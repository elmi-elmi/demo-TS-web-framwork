console.log('-----------index.ts run----------------');

import {UserForm} from "./views/UserForm";
import {User, UserProps} from "./modules/User";
import {UserEdit} from "./views/UserEdit";
import {Collection} from "./modules/Collection";


const rootUrl = "http://localhost:3000/users";

const collection = new Collection<User,UserProps>(rootUrl,(json:UserProps)=>{return User.buildUser(json)})
collection.fetch()
console.log(collection.models)
// const user = User.buildUser({name: 'sss', age: 2222})
// const root = document.getElementById('root');
//
// if (root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
//     console.log(userEdit)
// } else {
//     throw new Error('root not found')
// }


// =========================== old code ========================================
// const user = new User({id:5,name:'NEWER NAME',age:22222});
//
// user.on('save', ()=>console.log('save trigger'));
// user.on('change', ()=>console.log('change trigger'));
//
// // user.events.trigger('save')
// user.get('name');
// user.set({name: 'newer name'});
// user.get('name');
// user.trigger('save');
// user.fetch()
// user.fetch()
//
// setTimeout(()=>{
//     console.log(user.get('name'))
// },1000)
// const user = new User({name:'shahram',age:30,id:5});
//
// user.save();

//
// axios.post("http://localhost:3000/users",{
//     name:"shahrokh",
//     age:"28"
// })


// axios.get("http://localhost:3000/users/1")


//
// import{User} from './modules/User';


//
// const user = new User({name:'shahrokh',age:20});
//
// user.on('click',()=>{
//     console.log('click #1 event trigger')
// })
// user.on('click',()=>{
//     console.log('click #2 event trigger')
// })
// user.on('save',()=>{
//     console.log('save event trigger')
// })
//
// user.trigger('save')



