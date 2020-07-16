const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router({ mergeParams: true });

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        if(req.params.dishId != null)
        res.end('Will send the dish '+ req.params.dishId + ' to you!');
        else
            res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        if(req.params.dishId != null)
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
        else
        res.end('Will add the dish: ' + req.params.dishId + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        if(req.params.dishId != null)
        res.end('Deleting dish ' + req.params.dishId +' as per request');
        else
            res.end('Deleting all the dishes as per request');
    });

module.exports = dishRouter;