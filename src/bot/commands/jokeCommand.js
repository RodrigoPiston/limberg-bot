const dataService = require('../../services/dataService');

module.exports = async (context) => {
    const jokes = await dataService.getJokes();
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    await context.sendActivity(randomJoke);
};
