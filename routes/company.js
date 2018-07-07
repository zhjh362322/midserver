var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var url = 'http://zgt.zwh56.com/mini/company';
    request.get(url, function(error, response, body) {
        var rstJson = {};
        if(error) {
            rstJson.code = 0;
            rstJson.msg = '网络错误';
        } else {
            rstJson = body;
        }
        res.send(rstJson);
    })
});

module.exports = router;
