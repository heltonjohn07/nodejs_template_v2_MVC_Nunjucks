
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('alunos').del()
    .then(function () {
      // Inserts seed entries
      return knex('alunos').insert([
        { name: 'Helton Andrade', idade: 30 },
        { name: 'Joaquim Nabuco', idade: 21},
        { name: 'João Lucas', idade: 8 },
      ]);
    });
};
