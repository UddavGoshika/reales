const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cms_dashboard', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        const adminEmail = 'admin@example.com';
        const adminPassword = 'adminpassword123';

        let user = await User.findOne({ email: adminEmail });
        if (user) {
            console.log('Admin user already exists!');
            process.exit(0);
        }

        user = new User({
            name: 'Super Admin',
            email: adminEmail,
            password: adminPassword,
            role: 'super_admin'
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(adminPassword, salt);

        await user.save();
        console.log('Admin user created successfully!');
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);

        process.exit(0);
    } catch (err) {
        console.error('Error seeding admin user:', err);
        process.exit(1);
    }
};

seedAdmin();
