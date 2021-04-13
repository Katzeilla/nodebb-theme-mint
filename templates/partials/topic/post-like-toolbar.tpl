	<small>
	<div class="pull-left mint-like-avatars">
		<span component="post/likes/avatars" class="avatars">
{{{each posts.upvoters}}}
<!-- IF posts.upvoters.picture -->
<span><img component="user/picture" data-uid="{posts.upvoters.uid}" align="left" title="{posts.upvoters.username}" class="post-like-avatar-img avatar" src="{posts.upvoters.picture}"  itemprop="image" /></span>
<!-- ELSE -->
<span component="user/picture" data-uid="{posts.upvoters.uid}" align="left" title="{posts.upvoters.username}" class="post-like-avatar-icon user-icon" style="background-color: {posts.upvoters.icon:bgColor};">{posts.upvoters.icon:text}</span>
<!-- ENDIF posts.upvoters.picture -->
{{{end}}}
		</span>
	</div>
	</small>
	<small class="pull-right">
<div class="ns-likes">
<span class="<!-- IF posts.upvoted -->liked<!-- ENDIF posts.upvoted --> ns-likes-toggle" style="font-size: 14px">{posts.votes}</span>            
    <div class="btn-group">
<!-- count -> 14px | btn icon 16px -->
        <button component="ns/likes/toggle" type="button" class="mint-like-toggle btn btn-default btn-xs mdui-ripple">
<i  style="font-size: 16px !important;" class="fa fa-heart-o"></i>
</button>
    </div>
</div>
	</small>
