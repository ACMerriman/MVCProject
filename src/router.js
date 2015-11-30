var controllers = require('./controllers');

var router = function(app)
{
	// app.get("/login", controllers.Account.loginPage);
	// app.post("/login", controllers.Account.login);
	// app.get("/signup", controllers.Account.signupPage);
	app.get("/modular", controllers.Modular.modularPage);
	app.post("/modular", controllers.Modular.makeModular);
	app.get("/mult", controllers.Mult.multPage);
	app.post("/mult", controllers.Mult.makeMult);
	app.get("/add", controllers.Add.addPage);
	app.post("/add", controllers.Add.makeAdd);
	app.get("/", controllers.Add.addPage);
};

module.exports = router;