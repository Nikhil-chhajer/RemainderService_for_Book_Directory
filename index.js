const express = require('express');
const connect = require('../RemainderService/src/config/database')
const bodyParser = require('body-parser');

const { PORT } = require('./src/config/serverconfig');
const startandsetupserver = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    await connect();
    app.listen(PORT, () => {
        console.log('Server Started at PORT', PORT);
    })

}
startandsetupserver();