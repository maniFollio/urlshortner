const express = require('express');
const router = express.Router();
const shortController = require('../controllers/shortController');

router.get('/', shortController.getIndex);
router.post('/shorten', shortController.postLongUrl);
router.get('/:shortCode', shortController.getShortUrl);

module.exports = router;
