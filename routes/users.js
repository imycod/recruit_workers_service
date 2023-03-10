var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('11111111111111111111111')
  res.send({
    code:200,
    data: {
        name: 'sikonggpw',
        age: 18
    }
  });
});

module.exports = router;
