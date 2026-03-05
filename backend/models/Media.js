const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    fileUrl: { type: String, required: true },
    fileType: { type: String },
    fileSize: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Media', MediaSchema);
