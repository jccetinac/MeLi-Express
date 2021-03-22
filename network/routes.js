const express = require('express');

const api = require('../components/products/network');
const routes = function (server) {
    server.use('/api', api);
}

module.exports = routes;