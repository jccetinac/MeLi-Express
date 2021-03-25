const express= require('express');
router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const CONSTANTS = require('../../utilities/constants');


//metods

router.get(CONSTANTS.LIST.API_PATH_ITEMS, function(req, res){
    controller.getResults(req.query.search)
    .then((productList)=> {
        response.success(req, res, productList)
    })
    .catch(e => {response.error(req, res)})
    
});

router.get(`${CONSTANTS.LIST.API_PATH_ITEMS}:id`, function(req, res){
    controller.getProductById(req.params.id)
    .then((productResponse)=> {
        response.success(req, res, productResponse)
    })
    .catch(e => {response.error(req, res)})
    
});

module.exports = router;