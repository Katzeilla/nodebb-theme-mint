<li component="post" class="posts-list-item row<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF --><!-- ENDIF -->{{{ if ../topic.scheduled }}} scheduled{{{ end }}}" data-pid="{../pid}" data-uid="{../uid}">
    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">
        <a class="topic-title" href="{config.relative_path}/post/{../pid}">
            <!-- IF !../isMainPost --><!-- ENDIF -->{../topic.title}
        </a>

        <div component="post/content" class="content">
            {../content}
        </div>

	<small class="topic-category">
	<span class="timeago" title="{../timestampISO}"></span>
	<span><a href="{config.relative_path}/category/{../category.slug}">{../category.name}</a><span>
	</small>

	<div class="post-info">
	<!-- IF ../user.picture -->
	<a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(../user, "md", true, "user-img")}</a>
	<!-- ELSE -->
	<a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(../user, "md", true, "user-img user-timeline-avatar-char")}</a>
	<!-- ENDIF ../user.picture -->
	</div>

	</div>
</li>
