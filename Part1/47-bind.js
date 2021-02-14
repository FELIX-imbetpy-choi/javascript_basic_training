'use strict'



// "함수 바인딩"
// setTimeout에 메서드를 전달할 때처럼, 객체 메서드를 콜백으로 전달할 때 ’this 정보가 사라지는’ 문제가 생깁니다.




// "요약"
// func.bind(context, ...args)는 this가 context로 고정되고 인수도 고정된 함수 func을 반환합니다.
// bind는 보통 객체 메서드의 this를 고정해 어딘가에 넘기고자 할 때 사용합니다. setTimeout에 넘길 때 같이 말이죠.
// 기존 함수의 인수 몇 개를 고정한 함수를 부분 적용(partially applied) 함수 또는 부분(partial) 함수라고 부릅니다.
// 부분 적용은 같은 인수를 여러 번 반복하고 싶지 않을 때 유용합니다. send(from, to)라는 함수가 있는데 from을 고정하고 싶다면 send(from, to)의 부분 함수를 구현해 사용하면 됩니다.












