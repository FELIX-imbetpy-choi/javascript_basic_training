'use strict'


// "객체"
// 자료형 챕터에서 배웠듯이 자바스크립트엔 여덟 가지 자료형이 있습니다.
// 이 중 일곱 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있어 '원시형(primitive type)'이라 부릅니다.
// 그런데 객체형은 원시형과 달리 다양한 데이터를 담을 수 있습니다. 
// 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있죠. 
// 객체는 자바스크립트 거의 모든 면에 녹아있는 개념이므로 자바스크립트를 잘 다루려면 객체를 잘 이해하고 있어야 합니다.
// 객체는 중괄호 {…}를 이용해 만들 수 있습니다.
//  중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 
// 키엔 문자형, 값엔 모든 자료형이 허용됩니다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.

// 객체를 만드는 두가지 방법
let user = new Object(); // '객체 생성자' 문법
let user2 = {};  // '객체 리터럴' 문법


// "리터럴과 프로퍼티"
// 서랍장에 파일을 추가하고 뺄 수 있듯이 개발자는 프로퍼티를 추가, 삭제할 수 있습니다.
let user3 = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30        // 키: "age", 값: 30
  };

// // 프로퍼티 값 얻기
console.log( user3.name ); // John
console.log( user3.age ); // 30

// 프로퍼티 값엔 모든 자료형이 올 수 있습니다. 불린형 프로퍼티를 추가해봅시다.
user3.isAdmin = true;

// delete 연산자를 사용하면 프로퍼티를 삭제할 수 있습니다.
delete user3.age;

// 여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 합니다.
// 마지막 프로퍼티 끝은 쉼표로 끝날 수 있습니다.
let user4 = {
    name: "John",
    age: 30,
    "likes birds": true,  // 복수의 단어는 따옴표로 묶어야 합니다.
  };

// 상수 객체는 수정될 수 있습니다.
// 주의하세요. const로 선언된 객체는 수정될 수 있습니다.
// (*)로 표시한 줄에서 오류를 일으키는 것처럼 보일 수 있지만 그렇지 않습니다. 
// const는 user의 값을 고정하지만, 그 내용은 고정하지 않습니다.
const user5 = {
    name: "John"
  };
  
user5.name = "Pete"; // (*)
console.log(user5.name); // Pete




// "대괄호 표기법"
// 여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없습니다.
// user.likes birds = true 에서 문법적 에러 발생
// 대괄호 표기법 안에서 문자열을 사용할 땐 문자열을 따옴표로 묶어줘야 한다는 점
let user6 = {};
// set
user6["likes birds"] = true;

// get
console.log(user6["likes birds"]); // true

// delete
delete user6["likes birds"];

// 변수 key는 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경될 수 있습니다.
//  어떤 경우든, 평가가 끝난 이후의 결과가 프로퍼티 키로 사용됩니다. 
// 이를 응용하면 코드를 유연하게 작성할 수 있습니다.
let user7 = {
    name: "John",
    age: 30
};
let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
// 변수로 접근
console.log( user7[key] ); // John (프롬프트 창에 "name"을 입력한 경우)
 
//그런데 점 표기법은 이런 방식이 불가능합니다.
let user8 = {
    name: "John",
    age: 30
};
let key = "name";
alert( user8.key ) // undefined


// 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 
// 이를 계산된 프로퍼티(computed property) 라고 부릅니다.
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};
console.log( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

// 한편, 다음 예시처럼 대괄호 안에는 복잡한 표현식이 올 수도 있습니다.
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};



// "‘in’ 연산자로 프로퍼티 존재 여부 확인하기"
// in 왼쪽엔 반드시 프로퍼티 이름이 와야 합니다. 프로퍼티 이름은 보통 따옴표로 감싼 문자열입니다.
let user9 = { name: "John", age: 30 };
console.log( "age" in user9 ); // user.age가 존재하므로 true가 출력됩니다.
console.log( "blabla" in user9 ); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.



// "‘for…in’ 반복문"
let user10 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user10) {
// 키
console.log( key );  // name, age, isAdmin
// 키에 해당하는 값
console.log( user[key] ); // John, 30, true
}



// "객체 정렬 방식"
// 정수 프로퍼티(integer property)는 자동으로 정렬되고, 
// 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬됩니다. 자세한 내용은 예제를 통해 살펴봅시다.


