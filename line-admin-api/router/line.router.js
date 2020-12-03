const express = require('express');
const router = express.Router();
const LineControllers = require('../controllers/line.controller');

router.get('/', ((req, res, next) => {
    res.status(200).json({
        message:'ok'
    })
}))
router.post('/line/push_message', LineControllers.pushMessage);
router.post('/line/reply_message', LineControllers.replyMessage);

module.exports = router;