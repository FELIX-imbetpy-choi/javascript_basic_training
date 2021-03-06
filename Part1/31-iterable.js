'use strict'

// iterable 객체
// 반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체입니다. 이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문을 적용할 수 있습니다.
// 배열은 대표적인 이터러블입니다. 배열 외에도 다수의 내장 객체가 반복 가능합니다. 문자열 역시 이터러블의 예입니다.



// "문자열은 이터러블입니다"
// 배열과 문자열은 가장 광범위하게 쓰이는 내장 이터러블입니다.

for (let char of "test") {
    // 글자 하나당 한 번 실행됩니다(4회 호출).
    console.log( char ); // t, e, s, t가 차례대로 출력됨
}



// "이터레이터를 명시적으로 호출하기"
// 이터레이터를 명시적으로 호출하는 경우는 거의 없는데, 
// 이 방법을 사용하면 for..of를 사용하는 것보다 반복 과정을 더 잘 통제할 수 있다는 장점이 있습니다.
// 반복을 시작했다가 잠시 멈춰 다른 작업을 하다가 다시 반복을 시작하는 것과 같이 반복 과정을 여러 개로 쪼개는 것이 가능합니다.
let str = "Hello";
// for..of를 사용한 것과 동일한 작업을 합니다.
// for (let char of str) console.log(char);
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // 글자가 하나씩 출력됩니다.
}


// "이터러블과 유사 배열"
// 이터러블(iterable) 은 위에서 설명한 바와 같이 메서드 Symbol.iterator가 구현된 객체입니다.
// 유사 배열(array-like) 은 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체입니다.





// "Array.from"
// 범용 메서드 Array.from는 이터러블이나 유사 배열을 받아 ‘진짜’ Array를 만들어줍니다. 이 과정을 거치면 이터러블이나 유사 배열에 배열 메서드를 사용할 수 있습니다.







// "요약"
// for..of을 사용할 수 있는 객체를 이터러블이라고 부릅니다.
// 이터러블엔 메서드 Symbol.iterator가 반드시 구현되어 있어야 합니다.
    // obj[Symbol.iterator]의 결과는 이터레이터라고 부릅니다. 이터레이터는 이어지는 반복 과정을 처리합니다.
    // 이터레이터엔 객체 {done: Boolean, value: any}을 반환하는 메서드 next()가 반드시 구현되어 있어야 합니다. 여기서 done:true은 반복이 끝났음을 의미하고 그렇지 않은 경우엔 value가 다음 값이 됩니니다.
// 메서드 Symbol.iterator는 for..of에 의해 자동으로 호출되는데, 개발자가 명시적으로 호출하는 것도 가능합니다.
// 문자열이나 배열 같은 내장 이터러블에도 Symbol.iterator가 구현되어 있습니다.
// 문자열 이터레이터는 서로게이트 쌍을 지원합니다.
// 인덱스와 length 프로퍼티가 있는 객체는 유사 배열이라 불립니다. 유사 배열 객체엔 다양한 프로퍼티와 메서드가 있을 수 있는데 배열 내장 메서드는 없습니다.

// 명세서를 보면 대부분의 메서드는 ‘진짜’ 배열이 아닌 이터러블이나 유사 배열을 대상으로 동작한다고 쓰여 있는걸 볼 수 있습니다. 이 방법이 더 추상적이기 때문입니다.

// Array.from(obj[, mapFn, thisArg])을 사용하면 이터러블이나 유사 배열인 obj를 진짜 Array로 만들 수 있습니다. 이렇게 하면 obj에도 배열 메서드를 사용할 수 있죠. 선택 인수 mapFn와 thisArg는 각 요소에 함수를 적용할 수 있게 해줍니다.





