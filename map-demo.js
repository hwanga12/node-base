//db를 만든다 -> 테스트 -> 익스프레스
const express = require('express')
const app = express()
app.listen(1234)

app.get('/:id', function (req, res) {
    let {id} =req.params //const는 안되고 let은 된다?
    id = parseInt(id)  // "숫자" -> 숫자
    
    if (db.get(id) == undefined) {
        res.json({
            message: "없는 상품입니다."
        })
    } else {
        product = db.get(id)
        product["id"] =  id
        res.json(product)
    }
      


    
})


let db = new Map()

let notebook = {
    productName : "Notebook",
    price : 200000
}

let cup = {
    productName : "Cup",
    price : 200000
}

let chair = {
    productName : "Chair",
    price : 200000
}

let poster = {
    productName : "Poster",
    price : 200000
}
db.set(1, notebook) //키로 벨류를 찾을 수 있는 한쌍을 저장
db.set(2, cup)
db.set(3, chair)
db.set(4, poster) //string만 담던 map을 객체로 바꾸다.. 문자열을 지우고 객체를 담아

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))
console.log(db.get(4))