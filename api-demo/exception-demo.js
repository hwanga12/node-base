const express = require('express')
const app = express()
app.listen(1234)

const fruits = [
    {id : 1, name : 'apple'},
    {id : 2, name : 'grape'}
]

//과일 전체 조회
app.get('/fruits', (req, res) => {
    res.json(fruits)
})

//과일 개별 조회
// app.get('/fruits')