'use strict';

const async            =  require('async');
const NodeBB           =  require.main;

const db               =  NodeBB.require('./src/database');
const pluginSockets    =  NodeBB.require('./src/socket.io/plugins');
const user             =  NodeBB.require('./src/user');

const socketNamespace  =  'mint-likes';
const userFields       =  ['uid', 'username', 'userslug', 'fullname', 'picture', 'banned'];

setupVoteSocket(callback) {
  sockets[socketsNamespace] = {};
  sockets[socketsNamespace].getVoters = getVoters;

  callback()
}

exports.setupVoteSocket = setupVoteSocket
