exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('buckets', function (table) {
          table.increments('id').primary();
          table.string('color');
        })
    ]);    
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('buckets')
    ]);
};
