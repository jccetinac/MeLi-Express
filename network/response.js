const CONSTANTS = require('../utilities/constants');

exports.success = function(req, res, msj){
    res.send(msj);
}
exports.error = function(req, res){
    res.status(401);
    res.send(CONSTANTS.LIST.ERROR_401);
}
