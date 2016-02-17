'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const = require('mongoose');

const routes = require('./routes/');

const PORT = process.env.PORT || 3000;

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 11218;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'stockmarket-app';

const MONGODB_AUTH = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';

const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

app.set('view engine', 'jade');

app.locals.title = 'Stock Market App';




