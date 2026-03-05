const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    pageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Page', required: true },
    type: { type: String, required: true }, // hero, text, features, etc.
    sortOrder: { type: Number, default: 0 },
    isVisible: { type: Boolean, default: true },
    content: { type: mongoose.Schema.Types.Mixed, default: {} },
    styling: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Section', SectionSchema);
