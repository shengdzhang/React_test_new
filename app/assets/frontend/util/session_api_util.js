"use strict";

const SessionApiUtil = {
	logIn(user, success) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: { user },
			success
		});
	},

	logOut(success) {
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success
		});
	},

	signUp(user, success) {
		$.ajax({
			url: '/api/user',
			type: 'POST',
			dataType: 'json',
			data: { user },
			success
		});
	},

	fetchCurrentUser(success, complete) {
		$.ajax({
			url: '/api/session',
			method: 'GET',
			success,
      complete: function(){
				complete();
			}
		});
	}
};

module.exports = SessionApiUtil;
