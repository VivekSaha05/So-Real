// Upload.js
const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  name:{
    type: String,
    required: true,
  },
  caption:{
    type: String,
    required: true,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Upload = mongoose.model("upload", UploadSchema);