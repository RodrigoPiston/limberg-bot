const { CardFactory } = require('botbuilder');

module.exports = async (context) => {
    const imageUrl = 'https://example.com/pedro.jpg'; // Replace with actual image URL
    const card = CardFactory.heroCard('Pedro', undefined, [imageUrl]);
    await context.sendActivity({ attachments: [card] });
};
