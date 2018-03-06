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

module.exports = {
    add : add
};