var express = require('express');
var router = express.Router();
var request = require('request');

router.route('/').get(function(req, res) {
    var q = req.query;
    var from = q.from;
    var uid = q.uid;
    var host = 'http://zgt.zwh56.com';
    var path = '/mini/consignment';
    request.get({url: host + path, json: true, qs: {from: from, uid: uid}}, function(error, response, body) {
        var rstJson = {};
        if(error) {
            rstJson.code = 0;
            rstJson.msg = '网络错误';
        } else {
            rstJson = body;
        }
        res.send(rstJson);
    })
}).post(function(req, res, next) {
    var data = req.body;
    request.post({
        url: 'http://zgt.zwh56.com/mini/consignment',
        method: 'POST',
        json: true,
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }, function(err, response, body) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(body);
        }
    })
})


module.exports = router;
