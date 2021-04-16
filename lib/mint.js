"use strict";

$(document).ready(function() {
	showDaySinceJoin();
	setupConnectionSnackbar();
	console.log("mint: script loaded");

	function showDaySinceJoin() {
		$(window).on('action:ajaxify.end', function(ev, data) {
			if (ajaxify.data.template["account/profile"]) {
				ajaxify.data.timesincejoin = ((Date.now() - parseInt(ajaxify.data.joindate, 10)));
				ajaxify.data.daysincejoin = Math.floor((ajaxify.data.timesincejoin / 1000 / 3600 / 24));
				$("#daySinceJoin").text(ajaxify.data.daysincejoin);
				}
		});
	}

	function drawSnackbar(mintString) {
		require(['translator'], function (translator) {
			translator.translate('[[mint:' + mintString + ']]', function (translated) {
				params = {"position": "right-bottom", 'timeout': 0};
				mdui.snackbar(translated, params);
			})
		})
	}

	function setupConnectionSnackbar() {
		$(window).on('action:connected', function(ev, data) {
			drawSnackbar('connected');
		});
		$(window).on('action:reconnected', function(ev, data) {
			drawSnackbar('reconnected');
		});
		$(window).on('action:disconnected', function(ev, data) {
			drawSnackbar('disconnected');
		});
	}
})
