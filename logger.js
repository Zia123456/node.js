console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message) {
  console.log(message);
}

module.exports = log;

function hello(name) {
  console.log('Fuck you', name);
}

module.exports.hello = hello;
