'use strict';

apiai = require('apiai');
const request = require('request');

request('https://api.a3rt.recruit-tech.co.jp/proofreading/v1/typo?apikey=hZKOAncBCO4frSyuxZF7JR9l4j8sTBUE&sentence=', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML.
 
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
