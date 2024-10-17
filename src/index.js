const LimbergBot = require('./bot/LimbergBot');
const jokeCommand = require('./bot/commands/jokeCommand');
const pedroCommand = require('./bot/commands/pedroCommand');
const lawsCommand = require('./bot/commands/lawsCommand');
const answerCommand = require('./bot/commands/answerCommand');

const bot = new LimbergBot();

bot.registerCommand('joke', jokeCommand);
bot.registerCommand('pedro', pedroCommand);
bot.registerCommand('laws', lawsCommand);
bot.registerCommand('answer', answerCommand);

module.exports = async function (context, req) {
    await bot.run(context);
};
