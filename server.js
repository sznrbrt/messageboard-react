import express from 'express';
import {MongoClient} from 'mongodb';

const PORT = 3000;

require('dotenv').config();

let app = express();

app.use(express.static('public'));


let db;

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if(err) throw err;

  db = database
  app.listen(PORT,() => console.log(`Listening on PORT:${PORT}`));
});

app.get("/data/messages", (req, res) => {
    db.collection("message").find({}).toArray((err, messages) => {
      if (err) throw err;
      res.json(messages);
    })
})
