var router = require('express').Router();
var Aire = require('../../models/Aire');

/* GET home page. */
router.post('/calidadaire', function(req, res, next) {
	Aire.find(function(result){
		res.json({'response':result});
	});
});

module.exports = router;