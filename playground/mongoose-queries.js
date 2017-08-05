const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5985983081a53d28f047fb411';
var userId = '59847a7377418d059ad1b8a8';

// if(!ObjectID.isValid(id)) {
//   console.log('Invalid ID provided');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if(!todos){
//     console.log('Id Not Found');
//   }
//   console.log('all todos ' + todos);
// }).catch((e) => {
//   console.log(e);
// });


// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if(!todo){
//     console.log('Id Not Found');
//   }
//   console.log('One todo ' + todo);
// }).catch((e) => {
//   console.log(e);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo){
//     console.log('Id Not Found');
//   }
//   console.log('todo by id ' + todo);
// }).catch((e) => {
//   console.log(e);
// });


User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found!');
  }
  console.log(user);
}, (e) => {
  console.log(e);
});
