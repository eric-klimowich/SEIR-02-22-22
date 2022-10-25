const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.post('/', moviesCtrl.create);

module.exports = router;
