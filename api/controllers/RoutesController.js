/**
 * RoutesController
 *
 * @description :: Server-side logic for managing routes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	hello: function(req, res){
		var name = req.param('name');
		res.send("hello " + name);
	}
	
};

