var express = require('express');
var rpc_client = require('../rpc_client/rpc_client');
var router = express.Router();

/* GET news page. */
router.get('/userId/:userId/pageNum/:pageNum', function(req, res, next) {
  console.log("Fetching news...");
  user_id = req.params['userId'];
  page_num = req.params['pageNum'];

  rpc_client.getNewsSummariesForUser(user_id, page_num, function(response) {
    res.json(response);
  })
});

module.exports = router;