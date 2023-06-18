const { configDotenv } = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

console.log(process.env.TEST)

const configuration  = new Configuration({
    apiKey:process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)

module.exports = openai