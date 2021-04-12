'use strict';

const NodeBB           =  require.main;
const db               =  NodeBB.require('./src/database');
const user             =  NodeBB.require('./src/user');
const userFields       =  ['uid', 'username', 'userslug', 'fullname', 'picture', 'banned'];

function getUsersData(uids, callback) {
          user.getUsersFields(uids, userFields, callback);
}

function getVotersUids(pids, callback) {
	  var key = `pid:${pids}:upvote`;
	  db.getSetMembers(key, function (error, result) {
		      callback(null, result);
		    });

}
function renderLikeToolbar(data, callback) {
          var posts = data.posts;
          posts.forEach((post) => {
            if (post.upvotes) {
              getVotersUids(post.pid, function (error, uids) {
                getUsersData(uids, function (error, usersData) {
                  usersData = usersData.filter((user) =>
                    !user['banned']
                  );
                  post.upvoters = usersData;
                })
              })
             }
          });
data.posts = posts;
callback(null, data);
}

exports.renderLikeToolbar = renderLikeToolbar
