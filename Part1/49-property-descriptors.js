'use strict'


// "프로퍼티 플래그와 설명자"
// 객체에는 프로퍼티가 저장됩니다
// 지금까진 프로퍼티를 단순히 키-값 의 쌍의 관점에서만 다루었습니다
// 그런데 사실 프로퍼티는 우리가 생각했던 것 보다 더 유연하고 강력한 자료구조 입니다
// 여기선 옵션들을 통해서 손쉽게 getter 나 setter 함수를 만드는 방법을 알아봅니다



// "프로퍼티 플래그"
// 객체 프로퍼티는 값과 함께 플래그라 불리는 특별한 속성 세가지를 갖습니다
// writable – true이면 값을 수정할 수 있습니다. 그렇지 않다면 읽기만 가능합니다.
// enumerable – true이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
// configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.


// "writable 플래그"
// writable 플래그를 사용해 user.name에 값을 쓰지 못하도록(non-writable) 해봅시다.





// "enumerable 플래그"
// user에 커스텀 메서드 toString을 추가해봅시다.





// "configurable 플래그"
// 구성 가능하지 않음을 나타내는 플래그(non-configurable flag)인 configurable:false는 몇몇 내장 객체나 프로퍼티에 기본으로 설정되어있습니다.





// "Object.defineProperties"
// Object.defineProperties(obj, descriptors) 메서드를 사용하면 프로퍼티 여러 개를 한 번에 정의할 수 있습니다.





// "Object.getOwnPropertyDescriptors"
// Object.getOwnPropertyDescriptors(obj) 메서드를 사용하면 프로퍼티 설명자를 전부 한꺼번에 가져올 수 있습니다.









// // "객체 수정을 막아주는 다양한 메서드"
// 프로퍼티 설명자는 특정 프로퍼티 하나를 대상으로 합니다.
// 아래 메서드를 사용하면 한 객체 내 프로퍼티 전체를 대상으로 하는 제약사항을 만들 수 있습니다.

// Object.preventExtensions(obj)
// 객체에 새로운 프로퍼티를 추가할 수 없게 합니다.
// Object.seal(obj)
// 새로운 프로퍼티 추가나 기존 프로퍼티 삭제를 막아줍니다. 프로퍼티 전체에 configurable: false를 설정하는 것과 동일한 효과입니다.
// Object.freeze(obj)
// 새로운 프로퍼티 추가나 기존 프로퍼티 삭제, 수정을 막아줍니다. 프로퍼티 전체에 configurable: false, writable: false를 설정하는 것과 동일한 효과입니다.
// 아래 메서드는 위 세 가지 메서드를 사용해서 설정한 제약사항을 확인할 때 사용할 수 있습니다.
// Object.isExtensible(obj)
// 새로운 프로퍼티를 추가하는 게 불가능한 경우 false를, 그렇지 않은 경우 true를 반환합니다.
// Object.isSealed(obj)
// 프로퍼티 추가, 삭제가 불가능하고 모든 프로퍼티가 configurable: false이면 true를 반환합니다.
// Object.isFrozen(obj)
// 프로퍼티 추가, 삭제, 변경이 불가능하고 모든 프로퍼티가 configurable: false, writable: false이면 true를 반환합니다.
// 위 메서드들은 실무에선 잘 사용되지 않습니다.