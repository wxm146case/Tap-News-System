var jayson = require('jayson');

// create a client connnected to backend server
var client = jayson.client.http({
  port: 4040,
  hostname: 'localhost'
});

// Test Rpc method
function add(a, b, callback) {
  client.request('add', [a, b], function(err, error, response) {
    if (err) throw err;
    console.log(response);
    callback(response);
  });
}

// Get news summaries for a user
function getNewsSummariesForUser(user_id, page_num, callback) {
  client.request('getNewsSummariesForUser', [user_id, page_num], function(err, response) {
    if (err) throw err;
    console.log(response);
    callback(response.result);
  });
}

function logNewsClickForUser(user_id, news_id) {
  client.request('logNewsClickForUser', [user_id, news_id], function(err, response) {
    if (err) throw err;
    console.log(response);
  });
}

module.exports = {
  add : add,
  getNewsSummariesForUser : getNewsSummariesForUser,
  logNewsClickForUser : logNewsClickForUser
};