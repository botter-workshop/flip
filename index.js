var app = require('koa')(),
    cors = require('kcors'),
    bodyParser = require('koa-bodyparser');

app.use(cors());
app.use(bodyParser());
app.use(require('./v1'));

app.listen(8080, start);

function start() {
    console.log('API ready');
}
