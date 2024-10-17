const { TeamsActivityHandler } = require('botbuilder');
const cron = require('node-cron');
const dataService = require('../services/dataService');
const logger = require('../utils/logger');

class LimbergBot extends TeamsActivityHandler {
    constructor() {
        super();
        this.commands = {};
        this.setupPeriodicMessage();

        this.onMessage(async (context, next) => {
            await this.handleIncomingMessage(context);
            await next();
        });
    }

    setupPeriodicMessage() {
        cron.schedule('0 9 * * *', async () => {
            await this.sendPeriodicMessage();
        });
    }

    async sendPeriodicMessage() {
        logger.info('Sending periodic message');
        // Implement logic to send message to desired channel
    }

    async handleIncomingMessage(context) {
        const message = context.activity.text.toLowerCase();
        if (message.startsWith('!')) {
            const [command, ...args] = message.slice(1).split(' ');
            if (this.commands[command]) {
                await this.commands[command](context, args);
            } else {
                await context.sendActivity('Command not recognized.');
            }
        }
    }

    registerCommand(name, handler) {
        this.commands[name] = handler;
    }
}

module.exports = LimbergBot;
