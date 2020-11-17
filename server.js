const express = require("express");
const app = express();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM records;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


app.listen(process.env.PORT);
//app.listen(3000);

app.get('/', (req, res) => {
    res.send("Two thumbs up!");
})
