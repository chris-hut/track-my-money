var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  // And insert something like this instead:
  res.json([
    {
      "date": "2017-12-08",
      "id": 1,
      "amount": 9.19,
      "reason": "Money left over"
    },
    {
      "date": "2017-12-08",
      "id": 2,
      "amount": 30,
      "reason": "Hotel Garuda Tickets"
    },
    {
      "date": "2018-01-02",
      "id": 3,
      "amount": 100,
      "reason": "Soundwave Ticket"
    }
  ]);
});

module.exports = router;