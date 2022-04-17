var express = require('express');
var router = express.Router();
var api = require('../controllers/api');


router.get('/list', api.list);

router.post('/create', api.create);

router.delete('/delete', api.deleteById);


module.exports = router;
