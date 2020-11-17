const express = require("express");

const app = express();

app.listen(process.env.PORT);
//app.listen(3000);

app.get('/', (req, res) => {
    console.log("Two thumbs up!");
})
