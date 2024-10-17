const axios = require('axios');
const config = require('config');

const openaiApiKey = config.get('openai.apiKey');

class OpenAIService {
    async getAnswer(question) {
        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: question,
                max_tokens: 100
            }, {
                headers: {
                    'Authorization': `Bearer ${openaiApiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            throw error;
        }
    }
}

module.exports = new OpenAIService();
