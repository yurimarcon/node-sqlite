import { createTable, insertIntoTable} from './conf.js';

import express from 'express';
const app = express();
app.use(express.json());
createTable();

app.get('/', (req, res) => {
    console.log('_________________________________________________________________________________');
    // console.log(req.body);
    insertIntoTable("req.body");
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});