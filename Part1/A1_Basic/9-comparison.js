"use strict";

// 1 boolean
console.log( "-----1 boolean-----" ); 
console.log( 2 > 1 ); //true
console.log( 2 == 1 ); //false
console.log( 2 != 1 ); //true

let result = 5 > 4;
console.log( result ); //true


// 2 string compare
// compare with unicode
console.log( "-----2 string compare-----" ); 
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true


// 3 compare between other type
// 비교하는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꾸어 비교합니다.
console.log( "-----3 compare between other type-----" ); 
console.log( '2' > 1 );  // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
console.log( '01' == 1 );  // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.
console.log( true == 1 ); // true
console.log( false == 0 ); // true

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!  'Boolean’을 사용한 명시적 변환하여 다른규칙이 사용됨


// 4 equality operator
console.log( "-----4 equality operator-----" ); 
console.log( 0 == false ); // true
console.log( '' == false ); // true
console.log( 0 === false ); // false, 피연산자의 형이 다르기 때문입니다.
