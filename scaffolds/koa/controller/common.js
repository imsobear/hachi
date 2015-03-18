

exports.index = function *() {
	yield this.render('home', {
		content: 'Hello World'
	});
};
