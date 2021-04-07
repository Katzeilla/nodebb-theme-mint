"use strict";

$(document).ready(function() {
	showDaySinceJoin();
	setupConnectionSanckbar();
	console.log("mint: script loaded");

	function showDaySinceJoin() {
		$(window).on('action:ajaxify.end', function(ev, data) {
			console.log(data);
			if (ajaxify.data.template["account/profile"]) {
				ajaxify.data.timesincejoin = ((Date.now() - parseInt(ajaxify.data.joindate, 10)));
				ajaxify.data.daysincejoin = Math.floor((ajaxify.data.timesincejoin / 1000 / 3600 / 24));
				$("#daySinceJoin").text(ajaxify.data.daysincejoin);
				}
		});
	}

	function setupConnectionSanckbar() {
		$(window).on('action:disconnected', function(ev, data) {
			mdui.snackbar({
				  message: '暂时断开 QAQ'
			});
		});
		$(window).on('action:connected', function(ev, data) {
			mdui.snackbar({
				  message: '连接正常'
			});
		});
		$(window).on('action:reconnected', function(ev, data) {
			mdui.snackbar({
				  message: '连回去啦～'
			});
		});
	}
}
