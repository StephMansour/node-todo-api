const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({_id: '5985e05dc1cb884a7054223e'}).then((res) => {
//   console.log(res);
// });


Todo.findByIdAndRemove('5985e105a7e5f94b9af55cd3').then((res) => {
  console.log(res);
});
