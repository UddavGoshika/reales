const express = require('express');
const router = express.Router();
const { Setting } = require('../mockDb');

router.get('/', async (req, res) => {
    try {
        const settings = await Setting.find();
        const settingsMap = {};
        settings.forEach(s => settingsMap[s.key] = s.value);
        res.json(settingsMap);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/', async (req, res) => {
    try {
        const promises = Object.keys(req.body).map(key => {
            return Setting.findOneAndUpdate({ key }, { value: req.body[key] }, { upsert: true });
        });
        await Promise.all(promises);
        res.json({ success: true });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
