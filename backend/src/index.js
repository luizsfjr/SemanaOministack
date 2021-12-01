const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);