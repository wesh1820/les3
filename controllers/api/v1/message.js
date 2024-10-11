const Message = require("../../models/api/v1/Message");

const create = (req, res) => {
  const user = req.body.message.user;
  const text = req.body.message.text;

  const m = new Message({ user, text });

  m.save()
    .then(() => {
      res.json({
        status: "success",
        data: {
          message: m,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Message could not be saved",
        error: err.message,
      });
    });
};

const index = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({
      status: "success",
      data: {
        messages: messages,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Could not retrieve messages",
      error: err.message,
    });
  }
};

module.exports = {
  create,
  index,
};
