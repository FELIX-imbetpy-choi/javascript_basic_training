'use strict'


// "JSON과 메서드"
// 복잡한 객체를 다루고 있다고 가정해 봅시다
// 네트워크를 통해 객체를 어딘가에 보내거나 로깅 목적으로 객체를 출력해야 한다면
// 객체를 문자열로 전환해야 할 것 입니다
let user = {
    name: "John",
    age: 30,
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }       
};
console.log(user); // {name: "John", age: 30}

// 그런데 개발 과정에서 프로퍼티가 추가되거나 삭제, 수정될 수 있습니다. 
// 이렇게 되면 위에서 구현한 toString을 매번 수정해야 하는데 이는 아주 고통스러운 작업이 될 겁니다. 
// 프로퍼티에 반복문을 돌리는 방법을 대안으로 사용할 수 있는데, 
// 중첩 객체 등으로 인해 객체가 복잡한 경우 이를 문자열로 변경하는 건 까다로운 작업이라 이마저도 쉽지 않을 겁니다.



// "JSON.stringify"
// JSON.stringify – 객체를 JSON으로 바꿔줍니다.
// JSON.parse – JSON을 객체로 바꿔줍니다.

// 객체 student에 JSON.stringify를 적용해봅시다.
// 이렇게 변경된 문자열은 JSON으로 인코딩된(JSON-encoded), 직렬화 처리된(serialized), 문자열로 변환된(stringified), 
// 결집된(marshalled) 객체라고 부릅니다. 
// 객체는 이렇게 문자열로 변환된 후에야 비로소 네트워크를 통해 전송하거나 저장소에 저장할 수 있습니다.
let student = {
    name: 'jason',
    age: 30,
    isAdmin: false,
    courses: ['html','css','js'],
    wife:null
}
let json = JSON.stringify(student);
console.log(typeof json); // string
console.log(json);

// 문자열은 큰따옴표로 감싸야 합니다. JSON에선 작은따옴표나 백틱을 사용할 수 없습니다('John'이 "John"으로 변경된 것을 통해 이를 확인할 수 있습니다).
// 객체 프로퍼티 이름은 큰따옴표로 감싸야 합니다(age:30이 "age":30으로 변한 것을 통해 이를 확인할 수 있습니다).

// 숫자를 JSON으로 인코딩하면 숫자입니다.
console.log( JSON.stringify(1) ) // 1

// 문자열을 JSON으로 인코딩하면 문자열입니다(다만, 큰따옴표가 추가됩니다).
console.log( JSON.stringify('test') ) // "test"
console.log( JSON.stringify(true) ); // true
console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// JSON.stringify 호출 시 무시되는 프로퍼티는 아래와 같습니다.
let user = {
    sayHi() { // 무시
      alert("Hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined // 무시
};
console.log( JSON.stringify(user) ); // {} (빈 객체가 출력됨)

// JSON.stringify를 사용할 때 주의하셔야 할 점이 하나 있습니다. 
// 순환 참조가 있으면 원하는 대로 객체를 문자열로 바꾸는 게 불가능합니다.
let room = {
    number: 23
};
let meetup = {
title: "Conference",
participants: ["john", "ann"]
};
meetup.place = room;       // meetup은 room을 참조합니다.
room.occupiedBy = meetup; // room은 meetup을 참조합니다.
JSON.stringify(meetup); // Error: Converting circular structure to JSON




// "replacer로 원하는 프로퍼티만 직렬화하기"
// JSON.stringify의 전체 문법은 아래와 같습니다.

// let json = JSON.stringify(value[, replacer, space])
// value
// 인코딩 하려는 값
// replacer
// JSON으로 인코딩 하길 원하는 프로퍼티가 담긴 배열. 또는 매핑 함수 function(key, value)
// space
// 서식 변경 목적으로 사용할 공백 문자 수
// 대다수의 경우 JSON.stringify엔 인수를 하나만 넘겨서 사용합니다. 그런데 순환 참조를 다뤄야 하는 경우같이 전환 프로세스를 정교하게 조정하려면 두 번째 인수를 사용해야 합니다.
// JSON으로 변환하길 원하는 프로퍼티가 담긴 배열을 두 번째 인수로 넘겨주면 이 프로퍼티들만 인코딩할 수 있습니다.

let room = {
    number: 23
};
let meetup = {
title: "Conference",
participants: [{name: "John"}, {name: "Alice"}],
place: room // meetup은 room을 참조합니다.
};
room.occupiedBy = meetup; // room references meetup
alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

// 배열에 넣어준 프로퍼티가 잘 출력된 것을 확인할 수 있습니다. 
// 그런데 배열에 name을 넣지 않아서 출력된 문자열의 participants가 텅 비어버렸네요. 규칙이 너무 까다로워서 발생한 문제입니다.






// "space로 가독성 높이기"



// "커스텀 “toJSON”"



// "JSON.parse"




// "reviver 사용하기"




// 요약
// JSON은 독자적인 표준을 가진 데이터 형식으로, 대부분의 언어엔 JSON을 쉽게 다룰 수 있게 해주는 라이브러리가 있습니다.
// JSON은 일반 객체, 배열, 문자열, 숫자, 불린값, null을 지원합니다.
// JSON.stringify를 사용하면 원하는 값을 JSON으로 직렬화 할 수 있고, JSON.parse를 사용하면 JSON을 본래 값으로 역 직렬화 할 수 있습니다.
// 위 두 메서드에 함수를 인수로 넘겨주면 원하는 값만 읽거나 쓰는 게 가능합니다.
// JSON.stringify는 객체에 toJSON 메서드가 있으면 이를 자동으로 호출해줍니다.







