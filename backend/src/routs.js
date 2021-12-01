const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controlers/ongControler');
const IncidentController = require('./controlers/incidentControler');
const profileController = require('./controlers/profileControler');
const sessionController = require('./controlers/sessionControler');



const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', OngController.index);

/*Validação de parâmetros*/
routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}),profileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);


routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}) ,IncidentController.delete);

module.exports = routes;