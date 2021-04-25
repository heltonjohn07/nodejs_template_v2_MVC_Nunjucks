
exports.up = function(knex) {
  return knex.schema.createTable('alunos',function (table) {
    table.increments('id').primary().notNullable();
    table.string('name')
    table.integer('idade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('people');
};