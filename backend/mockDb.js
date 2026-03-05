const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '..', 'database.json');

// Initialize database file
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ pages: [], sections: [], users: [], settings: [], media: [] }));
}

let dbCache = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));

const saveDb = () => {
    fs.writeFileSync(DB_FILE, JSON.stringify(dbCache, null, 2));
};

const uuid = () => Math.random().toString(36).substring(2, 15);

class MockModel {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    find(query = {}) {
        let results = dbCache[this.collectionName];
        if (query.pageId) {
            results = results.filter(x => x.pageId === query.pageId);
        }
        return {
            sort: (sortObj) => {
                // Simple sort ignore
                return Promise.resolve(results);
            },
            then: (resolve) => resolve(results)
        };
    }

    findOne(query) {
        const keys = Object.keys(query);
        const result = dbCache[this.collectionName].find(item => {
            return keys.every(key => item[key] === query[key]);
        });
        return Promise.resolve(result);
    }

    findById(id) {
        return this.findOne({ _id: id });
    }

    create(data) {
        const newItem = { _id: uuid(), createdAt: new Date().toISOString(), ...data };
        dbCache[this.collectionName].push(newItem);
        saveDb();
        return Promise.resolve(newItem);
    }

    findByIdAndUpdate(id, data, options) {
        let index = dbCache[this.collectionName].findIndex(x => x._id === id);
        if (index !== -1) {
            dbCache[this.collectionName][index] = { ...dbCache[this.collectionName][index], ...data };
            saveDb();
            return Promise.resolve(dbCache[this.collectionName][index]);
        }
        // If upsert
        if (options && options.upsert) {
            return this.create({ _id: id, ...data });
        }
        return Promise.resolve(null);
    }

    findOneAndUpdate(query, data, options) {
        const keys = Object.keys(query);
        let index = dbCache[this.collectionName].findIndex(item => keys.every(key => item[key] === query[key]));
        if (index !== -1) {
            dbCache[this.collectionName][index] = { ...dbCache[this.collectionName][index], ...data };
            saveDb();
            return Promise.resolve(dbCache[this.collectionName][index]);
        }
        if (options && options.upsert) {
            return this.create({ ...query, ...data });
        }
        return Promise.resolve(null);
    }

    findByIdAndDelete(id) {
        dbCache[this.collectionName] = dbCache[this.collectionName].filter(x => x._id !== id);
        saveDb();
        return Promise.resolve({ deleted: true });
    }

    deleteMany(query) {
        if (Object.keys(query).length === 0) {
            dbCache[this.collectionName] = [];
        }
        saveDb();
        return Promise.resolve({ deleted: true });
    }
}

module.exports = {
    Page: new MockModel('pages'),
    Section: new MockModel('sections'),
    User: new MockModel('users'),
    Setting: new MockModel('settings'),
    Media: new MockModel('media'),
};
