const db = require('../database/conn')
const moment = require('moment');
const e = require('cors');
const _ = require('underscore');
const { iteratee } = require('underscore');
const groupByParams = require('../utils/utils')

async function getTime() {
    timestamp = await moment(new Date()).format('DD/MM/YYYY HH:mm:ss')
    return timestamp
}

module.exports = {

    async index (req, res) {
        const alunos =  await db('alunos')
        .select([
            "alunos.id",
            "alunos.name",
            "alunos.idade",
            "materias.name as mat_name"
        ])
        .innerJoin('alunos_materias',"alunos.id",'alunos_materias.aluno_id')
        .innerJoin('materias',"materias.id",'alunos_materias.materia_id')
        .orderBy('alunos.id')
         
        aluno = groupByParams(alunos,"id")
    
        const materias =  await db('materias').select().orderBy('id')
        return res.render('index', {aluno, materias})
    },

    async create (req, res) {
        const materias =  await db('materias').select().orderBy('id')
        return res.render('add',{materias})
    },

    async store(req, res){
        const {name, idade, materia_id} = req.body
        const [aluno_id] = await db('alunos').insert({name, idade})//.returning('id')
        await db('alunos_materias').insert({aluno_id,materia_id})//.returning('id')
        console.log(req.body, aluno_id, materia_id)
        return res.redirect('/')
    },

    async edit (req, res) {
        const { id } = req.params
        const aluno =  await db('alunos').select().where({id}).first()
        return res.render('edit', {aluno})
    },

    async update (req,res){
        const { id } = req.params
        const aluno = req.body
        await db('alunos').update(aluno).where('id', id)//.returning('*')
        return res.redirect('/')
    },
    
    async destroy(req, res){
        const { id } = req.params
        await db('alunos').delete().where({ id })
        return res.redirect('/')
    },
  
   
};