'use strict';
const NodeBB           =  require.main;
const db               =  NodeBB.require('./src/database');
const user             =  NodeBB.require('./src/user');
const userFields       =  ['uid', 'username', 'userslug', 'fullname', 'picture', 'banned'];

function renderLikeToolbar(data, callback) {
  var post = data.postData;
  var key = `pid:${post.pid}:upvote`;
  db.getSetMembers(key).then((uids) => {
    user.getUsersFields(uids, userFields).then((resultFields) => {
      resultFields  = resultFields.filter((user) => !user['banned']);
      post.upvotes  = resultFields.length;
      post.upvoters = resultFields
      callback(null, data);
    });
  });
}

exports.renderLikeToolbar = renderLikeToolbar
