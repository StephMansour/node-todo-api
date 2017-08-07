var {SHA256} = require('crypto-js');
var jwt = require('jsonwebtoken');

// var message = 00000;
// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);


data = {
  id: 4
}

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(token, '123abc')
console.log(decoded);



