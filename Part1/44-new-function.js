'use strict'


// "'new Function' 문법"
// new Function으로 만든 새로운 함수 내부에서 외부 변수에 접근하려 할 때, 기존 함수 선언 방식으로 작성한 함수와 동일한 동작이 보장되어야 하죠.
let sum = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2) ); // 3



// "클로저"




// "요약"
// let func = new Function ([arg1, arg2, ...argN], functionBody);
// 아래 세 선언 방식은 동일하게 동작하죠.
// new Function('a', 'b', 'return a + b'); // 기본 문법
// new Function('a,b', 'return a + b'); // 쉼표로 구분
// new Function('a , b', 'return a + b'); // 쉼표와 공백으로 구분









