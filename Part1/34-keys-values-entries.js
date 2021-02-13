'use strict'


// "Object.keys, values, entries"
// 개별 자료 구조에서 한발 뒤로 물러나서 순회에 대해서 생각해봅니다.개별
// 이전 챕터에서 map.keys(), map.values(), map.entries()와 같은 메서드들에 대해 알아보았습니다.
// 이 매서드 들은 포괄적인 용도로 만들어 졌기 때문에 이 메서드들이 적용될 수 있는 자료 구조는 일련의 합의를 준수해야 합니다
// keys(), values(), entries()는 아래와 같은 자료구조에 적용할 수 있습니다.
// Map
// Set
// Array
// 일반 객체에도 유사한 메서드를 적용할 수 있는데, Map, Set, Array에 적용하는 메서드와는 문법이 약간 다릅니다.



// "Object.keys, values, entries"
// 일반 객체엔 다음과 같은 메서드를 사용할 수 있습니다.
// Object.keys(obj) – 키가 담긴 배열을 반환합니다.
// Object.values(obj) – 값이 담긴 배열을 반환합니다.
// Object.entries(obj) – [key, value] 쌍이 담긴 배열을 반환합니다.

// Map, Set, Array에 적용하는 메서드와 객체에 적용하는 메서드의 차이를 맵을 기준으로 비교하면 다음과 같습니다.
// 첫 번째 차이는 obj.keys()가 아닌 Object.keys(obj)를 호출한다는 점입니다.
// 두 번째 차이는 메서드 Object.*를 호출하면 iterable 객체가 아닌 객체의 한 종류인 배열을 반환한다는 점입니다. ‘진짜’ 배열을 반환하는 이유는 하위 호환성 때문입니다.
let user = {
    name: "John",
    age: 30
  };
//   Object.keys(user) = ["name", "age"]
//   Object.values(user) = ["John", 30]
//   Object.entries(user) = [ ["name","John"], ["age",30] ]
user = {
    name: "John",
    age: 30
};

// 값을 순회합니다.
for (let value of Object.values(user)) {
console.log(value); // John, 30
}

// Object.keys, values, entries는 심볼형 프로퍼티를 무시합니다.
// for..in 반복문처럼, Object.keys, Object.values, Object.entries는 키가 심볼형인 프로퍼티를 무시합니다.





// "객체 변환하기"
// 객체엔 map, filter 같은 배열 전용 메서드를 사용할 수 없습니다.
// 하지만 Object.entries와 Object.fromEntries를 순차적으로 적용하면 객체에도 배열 전용 메서드 사용할 수 있습니다. 적용 방법은 다음과 같습니다.
// Object.entries(obj)를 사용해 객체의 키-값 쌍을 요소로 갖는 배열을 얻습니다.
// 1.에서 만든 배열에 map 등의 배열 전용 메서드를 적용합니다.
// 2.에서 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌립니다.
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
let doublePrices = Object.fromEntries(
// 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(doublePrices.meat); // 8


let test = {
    a:1,
    b:2,
    c:3,
}
console.log(Object.fromEntries((Object.entries(test).map(([key, value]) => [key,value * 2]))));







