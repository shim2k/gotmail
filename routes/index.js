var express = require('express');
var router = express.Router();
const EmailRequestAnalyzer = require('../services/email.request.analyzer');

/* GET home page. */
router.get('/gotmail', function(req, res, next) {
  res.json({status: 'up'});
});



router.get('/gotmail/:campaignId/:requestName', (req, res, next) => {
  const { campaignId, requestName } = req.params;
  EmailRequestAnalyzer.addRequest(req, {campaignId, requestName});
  res.sendFile(`lol.gif`, {root: 'public'});
});


module.exports = router;
