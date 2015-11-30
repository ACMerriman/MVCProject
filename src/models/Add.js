var mongoose = require('mongoose');
var _ = require('underscore');

var AddModel;

var setName = function(name)
{
	return _.escape(name).trim();
};

var AddSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
		trim: true,
		set: setName
	},
	
	valA: {
		type: Number,
		required: true
	},
	
	valB: {
		type: Number,
		required: true
	},
	
	result: {
		type: Number,
		required: true
	},
	
	createdData: {
		type: Date,
		default: Date.now
	}
	
});

AddSchema.methods.toAPI = function()
{
	return {
		name: this.name,
		valA: this.valA,
		valB: this.valB,
		result: this.result
	};
};

AddModel = mongoose.model('Add', AddSchema);

module.exports.AddModel = AddModel;
module.exports.AddSchema = AddSchema;