const openai = require('../config/openaiConfig')
console.log('came under generate meta');
/*
    Function to generate Yutube Keywords 
*/
const generateMeta = async (req, res) => {

    const { title } = req.body

    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: `come up with your YouTube description ${title}`
            }
        ],
        max_tokens: 100
    })

    const tags = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: `come up with 10 keywords for YouTube video called ${title}`
            }
        ],
        max_tokens: 100
    })
    //console.log(description.data.choices[0].message)
    res.status(200).json({
        description: description.data.choices[0].message,
        tags: tags.data.choices[0].message
    })

}

const generateImage = async (req, res) => {

    const image = await openai.createImage({
        prompt: req.body.prompt,
        n:1,
        size: '512x512'
    })

    res.json({
        url: image.data.data[0].url
    })

    //console.log(image.data.data[0].url)
}

module.exports = { generateMeta,  generateImage}