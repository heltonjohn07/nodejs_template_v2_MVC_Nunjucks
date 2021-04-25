
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materias').del()
    .then(function () {
      // Inserts seed entries
      return knex('materias').insert([
        { name: 'Matemática', dia_da_semana:'Segunda'},
        { name: 'Português', dia_da_semana:'Terça'},
        { name: 'Geografia', dia_da_semana:'Quarta'},
        { name: 'Historia', dia_da_semana:'Quinta'},
        { name: 'Física', dia_da_semana:'Sexta'},
        { name: 'Química', dia_da_semana:'Sábado'},
      ]);
    });
};
