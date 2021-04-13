	<small>
	<div class="pull-left mint-like-avatars">
		<span component="post/likes/avatars" class="avatars">
{{{each posts.upvoters}}}<!-- IF posts.upvoters.picture --><span><img component="user/picture" data-uid="{posts.upvoters.uid}" align="left" title="{posts.upvoters.username}" class="post-like-avatar-img avatar" src="{posts.upvoters.picture}"  itemprop="image" /></span><!-- ELSE --><span component="user/picture" data-uid="{posts.upvoters.uid}" align="left" title="{posts.upvoters.username}" class="post-like-avatar-icon user-icon" style="background-color: {posts.upvoters.icon:bgColor};">{posts.upvoters.icon:text}</span><!-- ENDIF posts.upvoters.picture -->{{{end}}}
		</span>
	</div>
	</small>
	<small class="pull-right">
<span class="<!-- IF !posts.upvotes -->hide<!-- ENDIF !posts.upvotes --><!-- IF posts.upvoted -->liked <!-- ENDIF posts.upvoted -->" style="font-size: 14px">{posts.upvotes}</span>
    <div class="btn-group">
<!-- count -> 14px | btn icon 16px -->
        <button component="mint/likes/toggle" type="button" class="mint-likes-toggle btn btn-xs btn-default mdui-ripple">
<i  style="font-size: 16px !important;" class="fa fa-heart-o"></i>
</button>
    </div>
	</small>
