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

  db.collection('Todos').insertOne({
    text: 'Some task to do',
    completed: true
    }, (err, result) => {
      if (err){
        return console.log('Unable to insert Todo', err);
      }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  // db.collection('Users').insertOne({
  //   name: 'MSaif',
  //   age: 35,
  //   location: 'KSA'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert a user', err);
  //   }
  //
  //   console.log('User added successfully.');
  // });


  // var obj = new ObjectID();
  // console.log(obj);


  db.close();
});
