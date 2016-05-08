'use strict';

var util = require('util');
var wrapi = require('wrapi');

var endpoints = require('./api/instagram.json');

function instagramWrapi(token) {

  var opts = {
    qs: {
      access_token: token
    },
    headers: {
      'User-Agent': 'instagram-wrapi'
    }
  };

  instagramWrapi.super_.call(this,
            'https://api.instagram.com/v1/',
            endpoints,
            opts);  
};

util.inherits(instagramWrapi, wrapi);
module.exports = instagramWrapi;
