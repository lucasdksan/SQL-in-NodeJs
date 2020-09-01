const express = require('express');
const routes = express.Router();
const UserControler = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

routes.post('/user', UserControler.store);
routes.post('/user/:user_id/addresses', AddressController.store);
routes.post('/user/:user_id/techs', TechController.store);
routes.get('/user', UserControler.index);
routes.get('/user/:user_id/addresses', AddressController.index);
routes.get('/user/:user_id/techs', TechController.index);
routes.get('/report', ReportController.show);
routes.delete('/user/:user_id/techs', TechController.delete);
module.exports = routes;