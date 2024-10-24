const Message = require('../../../models/api/v1/message');

// Functie voor het aanmaken van een nieuw bericht
const create = (req, res) => {
    console.log('Request body:', req.body); // Voor debugging
    const { user, text } = req.body;

    if (!user || !text) {
        return res.status(400).json({
            status: 'error',
            message: 'User and text are required'
        });
    }

    const newMessage = new Message({ user, text });

    newMessage.save()
        .then((message) => {
            res.json({
                status: 'success',
                data: { message }
            });
        })
        .catch(err => {
            console.error('Error saving message:', err);
            res.status(500).json({
                status: 'error',
                message: 'Error creating message',
                error: err.message
            });
        });
};

// Functie voor het ophalen van alle berichten
const index = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json({
            status: 'success',
            data: { messages }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving messages',
            error: err.message
        });
    }
};

module.exports = {
    create,
    index,
};
