const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/message');

router.post('/', messageController.create);
router.get('/', messageController.index);

module.exports = router;