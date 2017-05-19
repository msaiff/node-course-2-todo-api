// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



var user = {
  name: 'MSaif',
  age: 35
}
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('591d0fbf1bd9d4d7418614d2')
  }, {
    $set:{
      name: 'Jessy'
    },
    $inc: {
      age: 1
    }
   }, {
      returnOriginal: 'Rose'

  }).then((result) => {
    console.log(result);
  });

});
