'use strict'



// "클래스 상속"




// ‘extends’ 키워드




// 메서드 오버라이딩




// 생성자 오버라이딩




// super 키워드와 [[HomeObject]]







// 요약
// 클래스 확장하기: class Child extends Parent
// Child.prototype.__proto__가 Parent.prototype이 되므로 메서드 전체가 상속됩니다.
// 생성자 오버라이딩:
// this를 사용하기 전에 Child 생성자 안에서 super()로 부모 생성자를 반드시 호출해야 합니다.
// 메서드 오버라이딩:
// Child에 정의된 메서드에서 super.method()를 사용해 Parent에 정의된 메서드를 사용할 수 있습니다.
// super 키워드와 [[HomeObject]]
// 메서드는 내부 프로퍼티 [[HomeObject]]에 자신이 정의된 클래스와 객체를 기억해놓습니다. super는 [[HomeObject]]를 사용해 부모 메서드를 찾습니다.
// 따라서 super가 있는 메서드는 객체 간 복사 시 제대로 동작하지 않을 수 있습니다.
// 추가 사항:

// 화살표 함수는 this나 super를 갖지 않으므로 주변 컨텍스트에 잘 들어맞습니다.









