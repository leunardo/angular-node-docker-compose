require('dotenv').config();

const Koa = require('koa');
const body = require('koa-body');
const helmet = require('koa-helmet');
const router = require('./router');

const app = new Koa();
app.use(helmet());
app.use(body());

app.use(router.routes());

console.log('Api started! Listening to: ' + (process.env.PORT || 3000));
app.listen(process.env.PORT || 3000);