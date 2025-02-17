const express = require('express')
const app = express()
const port = 1234


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.post('/test', function (req, res) {
    // 바디에 숨겨져서 들어온 데이터를 화면에 뿌려주기


    console.log(req.body.message)
    res.json(req.body)
})

app.listen(port, (req, res) => {
    console.log(`Example app litening on port ${port}`)
})