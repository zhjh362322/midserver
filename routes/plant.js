var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res) {
    var data = req.body;
    request.post({
        url: 'http://zgt.zwh56.com/mini/plant',
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
