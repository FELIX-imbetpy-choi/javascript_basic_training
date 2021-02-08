'use strict'

// nullish
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이 필요합니다.
a ?? b // a 가 null undefined 아니면 a 반환, 나머지는 b
x = (a !== null && a !== undefined) ? a : b; // 위와 같은 기능을 or && ? 으로 구현

//이럴 때 null 병합 연산자 ??를 사용하면 값이 정해진 변수를 간편하게 찾아낼 수 있습니다.
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// ||는 첫 번째 truthy 값을 반환합니다.
// ??는 첫 번째 정의된(defined) 값을 반환합니다.
// ??의 연산자 우선순위는 5로 꽤 낮습니다.
// 따라서 ??는 =와 ? 보다는 먼저, 대부분의 연산자보다는 나중에 평가됩니다.
// 그렇기 때문에 복잡한 표현식 안에서 ??를 사용해 값을 하나 선택할 땐 괄호를 추가하는 게 좋습니다.
let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

// 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못합니다.
// let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'















