'use strict';

const apiai = require('apiai');
const app = apiai("a558192b4a614b079e4fb86afb610e47");
const request = app.textRequest('weather.condition', {
	sessionId: '7cce81fc71054378954c46ffeb8e84ff'
});

request.on('response', function(response) {
	console.log(response);
	});

request.on('error', function(error) {
    console.log(error);
    });

request.end();
