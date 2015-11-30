var _ = require('underscore');
var models = require('../models');

var Modular = models.Modular;

var modularPage = function(req, res)
{
	console.log("modularPage");
	Modular.ModularModel.find({}, function(err, docs)
	{
		if(err)
		{
			console.log(err);
			return res.status(400).json({error: 'an error occurred'});
		}
		
		res.render('modular.jade', {funcs: docs});
	});
};

var makeModular = function(req, res)
{
	console.log("makeModular");
	
	if(!req.body.valA || !req.body.valB)
	{
		return res.status(400).json({error: "All fields required"});
	}
	
	var valA = req.body.valA;
	var valB = req.body.valB;
	var name = "" + valA + " % " + valB;
	var result = parseFloat(valA) % parseFloat(valB);
	
	var modularData = {
		name: name,
		valA: req.body.valA,
		valB: req.body.valB,
		result: result
	};
	
	var newModular = new Modular.ModularModel(modularData);
	
	newModular.save(function(err)
	{
		if(err)
		{
			console.log(err);
			return res.status(400).json({error: 'an error occurred'});
		}
		
		res.json({redirect: '/modular'});
	});
};

module.exports.modularPage = modularPage;
module.exports.makeModular = makeModular;