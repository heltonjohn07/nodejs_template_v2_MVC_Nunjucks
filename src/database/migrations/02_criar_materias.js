
exports.up = function(knex) {
  return knex.schema.createTable('materias',function (table) {
    table.increments('id').primary().notNullable();
    table.string('name')
    table.string('dia_da_semana')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('materias');
};