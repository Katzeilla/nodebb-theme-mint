'use strict';

const async            =  require('async');
const NodeBB           =  require.main;

const db               =  NodeBB.require('./src/database');
const sockets          =  NodeBB.require('./src/socket.io/plugins');
const user             =  NodeBB.require('./src/user');

const socketsNamespace  =  'mint-likes';
const userFields        =  ['uid', 'username', 'userslug', 'fullname', 'picture', 'banned'];

// TODO
const maskedUserProps   =  ['banned', 'banned_until_readable', 'banned_until', 'banned:expire']; // do not send to client

function getUsersData(uids, callback) {
  user.getUsersFields(uids, userFields, callback);
}


function getVotersUids(pids, callback) {
  var key = `pid:${pids}:upvote`;
  db.getSetMembers(key, function (error, result) {
    if (error || !Array.isArray(result) || !result.length) {
      return callback(error, []);
    }
    callback(null, result);
  });
}

function getVoters(sockets, payload, callback) {
  var result = {
    total: 0,
    users: []
  };
  async.waterfall([
    async.apply(getVotersUids, payload['pid']),
    function (uids, next) {
      result.total = uids.length;
      getUsersData(uids, next);
    },
    function (usersData, next) {
      usersData = usersData.filter((user) =>
        !user['banned']
      );
      result.users = usersData;
      next(null, result);
    }
  ], callback);
}

function setupVoteSocket(callback) {
  sockets[socketsNamespace] = {};
  sockets[socketsNamespace].getVoters = getVoters;

  callback()
}

exports.setupVoteSocket = setupVoteSocket
