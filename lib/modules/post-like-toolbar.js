// user object of current user
var me = app.user;

// fire when someone upvotes/unvotes a post in the current viewing topic
socket.on('event:voted', (data) => {
  // ignore upvote/unvote events by current user
  if (data.fromuid != me.uid) {
    var pid = data.post.pid;
    // query voters data of this post
    socket.emit('plugins.mint-likes.getVoters',
      // payload
      {pid: pid},
      (error, res) => {
      if (!error) {
        updateAvatersBySocketResponse(data, res, pid);
      }
    })
  }
})

function updateAvatersBySocketResponse(data, res, pid) {
  var avatarsList = $('[data-upvoters-avatars-pid=' + pid + ']');
  var uid = data.fromuid;
  if (!data.upvote) {
    // remove existing avatar if received an unvote event
    removeAvatarByUid(uid, avatarsList);
  } else {
    // get new upvoter's user object from socket for generating user avatar
    var newUpvoter = res.users.filter(user => {return user.uid == uid})[0];
    avatar = genAvatarByUserObj(newUpvoter);
    avatarsList.prepend(avatar);
  }
}


function genAvatarByUserObj(userObj) {
  var elem;
  if (userObj.picture) {
    elem = '<span><img component="user/picture" data-uid="' + userObj.uid + '" align="left" title="' + userObj.usernauserObj + '" class="post-like-avatar-img avatar" src="' + userObj.picture + '"  itemprop="image" /></span>'
  } else {
    elem = '<span component="user/picture" data-uid="' + userObj.uid + '" align="left" title="' + userObj.usernauserObj + '" class="post-like-avatar-icon user-icon" style="background-color: ' + userObj['icon:bgColor'] + ';">' + userObj['icon:text'] + '</span>'
    }
  return elem;
}

function toggleLike(pid) {
  var toggle = $('[data-toggle-pid=' + pid + ']');
  var counter = $('[data-counter-pid=' + pid + ']');
  var avatarsList = $('[data-upvoters-avatars-pid=' + pid + ']');

  if (toggle.hasClass('liked')) {
    updateToggleOnUnvote(toggle);
    updateCounterOnUnvote(counter);
    removeAvatarByUid(me.uid, avatarsList);
    unvote(pid);
  } else {
    updateToggleOnUpvote(toggle);
    updateCounterOnUpvote(counter);
    updateAvatarsListOnUpvote(avatarsList);
    upvote(pid);
  }
}

function updateAvatarsListOnUpvote(avatarsList) {
  avatarsList.prepend(genAvatarByUserObj(me));
}
function removeAvatarByUid(uid, avatarsList) {
  uidSelector=`[data-uid="${uid}"]`
  avatarsList.find(uidSelector).remove();
}

function updateCounterOnUpvote(counter) {
  var count = parseInt(counter.text());
  if (counter.text() == 0) {
    counter.removeClass('hide');
  }
  counter.text(count + 1);
}

function updateCounterOnUnvote(counter) {
  var count = parseInt(counter.text());
  counter.text(count - 1);
  if (counter.text() == 0) {
    counter.addClass('hide');
  }
}


function updateToggleOnUpvote(toggle) {
  toggle.find('[component="mint/likes/icon/liked"]').removeClass('hide');
  toggle.find('[component="mint/likes/icon/unliked"]').addClass('hide');
  toggle.addClass('liked');
}

function updateToggleOnUnvote(toggle) {
  toggle.find('[component="mint/likes/icon/liked"]').addClass('hide');
  toggle.find('[component="mint/likes/icon/unliked"]').removeClass('hide');
  toggle.removeClass('liked');
}

function upvote(pid) {
  socket.emit('posts.upvote', {
    pid: pid,
    room_id: app.currentRoom
  }, (err) => { if (err) {app.alertError(error.message)}})
}

function unvote(pid) {
  socket.emit('posts.unvote', {
    pid: pid,
    room_id: app.currentRoom
  }, (err) => { if (err) {app.alertError(error.message)}})
}

$(window).on('action:posts.loaded', (err, data) => {
    console.log('action triggered');
    data.posts.forEach((post) => {
      var pid = post.pid;
      var toggle = $('[data-toggle-pid=' + pid + ']');
      toggle.on('click', (err) => toggleLike(pid));
    })
})
$(window).on('action:topic.loading', (err) => {
    var toggles = $('[component="mint/likes/toggle"]')
    toggles.each(function(index, toggle) {
            $(this).on('click', (err) => 
              toggleLike($(this).attr('data-toggle-pid'))
            )}
    )
})


