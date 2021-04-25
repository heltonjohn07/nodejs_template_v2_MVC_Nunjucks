const express = require('express');
const indexController = require('./controllers/indexController')
const routes = express.Router(); 

routes.get('/', indexController.index);

routes.get('/add', indexController.create);
routes.post('/add', indexController.store);

routes.get('/edit/:id', indexController.edit);
routes.post('/edit/:id', indexController.update);

routes.get('/delete/:id', indexController.destroy);

module.exports =  routes;