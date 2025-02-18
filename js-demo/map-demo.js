//map 함수 메소드 vs foreach의 차이

const arr = [1, 2, 3, 4, 5]



// 콜백함수가 하는 일?
// 객체에서 요소를 하나 꺼낸 다음 불리우는 콜백함수
const foreachArr = arr.forEach(function(a, b) {
    // 데이터, 인덱스, 객체 통째로
    return a * 2

})

const mapArr = arr.map(function(a, b) {
    // 데이터, 인덱스, 객체 통째로
    return a * 2

})

console.log(`foreach로 return하면 ${foreachArr},
    map으로 return하면 ${mapArr}`)