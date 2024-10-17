const openaiService = require('../../services/openaiService');

module.exports = async (context, args) => {
    const question = args.join(' ');
    try {
        const answer = await openaiService.getAnswer(question);
        await context.sendActivity(answer);
    } catch (error) {
        console.error('Error getting answer:', error);
        await context.sendActivity('Sorry, I couldn\'t get an answer for that question.');
    }
};
