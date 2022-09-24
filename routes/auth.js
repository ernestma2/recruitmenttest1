var express = require('express');
var router = express.Router();

const {register,login} = require('../controllers/auth.js')

/* GET users listing. */
router.route('/register').get(register) 
router.route('/login').get(login) //

module.exports = router;
