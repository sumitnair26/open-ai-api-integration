
const express = require('express')
const { generateMeta, generateImage } = require('./controllers/openaiController')

//app setup 
const app = express()
app.listen(4001, () => console.log(`listening for requests on port 4001`))


// middleware 
app.use(express.json())
app.use(express.static('public'))

// routes
app.post('/openai/meta', generateMeta)
app.post('/openai/image', generateImage)

