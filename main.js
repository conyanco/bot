 apiai = require('apiai');

var app = apiai("a558192b4a614b079e4fb86afb610e47");

var request = app.textRequest('weather', {
    sessionId: 'sessionId'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();