var keystone = require('keystone');
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var local = res.locals;

	locals.section = 'tickets';
	locals.data = {
		tickets: [],
	};

	view.on('init', function (next) {
		var q = keystone.list('Tickets').model.find();
		q.exec(function (err, results) {
			locals.data.tickets = results;
			next(err);
		});
	});
	view.render('tickets/ticketlist');
};
