'use strict'



// "네이티브 프로토타입"









// "요약"
// 모든 내장 객체는 같은 패턴을 따릅니다.
//     메서드는 프로토타입에 저장됩니다(Array.prototype, Object.prototype, Date.prototype 등).
//     객체 자체엔 데이터만 저장합니다(배열의 요소, 객체의 프로퍼티, 날짜 등).
// 원시값 또한 래퍼 객체의 프로토타입에 Number.prototype, String.prototype, Boolean.prototype 같은 메서드를 저장합니다. undefined와 null 값은 래퍼 객체를 가지지 않습니다.
// 내장 프로토타입을 수정할 수 있습니다. 내장 프로토타입의 메서드를 빌려와 새로운 메서드를 만드는 것 역시 가능합니다. 그러나 내장 프로토타입 변경은 되도록 하지 않아야 합니다. 내장 프로토타입은 새로 명세서에 등록된 기능을 사용하고 싶은데 자바스크립트 엔진엔 이 기능이 구현되어있지 않을 때만 변경하는 게 좋습니다.
// 과제







