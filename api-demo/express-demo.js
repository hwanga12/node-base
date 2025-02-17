const express = require('express')
const app = express()
//express

let youtuber1 = {
  channelTitle : "십오야",
  sub : "593만명",
  videoNum : "700개"
}

let db = new Map()
var id = 1
db.set(id++, youtuber1)





// Rest api 설계
app.get('/youtubers', function (req, res) {
  res.json({
    message : "test"
  })
    
})

app.get('/youtuber/:id', function (req, res) {
  let {id} = req.params
  id = parseInt(id)
  
  res.json(db.get(id))
})

app.listen(1234)


app.use(express.json()) //http 외 모듈인 미들웨어 json 설정
app.post('/youtuber', function (req, res) {
    // 바디에 숨겨져서 들어온 데이터를 화면에 뿌려주기
    console.log(req.body)

    //등록은 맵에 저장
    db.set(id++, req.body)



    res.json({

      message : `${db.get(id-1).channelTitle} + 님, 유튜버 생활을 축하합니다`


    })
})