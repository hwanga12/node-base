//for each는 배열 

const arr = [1, 2, 3, 4, 5]



// 콜백함수가 하는 일?
// 객체에서 요소를 하나 꺼낸 다음 불리우는 콜백함수
arr.forEach(function(a, b) {
    // 데이터, 인덱스, 객체 통째로
    // console.log(`a: ${a}, b: ${b}`)

})


//map + foreach

let map = new Map()
map.set(7, "seven")
map.set(8, "eight")
map.set(9, "nine")

map.forEach(function(a, b) {
    console.log(`a: ${a}, b : ${b}`)
})