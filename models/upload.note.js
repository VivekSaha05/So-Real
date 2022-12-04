const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    note : {
        type : String,
        required : true
    },
    uploadTime : {
        type: Date,
        default : Date.now()
    },
    uploader:{
        name: String,
        required : true
    }
})

const UploadNote = mongoose.model('upload.note',uploadSchema);
module.exports = UploadNote;