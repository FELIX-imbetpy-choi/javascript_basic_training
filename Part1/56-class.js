'use strict'


// "클래스와 기본 문법"
// 실무에서 동일한 종류의 객체를 여러개 생성해야 하는 경우가 많습니다
// 이럴 때 new 연산자와 생성자함수에서 배운 new function 을 사용할 수 있습니다
// 여기에 추가적으로 모던 JS 에 도입된 class 라는 문법을 사용하면 객체지향에서 사용되는 
// 다양한 기능을 JS 에서도 사용이 가능합니다




// "기본 문법"
// 객체의 기본 상태를 설정해주는 생성자 메서드 constructor()는
// new에 의해 자동으로 호출되므로, 특별한 절차 없이 객체를 초기화 할 수 있습니다.
// new User("John")를 호출하면 다음과 같은 일이 일어납니다.
// 새로운 객체가 생성됩니다.
// 넘겨받은 인수와 함께 constructor가 자동으로 실행됩니다. 이때 인수 "John"이 this.name에 할당됩니다.
class User {
    constructor(name) {
        this.name = name;
    }

    sayHiI(){
        console.log(this.name);
    }
}
let user = new User("jun");
user.sayHiI();




// "클래스란"



// "클래스는 단순한 편의 문법이 아닙니다"




// "클래스 표현식"




// "getter와 setter"




// "계산된 메서드 이름 […]"


// 요약
// 아래와 같은 기본문법을 사용해 클래스를 만들 수 있습니다.
// class MyClass {
//     prop = value; // 프로퍼티
  
//     constructor(...) { // 생성자 메서드
//       // ...
//     }
  
//     method(...) {} // 메서드
  
//     get something(...) {} // getter 메서드
//     set something(...) {} // setter 메서드
  
//     [Symbol.iterator]() {} // 계산된 이름(computed name)을 사용해 만드는 메서드 (심볼)
//     // ...
// }