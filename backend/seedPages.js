const { Page, Section, Media, Setting } = require('./mockDb');

const seedAll = async () => {
    try {
        console.log('Seeding Premium CMS Data...');

        // 1. Clear All
        await Page.deleteMany({});
        await Section.deleteMany({});
        await Media.deleteMany({});
        await Setting.deleteMany({});

        // 2. Seed Settings
        await Setting.create({ key: 'siteName', value: 'Astra & Goutam Valley' });
        await Setting.create({ key: 'primaryColor', value: '#C6A75E' });
        await Setting.create({ key: 'contactEmail', value: 'sales@astragoutam.com' });
        await Setting.create({ key: 'logoUrl', value: '/logo-gold.png' });
        await Setting.create({ key: 'seoTitle', value: 'Luxury Real Estate | Astra Goutam' });

        // 3. Seed Media
        const mediaItems = [
            { fileName: 'Hero Background', fileUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', fileType: 'image/jpeg' },
            { fileName: 'Modern Villa', fileUrl: 'https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&w=800&q=80', fileType: 'image/jpeg' },
            { fileName: 'Living Room', fileUrl: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80', fileType: 'image/jpeg' },
            { fileName: 'Astra Garden', fileUrl: 'https://images.unsplash.com/photo-1541976535035-24bd6582bb75?auto=format&fit=crop&w=800&q=80', fileType: 'image/jpeg' }
        ];
        for (const item of mediaItems) await Media.create(item);

        // 4. Seed Pages & Sections
        const homePage = await Page.create({ title: 'Home', slug: 'home', status: 'published' });
        const aboutPage = await Page.create({ title: 'About Us', slug: 'about', status: 'published' });
        const pricingPage = await Page.create({ title: 'Pricing Plan', slug: 'pricing', status: 'published' });

        // Home Sections
        await Section.create({
            pageId: homePage._id,
            type: 'Hero',
            sortOrder: 0,
            content: {
                title: 'Live the Astra Lifestyle',
                subtitle: 'Goutam Valley offers the ultimate blend of luxury and nature.',
                backgroundImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
            }
        });

        await Section.create({
            pageId: homePage._id,
            type: 'Features',
            sortOrder: 1,
            content: {
                heading: 'Featured Residences',
                description: 'Explore our hand-picked selection of premium apartments and villas.'
            }
        });

        console.log('Successfully seeded all premium content!');
        process.exit(0);
    } catch (err) {
        console.error('Seeding failed:', err);
        process.exit(1);
    }
};

seedAll();
