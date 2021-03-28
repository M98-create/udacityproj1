
const dotenv=require('dotenv')
dotenv.config()

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081



var path=require('path')

const cors = require('cors')
const express=require('express')
const bodyParser = require('body-parser')
const app=express()
app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static('dist'))


const axios = require("axios");

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})
const Key = process.env.Key;
app.get('/scanurl/*', async (req, res) => {
    try {
        const input=req.params[0]
     
      const solution=await axios.get(`${BASE_API_URL}?key=${Key}&url=${input}&lang=en`)
      const { agreement, subjectivity, confidence, irony,score_tag } = solution.data;
         res.send({
           agreement,
          subjectivity,
          confidence,
          irony,
          score_tag
         });
         res.status(200)
 
    } catch (error) {
        
        console.log(error.message)
    }
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports=app