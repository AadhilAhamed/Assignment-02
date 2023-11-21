const express = require('express');
const app = express();

const PostRoutes = require('./api/Routes/route');

app.use('/endpoint',PostRoutes);

module.exports = app;