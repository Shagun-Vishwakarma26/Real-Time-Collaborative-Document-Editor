const { Schema, model } = require("mongoose");

// This defines the structure of your document in the database
const DocumentSchema = new Schema({
  _id: String,   // This will store the unique ID from the URL
  data: Object,  // This will store the rich text content (Quill Delta)
});

// We export the model so your server.js can use it
module.exports = model("Document", DocumentSchema);