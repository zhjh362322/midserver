var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var q = req.query;
    var startCity = q.startCity;
    var endCity = q.endCity;
    var from = q.from;
    var host = 'http://zgt.zwh56.com';
    var path = '/mini/quotation';
    // var param = '?from=' + from + '&startCity=' + startCity + '&endCity=' + endCity;
    var qs = {from: 'mini', startCity: startCity, endCity: endCity};
    request.get({url: host + path, qs: qs, json: true}, function(error, response, body) {
        var rstJson = {};
        if(error) {
            console.log(error)
            rstJson.code = 0;
            rstJson.msg = '网络错误';
        } else {
            rstJson = body;
        }
        res.send(rstJson);
    })
});

module.exports = router;
