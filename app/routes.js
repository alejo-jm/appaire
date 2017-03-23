var router = require('express').Router();

/**
 * versions for the API
 * @type {Object}
 */
var versions = {'Version 1': 'v1'};


/**
 * require controllers by version
 * each one have specifics paths
 */
for(var keyname in versions){
	router.use('/api/'+versions[keyname], require('./controllers/'+versions[keyname]+'/calidadaire'));
}

module.exports = router;