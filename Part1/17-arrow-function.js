'use strict'

// "화살표 함수 기본"
// 함수표현식 보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법이 있습니다.
// 바로 화살표 함수를 사용하는 것 입니다.
// 이렇게 코드를 작성하면 인자 arg1..argN를 받는 함수 func이 만들어집니다.
let func = (arg1, arg2, ...argN) => expression

// 함수 func는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환합니다.
let func2 = function(arg1, arg2, ...argN) {
    return expression;
};

/* 아래 화살표 함수는 본 함수의 축약 버전입니다.
let sum = function(a, b) {
  return a + b;
};
*/
let sum = (a, b) => a + b;
console.log( sum(1, 2) ); // 3

// 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있습니다. 괄호를 생략하면 코드 길이를 더 줄일 수 있습니다.
let double = n => n * 2;
console.log( double(3) );

// 인수가 하나도 없을 땐 괄호를 비워놓으면 됩니다. 다만, 이 때 괄호는 생략할 수 없습니다.
let sayHello = () => console.log('hello');
sayHello();

// 아래 예시와 같이 함수를 동적으로 만들 수 있습니다.
let age = 18;
let welcome = (age < 18) ? 
    () => console.log("안녕")
    :
    () => console.log("안녕하세요?");
welcome();



// "본문이 여러 줄인 화살표 함수"
// 평가해야 할 표현식이나 구문이 여러 개인 함수가 있을 수도 있습니다. 
// 이 경우 역시 화살표 함수 문법을 사용해 함수를 만들 수 있습니다. 
// 다만, 이때는 중괄호 안에 평가해야 할 코드를 넣어주어야 합니다. 
// 그리고 return 지시자를 사용해 명시적으로 결괏값을 반환해 주어야 합니다.
let actSum = (a,b) => {
    let result = a + b;
    return result;
}
console.log( actSum(1,2) );


// 지금까진 간결함이라는 특징을 중심으로 화살표 함수에 대해 알아보았습니다. 
// 하지만 이게 다가 아닙니다!
// 자세한 내용을 배우려면 자바스크립트의 다른 내용들을 더 알아야 합니다. 
// 화살표 함수의 깊은 내용을 알기위해 필요한 내용을 배운 후에 
// 화살표 함수 다시 살펴보기에서 그 내용들을 다루도록 하겠습니다.


