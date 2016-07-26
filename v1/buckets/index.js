var router = require('koa-router')();

router.prefix('/buckets');

router
    .get('/', query)
    .get('/:id', get);

module.exports = router.routes();

function* get(next) {
    yield next;
    this.body = {};
}

function* query(next) {
    yield next;
    this.body = [];
}
