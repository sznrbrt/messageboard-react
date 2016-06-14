import express from 'express';
import {MongoClient, ObjectId} from 'mongodb';
import bodyParser from 'body-parser';
import moment from 'moment';


const PORT = 3000;
require('dotenv').config();

let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if(err) throw err;

  db = database
  app.listen(PORT,() => console.log(`Listening on PORT:${PORT}`));
});



app.use(express.static('public'));

let db;


app.get("/data/messages", (req, res) => {
    db.collection("message").find({}).toArray((err, messages) => {
      if (err) throw err;
      res.json(messages);
    })
})

app.post("/data/message", (req, res) => {
  if(!req.body.content) return res.status(400).send({'error': "Post is invalid."});
  let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  db.collection("message").insert({
    "content": req.body.content,
    "timestamp": now
  }, function(err, dbMessage) {
    if(err) throw err;
    console.log(dbMessage.ops[0]);
    res.send(dbMessage.ops[0]);
  })
})

app.delete("/data/message/:id", (req, res) => {
  if(!req.params.id) return res.status(400).send({'error': "Missing parameter"});
  console.log(req.params.id);
  db.collection("message").remove(
    { "_id": ObjectId(req.params.id)
  }, true, function(err) {
    db.collection("message").find({}).toArray((err, messages) => {
      if (err) throw err;
      res.json(messages);
    })
  })
})
