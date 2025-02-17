const express = require('express')
const app =express()


app.listen(1234)

let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "700개"
}

app.get('/:nickname', function(req, res) {
    
    const {nickname} = req.params

    if (nickname == "@15ya.fullmoon") {
        res.json(youtuber1)
    } else {
        res.json({
            message : "알 수 없음"
        })
    }
    // 개발자가 예상하지 못한 에러 = 예외
    
    
})