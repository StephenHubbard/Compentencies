
const path = require('path');

require("dotenv").config();

const express = require("express");
const massive = require("massive");
const ctrl = require('./controller')


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use( express.static( `${__dirname}/../build` ));

app.use(express.json())


massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database connected.")
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening on port ${SERVER_PORT}.`)
    });
})
.catch(err => console.log(err));