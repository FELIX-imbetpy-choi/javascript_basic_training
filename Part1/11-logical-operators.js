'use strict'

// 논리 연산자 
// 논리 연산자는 피연산자로 불린형 뿐 아니라 모든 타입의 값을 받을 수 있습니다.
// 연산의 결과 역시 모든 타입이 될 수 있습니다.


// || (or)
// 전통적으로 or 은 인수 중 하나라도 true 이면, true 를 반환하는 불린값 조작으로 사용합니다.
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

if ( 1 || 0 ) {
    console.log('truthy');
}

let hour = 9;
if (hour < 10 || hour == 10){
    console.log('영업시간이 아닙니다.');
}
// 왼쪽부터 오른쪽으로 피연산자를 평가합니다.
// 각 피연산자를 불린형으로 변환합니다. 변환 후 값이 true 면 연산을 멈추고 원래 값을 반환합니다.
// 모든 피연산자가 false 일 땐 마지막 피연산자를 반환합니다.
// result = value1 || value2 || value3; 

console.log( 1 || 0 );
console.log( null || 1 );
console.log( null || 0 || 1 );
console.log( undefined || null || 0 );
let firstName = "";
let lastName = "";
let nickName = "바이올렛";
console.log( firstName || lastName || nickName || "익명");
true || console.log("not printed");
false || console.log("printed");


// && (AND)
// result = a && b;
// AND 연산자는 첫 번째 falsy를 반환합니다.

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

const name = 'jun';
const age = 29
if (name == 'jun' && age == 29) {
    console.log('truely he is truee');
}
// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
// 모두가 참이면 마지막 값이 반환됩니다.
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5
console.log( 1 && 2 && null && 3 ); // null
console.log( 1 && 2 && 3 ); // 마지막 값, 3
// &&의 우선순위가 ||보다 높습니다.
// 따라서 a && b || c && d는 (a && b) || (c && d)와 동일하게 동작합니다.
// if를 || 나 && 로 대체하지 마세요.


// ! (NOT)
// result = !value;
// NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.

console.log( !true ); // false
console.log( !0 ); // true
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false








