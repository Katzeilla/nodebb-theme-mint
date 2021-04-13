'use strict';

const winston = require.main.require('winston');
const setupVoteSocket = require('./voteSocket').setupVoteSocket;
const renderLikeToolbar = require('./renderLikeToolbar').renderLikeToolbar;
// hooks list: https://docs.nodebb.org/development/plugins/hooks/
var mint = {}

mint = {
  hooks: {
    filter: {
      parsePost: function (data, callback) {
        winston.verbose('[plugins/mint] parsePost called');
        renderLikeToolbar(data, callback);
      },
      render: function (data, callback) {
      winston.verbose('[plugins/mint] render called');
      callback(null, data);
      }
    },
    statics: {
      load: function (params, callback) {
        winston.verbose('[plugins/mint] backend script loaded');
        setupVoteSocket(callback);
      }
    }
  }
}
exports.mint = mint
