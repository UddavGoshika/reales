const express = require('express');
const router = express.Router();
const { Media } = require('../mockDb');

router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/upload-demo', async (req, res) => {
    try {
        const saved = await Media.create(req.body);
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Media.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
