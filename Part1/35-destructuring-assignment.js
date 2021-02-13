'use strict'


// "구조 분해 할당"



// "배열 분해하기"
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]
// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;
alert(firstName); // Bora
alert(surname);  // Lee

// 아래 예시처럼 split 같은 반환 값이 배열인 메서드를 함께 활용해도 좋습니다.
let [firstName, surname] = "Bora Lee".split(' ');

// '분해(destructuring)'는 '파괴(destructive)'를 의미하지 않습니다.

// 쉼표를 사용하여 요소 무시하기
// 쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있습니다.
// 두 번째 요소는 필요하지 않음
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul

// 할당 연산자 우측엔 모든 이터러블이 올 수 있습니다.
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// 할당 연산자 좌측엔 뭐든지 올 수 있습니다.
// 할당 연산자 좌측엔 ‘할당할 수 있는(assignables)’ 것이라면 어떤 것이든 올 수 있습니다.
let user = {};
[user.name, user.surname] = "Bora Lee".split(' ');
alert(user.name); // Bora

// .entries()로 반복하기
user = {
    name: "John",
age: 30
};
// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
alert(`${key}:${value}`); // name:John, age:30이 차례대로 출력
}

// 변수 교환 트릭
let guest = "Jane";
let admin = "Pete";
// 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
[guest, admin] = [admin, guest];
alert(`${guest} ${admin}`); // Pete Jane(값 교환이 성공적으로 이뤄졌습니다!)

// 할당하고자 하는 변수의 개수가 분해하고자 하는 배열의 길이보다 크더라도 에러가 발생하지 않습니다. 할당할 값이 없으면 undefined로 취급되기 때문입니다.
let [firstName, surname] = [];
alert(firstName); // undefined
alert(surname); // undefined





// "객체 분해하기"
// 할당 연산자 우측엔 분해하고자 하는 객체를, 좌측엔 상응하는 객체 프로퍼티의 '패턴’을 넣습니다. 분해하려는 객체 프로퍼티의 키 목록을 패턴으로 사용하는 예시를 살펴봅시다.
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {title, width, height} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

// let {...} 안의 순서가 바뀌어도 동일하게 동작함
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

//객체 프로퍼티를 프로퍼티 키와 다른 이름을 가진 변수에 저장해봅시다. 
// options.width를 w라는 변수에 저장하는 식으로 말이죠. 좌측 패턴에 콜론(:)을 사용하면 원하는 목표를 달성할 수 있습니다.
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { 객체 프로퍼티: 목표 변수 }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200




// "중첩 구조 분해"




// "똑똑한 함수 매개변수"





// // 요약
// 구조 분해 할당을 사용하면 객체나 배열을 변수로 연결할 수 있습니다.

// 객체 분해하기:
// let {prop : varName = default, ...rest} = object
// object의 프로퍼티 prop의 값은 변수 varName에 할당되는데, object에 prop이 없으면 default가 varName에 할당됩니다.
// 연결할 변수가 없는 나머지 프로퍼티들은 객체 rest에 복사됩니다.

// 배열 분해하기:
// let [item1 = default, item2, ...rest] = array
// array의 첫 번째 요소는 item1에, 두 번째 요소는 변수 item2에 할당되고, 이어지는 나머지 요소들은 배열 rest 저장됩니다.
// 할당 연산자 좌측의 패턴과 우측의 구조가 같으면 중첩 배열이나 객체가 있는 복잡한 구조에서도 원하는 데이터를 뽑아낼 수 있습니다.

