var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

/**
 * Main Model all models extends this one
 */
function AppModel () {
	/**
	 * keep scope clean
	 * @type {AppModel}
	 */
	var scope = this;

	/**
	 * string
	 * @type {String}
	 */
	var url = process.env.MONGO_URL;

	/**
	 * mongodb reference
	 * @type {Object}
	 */
	var db = null;

	/**
	 * collection name
	 * @type {String}
	 */
	this.table = 'calidadaire';

	/**
	 * mongo collection
	 * @type {Object}
	 */
	this.collection = {};

	/**
	 * connect to mongo server and return the collection
	 * @param  {Function} cb callback
	 * @return {collection}
	 */
	this.connect = function(cb) {
		MongoClient.connect(url, function(err, db) {
			assert.equal(null, err);
			scope.db = db;
			scope.collection = db.collection(scope.table);
		});
	};

	/**
	 * close connection to the database
	 * @return {void}
	 */
	this.close = function(){
		db.close();
	};
}

module.exports = AppModel;