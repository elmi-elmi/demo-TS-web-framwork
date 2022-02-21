console.log('-----------index.ts run----------------')
// import axios from "axios";
import {User} from "./modules/User";

const user = new User({id:5});
user.fetch()

setTimeout(()=>{
    console.log(user.get('name'))
},1000)
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



