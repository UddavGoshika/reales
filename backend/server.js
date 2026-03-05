const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Using local JSON mock database for 100% stability and zero setup
console.log('Using robust local JSON mock database...');

const pageRoutes = require('./routes/pageRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const settingRoutes = require('./routes/settingRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/pages', pageRoutes);
app.use('/api/pages/:pageId/sections', sectionRoutes);
app.use('/api/settings', settingRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', database: 'mock (stabilized)' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
