const { CardFactory } = require('botbuilder');

module.exports = async (context) => {
    const imageUrl = 'https://example.com/pedro.jpg'; 
    const card = CardFactory.heroCard('Pedro', undefined, [imageUrl]);
    await context.sendActivity({ attachments: [card] });
};
