const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hi you are running the app id number : ' + process.env.APPID)
})

app.get('/app1', (req, res) => {
    res.send('Hi you are running the app id number : ' + process.env.APPID + " and this is the app1")
})

app.get('/app2', (req, res) => {
    res.send('Hi you are running the app id number : ' + process.env.APPID + " and this is the app2")
})


app.get('/ADMIN', (req, res) => {
    res.send('Hi you are running the app id number : ' + process.env.APPID + " and this is the ADMIN page")
})

app.listen(3000, err => {
    console.log('listening on posrt 3000')
})