const express = require('express');
const router = express.Router();
const { User } = require('../mockDb');

router.post('/login', async (req, res) => {
    const { email } = req.body;
    // Simple bypass for demo
    const user = await User.findOne({ email }) || { _id: '1', name: 'Admin', role: 'super_admin' };
    res.json({ token: 'mock_token', user });
});

module.exports = router;
