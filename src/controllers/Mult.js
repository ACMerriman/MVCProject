var _ = require('underscore');
var models = require('../models');

var Mult = models.Mult;

var multPage = function(req, res)
{
	console.log("multPage");
	Mult.MultModel.find({}, function(err, docs)
	{
		if(err)
		{
			console.log(err);
			return res.status(400).json({error: 'an error occurred'});
		}
		
		res.render('mult.jade', {funcs: docs});
	});
};

var makeMult = function(req, res)
{
	console.log("makeMult");
	
	if(!req.body.valA || !req.body.valB)
	{
		return res.status(400).json({error: "All fields required"});
	}
	
	var valA = req.body.valA;
	var valB = req.body.valB;
	var name = "" + valA + " x " + valB;
	var result = parseFloat(valA) * parseFloat(valB);
	
	var multData = {
		name: name,
		valA: req.body.valA,
		valB: req.body.valB,
		result: result
	};
	
	var newMult = new Mult.MultModel(multData);
	
	newMult.save(function(err)
	{
		if(err)
		{
			console.log(err);
			return res.status(400).json({error: 'an error occurred'});
		}
		
		res.json({redirect: '/mult'});
	});
};

module.exports.multPage = multPage;
module.exports.makeMult = makeMult;