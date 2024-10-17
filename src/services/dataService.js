const fs = require('fs').promises;
const path = require('path');

class DataService {
    constructor() {
        this.jokes = null;
        this.laws = null;
    }

    async getJokes() {
        if (!this.jokes) {
            const data = await fs.readFile(path.join(__dirname, '../../data/jokes.json'), 'utf8');
            this.jokes = JSON.parse(data);
        }
        return this.jokes;
    }

    async getLaws() {
        if (!this.laws) {
            const data = await fs.readFile(path.join(__dirname, '../../data/laws.json'), 'utf8');
            this.laws = JSON.parse(data);
        }
        return this.laws;
    }
}

module.exports = new DataService();
