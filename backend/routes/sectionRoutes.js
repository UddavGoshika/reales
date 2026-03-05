const express = require('express');
const router = express.Router({ mergeParams: true });
const { Section } = require('../mockDb');

router.get('/', async (req, res) => {
    try {
        const sections = await Section.find({ pageId: req.params.pageId }).sort({ sortOrder: 1 });
        res.json(sections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const saved = await Section.create({ ...req.body, pageId: req.params.pageId });
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Section.findByIdAndDelete(req.params.id);
        res.json({ message: 'Section deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
