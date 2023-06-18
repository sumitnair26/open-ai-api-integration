
/*
// move code to Express APP 
const { title } = require('process')
const readline = require('readline') 
*/
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






/*
Lets move this Code to Express APP
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('YouTube Video Title: \n', generateMeta)

rl.question('Provide Youtube title to genereate Youtube thumbnail : \n', generateImage)
*/