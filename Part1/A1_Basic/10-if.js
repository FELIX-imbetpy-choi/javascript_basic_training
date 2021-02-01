"use strict";

// If
let year = 2015;
if (year == 2015) console.log( '정답입니다!' ); // 하나의 문을 실행할 때 이렇게


if (year == 2015) {
  console.log( "정답입니다!" );
  console.log( "아주 똑똑하시네요!" );
} // 여러개의 문을 실행하려면 이렇게


// To booleans
// 0, '', null, undefined, NaN 은 불린형으로 변환 시 모두 false 를 반환한다.

if(0){
    console.log('신이시여, 제발 나좀 드러나게 해줘~!@');
}

if (1) { // 1은 truthy입니다.
    console.log('감사합니다. 제가 드러나게 해줘서 ~!@!$')
}
  

// else 
let name = '준영';

if (name == '준영') {
    console.log(name, '이 이눔시키 잘 만났다.');
} else {
    console.log('사람 잘못 보셨습니다만?');
}


// else if
year = 2015;

if (year < 2015) {
    console.log('오1');
} else if (year > 2015) {
    console.log('오2');
} else if (year == 2015) {
    console.log('오3');
} else { // else 는 필수가 아니당.
    console.log('에라 모르겠다.');
}


// ? :
let age = 20;
let accessAllowed = (age > 18) ? true : false; // 괄호는 생략 가능, 가독성을 위해 쓰기
console.log(accessAllowed); // true


// 다중 ?
age = 19;
let message = (age < 3) ? '아기야 안녕?' : 
    (age < 20) ? '안녕?' :
    (age < 100) ? '장수왕 안녕?' :
    '나는 다신의 나이를 모르겠어 이제'
console.log(message);


// 부적절 ?
// ? 를 if 대용으로 사용하는 경우가 있다.
// 물음표 연산자?는 조건에 따라 반환 값을 달리하려는 목적으로 만들어졌습니다. 
// 이런 목적에 부합하는 곳에 물음표를 사용하시길 바랍니다. 
// 여러 분기를 만들어 처리할 때는 if를 사용하세요.