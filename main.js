'use strict';

 apiai = require('apiai');


const app = apiai("a558192b4a614b079e4fb86afb610e47");

canst reqapi = app.textRequest('weather.condition', {
    sessionId: '7cce81fc71054378954c46ffeb8e84ff'
});

reqapi.on('response', function(response) {
    console.log(response);
});


reqapi.on('error', function(error) {
    console.log(error);
});


reapi.end();
