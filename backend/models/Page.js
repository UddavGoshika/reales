const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    seoTitle: { type: String },
    seoDescription: { type: String },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
}, { timestamps: true });

module.exports = mongoose.model('Page', PageSchema);
