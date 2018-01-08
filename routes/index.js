var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const port = process.env.PORT || 3002;
app.listen(port);

module.exports = router;
