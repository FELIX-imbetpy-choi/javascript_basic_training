'use strict'

// "배열과 매서드"



// 요약
// 배열관련 메서드 목록 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

// 요소를 더하거나 지우기
//     push(...items) – 맨 끝에 요소 추가하기
//     pop() – 맨 끝 요소 추출하기
//     shift() – 첫 요소 추출하기
//     unshift(...items) – 맨 앞에 요소 추가하기
//     splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기
//     slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
//     concat(...items) – 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
// 원하는 요소 찾기
//     indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
//     includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
//     find/filter(func) – func의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
//     findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함
// 배열 전체 순회하기
//     forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음
// 배열 변형하기
//     map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
//     sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
//     reverse() – 배열을 뒤집어 반환함
//     split/join – 문자열을 배열로, 배열을 문자열로 변환함
//     reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨
// 기타
//     Array.isArray(arr) – arr이 배열인지 여부를 판단함
//     sort, reverse, splice는 기존 배열을 변형시킨다는 점에 주의하시기 바랍니다.


// 지금까지 배운 메서드만으로 배열과 관련된 작업 99%를 해결할 수 있습니다. 이 외의 배열 메서드도 있긴 한데 잠시 언급하고 넘어가겠습니다.

//     arr.some(fn)과 arr.every(fn)는 배열을 확인합니다.
//     두 메서드는 map과 유사하게 모든 요소를 대상으로 함수를 호출합니다. some은 함수의 반환 값을 true로 만드는 요소가 하나라도 있는지 여부를 확인하고 every는 모든 요소가 함수의 반환 값을 true로 만드는지 여부를 확인합니다. 두 메서드 모두 조건을 충족하면 true를, 그렇지 않으면 false를 반환합니다.
//     arr.fill(value, start, end)은 start부터 end까지 value를 채워 넣습니다.
//     arr.copyWithin(target, start, end)은 start부터 end까지 요소를 복사하고, 복사한 요소를 target에 붙여넣습니다. 기존 요소가 있다면 덮어씁니다.