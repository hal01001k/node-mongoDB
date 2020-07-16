const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router({ mergeParams: true });

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        if(req.params.promoId != null)
            res.end('Will send  the promotion '+ req.params.promoId + ' to you!');
        else
            res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        if(req.params.promoId != null)
            res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
        else
            res.end('Will add the promotion: ' + req.params.promoId + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        if(req.params.promoId != null)
            res.end('Deleting promotion ' +req.params.promoId +' as per request');
        else
            res.end('Deleting all the promotions as per request');
    });

module.exports = promoRouter;