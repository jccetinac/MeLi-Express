exports.success = function(req, res, msj){
    res.send(msj);
}
exports.error = function(req, res){
    res.status(401);
    res.send('todo fallo');
}
