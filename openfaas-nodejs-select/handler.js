"use strict"

var request = require('request')

module.exports = (event, context) => {
    var OPTIONS = {
        headers: {'Content-Type': 'application/json'},
           url: null,
           body: null
           };
    const fGateWay = 'http://211.251.237.70:14000/function/';
    const fName = 'openfaas-node-rest-get';

    OPTIONS.url  = fGateWay + fName;

    request.get(OPTIONS, (err, res, result) => {
    switch (res.statusCode) {
        case 200:
            context.status(200).succeed(result);          
            break;
        default:
            context.status(404).succeed(result);
            break;
    }
    });

}
