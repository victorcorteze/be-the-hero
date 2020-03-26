const express = require('express');
const OngController = require('../src/Controllers/OngController');
const IncidentController = require('../src/Controllers/IncidentController');
const ProfileController = require('../src/Controllers/ProfileController');
const SessionController = require('../src/Controllers/SessionController');

const routes = express.Router();


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes; /*serve para exportar*/