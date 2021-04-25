const { on } = require("nodemon");

exports.up = function(knex) {
  return knex.schema.createTable('alunos_materias',function (table) {
    table.increments('id').primary().notNullable();
    
    table.integer('aluno_id')
        .notNullable()
        .references('id')
        .inTable('alunos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    table.integer('materia_id')
        .notNullable()
        .references('id')
        .inTable('materias')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('materias');
};