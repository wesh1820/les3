const express = require('express');
const router = express.Router();
const Message = require('../../../models/api/v1/message');

// Create a new message
const create = async (req, res) => {
    try {
        const { text, user } = req.body.message;

        if (!text || !user) {
            return res.status(400).json({
                status: 'error',
                message: 'User and text are required.',
            });
        }

        const message = new Message({ user, text });
        await message.save();

        res.json({
            status: 'success',
            data: { message },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to save message',
            error: err.message,
        });
    }
};

// Get all messages
const index = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json({
            status: 'success',
            data: { messages },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve messages',
            error: err.message,
        });
    }
};

// Stel de routes in
router.post('/', create);
router.get('/', index);

module.exports = router;
