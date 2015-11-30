var mongoose = require('mongoose');
var _ = require('underscore');

var ModularModel;

var setName = function(name)
{
	return _.escape(name).trim();
};

var ModularSchema = new mongoose.Schema({
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

ModularSchema.methods.toAPI = function()
{
	return {
		name: this.name,
		valA: this.valA,
		valB: this.valB,
		result: this.result
	};
};

ModularModel = mongoose.model('Modular', ModularSchema);

module.exports.ModularModel = ModularModel;
module.exports.ModularSchema = ModularSchema;