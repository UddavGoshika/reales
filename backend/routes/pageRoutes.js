const express = require('express');
const router = express.Router();
const { Page } = require('../mockDb');

// Get all pages
router.get('/', async (req, res) => {
    try {
        const pages = await Page.find().sort({ createdAt: -1 });
        res.json(pages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create page
router.post('/', async (req, res) => {
    try {
        const saved = await Page.create(req.body);
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update page
router.put('/:id', async (req, res) => {
    try {
        const updated = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete page
router.delete('/:id', async (req, res) => {
    try {
        await Page.findByIdAndDelete(req.params.id);
        res.json({ message: 'Page deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
