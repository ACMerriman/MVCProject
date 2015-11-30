var mongoose = require('mongoose');
var _ = require('underscore');

var MultModel;

var setName = function(name)
{
	return _.escape(name).trim();
};

var MultSchema = new mongoose.Schema({
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

MultSchema.methods.toAPI = function()
{
	return {
		name: this.name,
		valA: this.valA,
		valB: this.valB,
		result: this.result
	};
};

MultModel = mongoose.model('Mult', MultSchema);

module.exports.MultModel = MultModel;
module.exports.MultSchema = MultSchema;