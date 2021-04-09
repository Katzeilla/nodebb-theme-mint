'use strict';

const winston = require.main.require('winston');

// hooks list: https://docs.nodebb.org/development/plugins/hooks/

var mint = {}

mint = {
  hooks: {
    statics: {
      load: function (params, callback) {
        winston.verbose('[plugins/mint] backend script loaded');
        callback();
      }
    }
  }
}
exports.mint = mint
