const express = require("express");
const app = express();
//const router = express.Router();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

app.listen(process.env.PORT);
//app.listen(3000);

app.get('/', (req, res) => {
    res.send("Two thumbs up!");
})

app.get('/getPerson', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM records');
        const results = { 'results': (result) ? result.rows : null};
        res.send(JSON.stringify(results));
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})





