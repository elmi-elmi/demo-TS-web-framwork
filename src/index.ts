console.log('-----------index.ts run----------------')
import axios from "axios";



// axios.post("http://localhost:3000/users",{
//     name:"shahrokh",
//     age:"28"
// })

axios.get("http://localhost:3000/users/1")


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



