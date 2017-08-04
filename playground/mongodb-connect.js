const {MongoClient} = require('mongodb');
// same as const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connect to MongoDB server')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Something went wrong', err);
  //   }
  //   console.log(result)
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Jerry Lewis',
  //   age: 25,
  //   location: 'London, UK'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Something went wrong', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
