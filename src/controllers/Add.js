var _ = require('underscore');
var models = require('../models');

var Add = models.Add;

var addPage = function(req, res)
{
	console.log("addPage");
	Add.AddModel.find({}, function(err, docs)
	{
		if(err)
		{
			console.log(err);
			return res.status(400).json({error: 'an error occurred'});
		}
		
		res.render('add.jade', {funcs: docs});
	});
};

var makeAdd = function(req, res)
{
	console.log("makeAdd");
	
	if(!req.body.valA || !req.body.valB)
	{
		return res.status(400).json({error: "All fields required"});
	}
	
	var valA = req.body.valA;
	var valB = req.body.valB;
	var name = "" + valA + " + " + valB;
	var result = parseFloat(valA) + parseFloat(valB);
	
	var addData = {
		name: name,
		valA: req.body.valA,
		valB: req.body.valB,
		result: result
	};
	
	var newAdd = new Add.AddModel(addData);
	
	newAdd.save(function(err)
	{
		if(err)
		{
			console.log(err);
			return res.status(400).json({error: 'an error occurred'});
		}
		
		res.json({redirect: '/add'});
	});
};

module.exports.addPage = addPage;
module.exports.makeAdd = makeAdd;