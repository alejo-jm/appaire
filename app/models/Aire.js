var AppModel = require('./AppModel');
var util = require('util');

/**
 * model Aire extends AppModel
 */
function Aire (){ util.inherits(Aire, AppModel);
	/**
	 * init parent model
	 */
	AppModel.call(this);

	/**
	 * collection name
	 * @type {String}
	 */
	this.table = 'calidadaire';

	/**
	 * mongo collection
	 * @type {Object}
	 */
	this.collection = this.connect();

	/**
	 * find data using querystring params
	 * @return {array}
	 */
	this.find = function(cb){
		this.collection.find({}).limit(1).toArray(function(err, result) {
			cb(result);
		});
	};

}

module.exports = new Aire();