'use strict'



// "함수의 prototype 프로퍼티"







// //"요약"
// 생성자 함수를 이용해 만든 객체에 [[prototype]] 을 설정하는 방법에 대해 간략히 알아보았습니다
// F.prototype 프로퍼티는 [[Prototype]]과는 다릅니다. F.prototype은 new F()를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 설정합니다.
// F.prototype의 값은 객체나 null만 가능합니다. 다른 값은 무시됩니다.
// 지금까지 배운 내용은 생성자 함수에 "prototype" 를 설정하고, 이 생성자 함수를 new를 사용해 호출할 때만 적용됩니다.
// 일반 객체에 "prototype" 프로퍼티를 사용하면 아무런 일이 일어나지 않습니다.
// 모든 함수는 기본적으로 F.prototype = { constructor : F }를 가지고 있으므로 함수의 "constructor" 프로퍼티를 사용하면 객체의 생성자를 얻을 수 있습니다.


















