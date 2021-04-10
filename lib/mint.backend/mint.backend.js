'use strict';

const winston = require.main.require('winston');
const setupVoteSocket = require('./voteSocket').setupVoteSocket;
// hooks list: https://docs.nodebb.org/development/plugins/hooks/

var mint = {}

mint = {
  hooks: {
    statics: {
      load: function (params, callback) {
        winston.verbose('[plugins/mint] backend script loaded');
        setupVoteSocket(callback);
      }
    }
  }
}
exports.mint = mint
