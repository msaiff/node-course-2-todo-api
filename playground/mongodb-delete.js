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

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID("591d0fa21bd9d4d7418614c0")}).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  // db.collection('Todos').deleteOne({text: 'Some task to do 2'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteMany({text: 'the text'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').find({name:'Jane'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch users', err);
  // });

  // db.collection('Todos').find({
  //     _id: new ObjectID('591ca4ed25c21a2d10e99023')
  //   }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });
  //db.close();
});
