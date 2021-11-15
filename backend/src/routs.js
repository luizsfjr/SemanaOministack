const express = require('express');

const OngController = require('./controlers/ongControler');
const IncidentController = require('./controlers/incidentControler');
const profileController = require('./controlers/profileControler');
const sessionController = require('./controlers/sessionControler');



const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;