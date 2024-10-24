const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Berichten Schema
const MessageSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);
