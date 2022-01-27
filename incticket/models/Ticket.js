var keystone = require('keystone');
var Types = keystone.Field.Types;

var Ticket = new keystone.List('Ticket', {
	autokey: { from: 'title', path: 'slug', unique: true },
});

Ticket.add({
	title: { type: String, initial: true, default: 'ff', required: true },
	description: { type: Types.Textarea },
	priority: {
		type: Types.Select,
		options: 'Low, Medium, High',
		default: 'Low',
	},
	category: {
		type: Types.Select,
		options: 'Bug, Feature, Enhancement',
		default: 'Bug',
	},
	status: {
		type: Types.Select,
		options: 'New, In Progress, Open, On Hold,Declined, Closed',
		default: 'New',
	},
	createdBy: {
		type: Types.Relationship,
		ref: 'User',
		index: true,
		many: false,
	},
	assignedTo: {
		type: Types.Relationship,
		ref: 'User',
		index: true,
		many: false,
	},
	createdAt: { type: Types.Datetime, default: Date.now },
	updatedAt: { type: Types.Datetime, default: Date.now },
});

Ticket.defaultSort = '-createdAt';

Ticket.register();
