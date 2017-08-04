const {MongoClient, ObjectID} = require('mongodb');
// same as const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connect to MongoDB server');


  // db.collection('Todos').find({completed: true}).toArray().then((res) => {
  //   console.log(JSON.stringify(res, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Users').find().count().then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').find().toArray().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  }, (err)=> {
    console.log(err);
  })

  db.close();
});
