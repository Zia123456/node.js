var url = 'http://mylogger.io/log';

function log(message) {
    console.log(message);
}

module.exports.log = log;


function hello(name) {
    console.log('hello' + name);
}

module.exports.hello = hello;