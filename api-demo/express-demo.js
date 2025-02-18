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

  

  db.forEach(function(youtuber){
    console.log(youtuber)
  })


  var jsonObject = {}
  db.forEach(function(value, key){
    jsonObject[key] = value
  });

  res.json(jsonObject)
})

app.get('/youtubers/:id', function (req, res) {
  let {id} = req.params
  id = parseInt(id)
  
  res.json(db.get(id))
})

app.listen(1234)


app.use(express.json()) //http 외 모듈인 미들웨어 json 설정
app.post('/youtubers', function (req, res) {
    // 바디에 숨겨져서 들어온 데이터를 화면에 뿌려주기
    console.log(req.body)

    //등록은 맵에 저장
    db.set(id++, req.body)



    res.json({

      message : `${db.get(id-1).channelTitle} + 님, 유튜버 생활을 축하합니다`


    })
})

app.delete('/youtubers/:id', function(req, res) {
  let {id} = req.params
  id = parseInt(id)

  var youtuber = db.get(id)
  if (youtuber == undefined) {
     res.json({
      message : `요청하신 ${id}번은 없습니다.`
     })
    } else {
      const channelTitle = youtuber.channelTitle
      db.delete(id)
      
      res.json({
        message : `${channelTitle}__님 ㅎㅇ연`
      })
    }


})

app.delete('/youtubers', function(req, res) {
  var msg = ""
  //db값이 한개 이상이면, 전체 삭제
  if (db.size >= 1) {
    db.clear()
    msg = "전체 유튜버 삭제"
    
  } else { //값이 없으면
    msg = "삭제할 유튜버가 없습니다."
    
  }

  res.json({
    message :msg
  })
  
})


app.put('/youtubers/:id', function(req, res) {
  let {id} = req.params
  id = parseInt(id)

  var youtuber = db.get(id)
  var oldTitle = youtuber.channelTitle
  if (youtuber == undefined) {
     res.json({
      message : `요청하신 ${id}번은 없습니다.`
     })
    } else {
      var newTitle = req.body.channelTitle

      youtuber.channelTitle = newTitle
      db.set(id, youtuber)


      res.json({
        message : `${oldTitle}님, 채널명이 ${newTitle}로 수정되었습니다`
      })
      
    } 
 
})