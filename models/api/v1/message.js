const mongoose = require("mongoose");
const Message = mongoose.model("Message", { user: String, text: String });

MediaSourceHandle.exports = Message;