const {MongoClient, ObjectID} = require('mongodb');
// same as const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connect to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').deleteMany({name: 'Jerry Lewis'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5984407bffd43e17fb49d36c')
  }).then((res) => {
    console.log(res);
  });


  // db.close();
});
