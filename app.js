const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');
const serverless = require('serverless-http');
const cons = require('consolidate');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


app.engine('html', cons.swig)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/.netlify/functions/app', indexRouter);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);