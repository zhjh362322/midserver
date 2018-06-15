var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var q = req.query;
  var waybillNo = q.waybillNo;
  var host = 'http://tmsapi.zgtgroup.com';
  var path = '/api/open/zgt/get/track/list';
  var params = '?waybillNo=' + waybillNo;
  var url = host + path + params;
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
