const {MongoClient, ObjectID} = require('mongodb');
// same as const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connect to MongoDB server');

  // findOneAndUpdate


  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('598445f1cd746dad45c578d3')
  }, {
    $set: {
      completed: false
    }
  }, {
      returnOriginal: false
    }).then((res) => {
    console.log(res);
  });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59844b16830bb51afdbd16b7')
  }, {
    $set: {
      name: 'John Doe',
      location: 'Paris, France'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
});
