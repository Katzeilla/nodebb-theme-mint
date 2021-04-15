	<small>
	<div class="pull-left mint-like-avatars">
		<div data-upvoters-avatars-pid="{posts.pid}" class="avatars">
{{{each posts.upvoters}}}<!-- IF posts.upvoters.picture --><span><img component="user/picture" data-uid="{posts.upvoters.uid}" align="left" title="{posts.upvoters.username}" class="post-like-avatar-img avatar" src="{posts.upvoters.picture}"  itemprop="image" /></span><!-- ELSE --><span component="user/picture" data-uid="{posts.upvoters.uid}" align="left" title="{posts.upvoters.username}" class="post-like-avatar-icon user-icon" style="background-color: {posts.upvoters.icon:bgColor};">{posts.upvoters.icon:text}</span><!-- ENDIF posts.upvoters.picture -->{{{end}}}
		</div>
	</div>
	</small>
	<small class="pull-right">
<span component="mint/likes/counter" data-counter-pid="{posts.pid}" class="<!-- IF !posts.upvotes -->hide<!-- ENDIF !posts.upvotes -->" style="font-size: 14px">{posts.upvotes}</span>
    <div class="btn-group">
        <button component="mint/likes/toggle" type="button" data-toggle-pid="{posts.pid}" class="<!-- IF posts.upvoted --> liked <!-- ENDIF posts.upvoted --> mint-likes-toggle btn btn-xs mdui-ripple">
	<i component="mint/likes/icon/unliked" style="font-size: 16px !important;" class="<!-- IF posts.upvoted --> hide <!-- ENDIF posts.upvoted --> fa fa-heart-o"></i>
        <i component="mint/likes/icon/liked" style="font-size: 16px !important; color: #F44336;" class="<!-- IF !posts.upvoted --> hide <!-- ENDIF !posts.upvoted -->fa fa-heart liked"></i>
	</button>
    </div>
	</small>
