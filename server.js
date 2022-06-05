const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

const parks = {
    'Glacier':{
        'location': 'Montana',
        'date': 'May 11, 1910',
        'size': 1013126,
        'visitors': 3081656
    },
    'Zion':{
        'location': 'Utah',
        'date': 'November 19, 1919',
        'size': 147243,
        'visitors': 5039835
    },
    'Grand Canyon':{
        'location': 'Arizona',
        'date': 'February 26, 1919',
        'size': 1201647,
        'visitors': 4532677
    },
    'unknown':{
        'location': 'unknown',
        'date': 0,
        'size': 0,
        'visitors': 0
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res)=>{
    res.json(parks)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}, betta go catch it!`)
})