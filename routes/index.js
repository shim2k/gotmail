var express = require('express');
var router = express.Router();
const EmailRequestAnalyzer = require('../services/email.request.analyzer');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('index.html', { root: 'blog' });
});

router.get('/*', function(req, res, next) {
  res.sendFile('index.html', { root: 'blog' });
});



router.get('/gotmail/:campaignId/:requestName', (req, res, next) => {
  const { campaignId, requestName } = req.params;
  EmailRequestAnalyzer.addRequest(req, {campaignId, requestName});
  res.sendFile(`lol.gif`, {root: 'public'});
});


module.exports = router;
