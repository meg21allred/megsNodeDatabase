const express = require("express");
const app = express();
const router = express.Router();


const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

router.get('db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM records');
        const results = { 'results': (result) ? result.rows : null};
        res.render('pages/db', results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})
//get home page
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express'});
});

//module.exports = router;

app.listen(process.env.PORT);
//app.listen(3000);

app.get('/', (req, res) => {
    res.send("Two thumbs up!");
})
