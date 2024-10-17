const dataService = require('../../services/dataService');

module.exports = async (context) => {
    const laws = await dataService.getLaws();
    const randomLaw = laws[Math.floor(Math.random() * laws.length)];
    await context.sendActivity(randomLaw);
};
