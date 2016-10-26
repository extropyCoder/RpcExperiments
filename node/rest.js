var app = require('express')();
var light = require('eth-lightwallet');

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/api/getSeed', function (req, res) {
  //res.send('In Create!');
  var secretSeed = light.keystore.generateRandomSeed();
  res.send(secretSeed);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);

  var Web3 = require('web3');
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  var coinbase = web3.eth.coinbase;
  var balance = web3.eth.getBalance(coinbase);
  console.log(balance);


});
