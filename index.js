const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack([webpackConfig]);
const express = require('express');
const app = express();

app.use(middleware(compiler, {}));

app.listen(3000, () => console.log('listening on port 3000'));
