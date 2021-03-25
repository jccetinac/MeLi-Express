const express = require('express');
const CONSTANTS = require('../utilities/constants');


const api = require('../components/products/network');
const routes = function (server) {
    server.use(CONSTANTS.LIST.API_PATH_BASE, api);
}

module.exports = routes;