const express= require('express');
router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


//metodos

router.get('/items/', function(req, res){
    controller.getMessages(req.query.search)
    .then((listProcesada)=> {
        const test= listProcesada;
        response.success(req, res, test)
    })
    .catch(e => {response.error(req, res)})
    
});

router.get('/items/:id', function(req, res){
    console.log(req.params.id);
    controller.getProductById(req.params.id)
    .then((listProcesada)=> {
        response.success(req, res, listProcesada)
    })
    .catch(e => {response.error(req, res)})
    
});

module.exports = router;