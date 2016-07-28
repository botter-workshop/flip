var router = require('koa-router')();

var lib = require('requirefrom')('lib'),
    buckets = () => lib('knex')('buckets');

router.prefix('/buckets');

router
    .delete('/:id', remove)
    .get('/', query)
    .get('/:id', get)
    .post('/', create)
    .put('/:id', update);

module.exports = router.routes();

function* create(next) {
    yield next;
    
    var ids = yield buckets()
        .first()
        .insert(this.request.body);
    
    this.body = yield buckets()
        .first()
        .where('id', ids.pop());
    
    this.status = 201;
}

function* get(next) {
    yield next;
    
    this.body = yield buckets()
        .first()
        .where(this.params);
    
    this.status = 200;
}

function* query(next) {
    yield next;
    
    this.body = yield buckets()
        .select();
    
    this.status = 200;
}

function* remove(next) {
    yield next;
    
    yield buckets()
        .delete()
        .where(this.params);
    
    this.status = 204;
}

function* update(next) {
    yield next;
    
    yield buckets()
        .update(this.request.body)
        .where(this.params);
    
    this.body = yield buckets()
        .first()
        .where(this.params);
    
    this.status = 200;
}
