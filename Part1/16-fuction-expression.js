'use strict'


// 1"함수 표현식"
// JS 는 함수를 한 종류의 구조로 취급하지 않고, 특정 값으로 취급합니다.
// 이전 챕터에서는 함수선언 방식으로 함수를 만들었지만,
// 함수 선언 방식 이외에 함수 표현식을 사용하여 함수를 만들 수 있습니다.
let sayHi = function() {
    console.log( "Hello" );
  };
// 함수는 값이고 따라서 변수에 할당할 수 있습니다.
// 함수는 값이기 때문에 console.log 를 통해서 함수 코드를 출력할 수도 있습니다.
// 아래의 예시에서 마지막 줄에서 sayHi2 옆에 괄호가 없기 때문에 함수가 실행되지는 않습니다.
// JS 는 괄호가 있어야만 함수가 호출됩니다.
// 함수는 sayHi()처럼 호출할 수 있다는 점 때문에 일반적인 값과는 조금 다릅니다. 특별한 종류의 값이죠.
// 하지만 본질은 값이기 때문에 값에 할 수 있는 일을 함수에도 할 수 있습니다.
// 변수를 복사해 다른 변수에 할당 할 수 있는 것처럼 함수를 복사하여 다른 변수에 할당이 가능합니다. 
function sayHi2() {
    console.log( "Hello" );
}
console.log( sayHi2 ); // 함수 코드가 보임


function sayHi3() {   // (1) 함수 생성
    console.log( "Hello" );
}
let func = sayHi3;    // (2) 함수 복사
func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
sayHi3(); // Hello    //     본래 함수도 정상적으로 실행됩니다.

// 끝에 세미 콜론은 왜 있나요?
// 함수 표현식의 끝에 왜 세미 콜론 ;이 붙는지 의문이 들 수 있습니다. 함수 선언문에는 세미 콜론이 없는데 말이죠.
// if { ... }, for { }, function f { } 같이 중괄호로 만든 코드 블록 끝엔 ;이 없어도 됩니다.
// 함수 표현식은 let sayHi = ...;과 같은 구문 안에서 값의 역할을 합니다. 
// 코드 블록이 아니고 값처럼 취급되어 변수에 할당되죠. 
// 모든 구문의 끝엔 세미 콜론 ;을 붙이는 게 좋습니다. 
// 함수 표현식에 쓰인 세미 콜론은 함수 표현식 때문에 붙여진 게 아니라, 구문의 끝이기 때문에 붙여졌습니다.



// 2"콜백함수"
// 함수를 값처럼 전달하는 예시, 함수 표현식에 관한 예시를 좀 더 살펴 보겠습니다.
// 함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불립니다.
// 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 나중에 호출 하는 것이 콜백 함수의 개념입니다.
// 위 예시에선 사용자가 "yes"라고 대답한 경우 showOk가 콜백이 되고, 
// "no"라고 대답한 경우 showCancel가 콜백이 됩니다.
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
function showOk() {
    console.log( "동의하셨습니다." );
}
function showCancel() {
    console.log( "취소 버튼을 누르셨습니다." );
}
// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);

// 아래와 같이 함수 표현식을 사용하면 코드 길이가 짧아집니다.
// ask(...) 안에 함수가 선언된 게 보이시나요? 
// 이렇게 이름 없이 선언한 함수는 익명 함수(anonymous function) 라고 부릅니다. 
// 익명 함수는 (변수에 할당된 게 아니기 때문에) ask 바깥에선 접근할 수 없습니다. 
// 위 예시는 의도를 가지고 이렇게 구현하였기 때문에 바깥에서 접근할 수 없어도 문제가 없습니다.
function ask2(question, yes, no) {
    if( confirm2(question) ) yes()
    else no();
}

ask2(
    "동의하십니까",
    function() { console.log('동의하셨습니다.'); },
    function() { console.log('취소 버튼을 누르셨습니다.'); }
);




// 3"함수표현식 vs 함수선언문"
// 첫째, 선언문은 독자적인 구문 형태로 존재하고 표현식은 = 내부에 생성됩니다.
// 둘째, 자바스크립트 엔진이 언제 함수를 생성하는지 차이 - 
// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.
// 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.
// 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
// 따라서 전역 함수 선언문은 스크립트 어디에 있느냐에 상관없이 어디에서든 사용할 수 있습니다.
sayHi("John"); // Hello, John
function sayHi(name) {
    console.log( `Hello, ${name}` );
}

sayHi2("John"); // error!
let sayHi2 = function(name) {  // (*) 마술은 일어나지 않습니다.
    console.log( `Hello, ${name}` );
};
// 세 번째 차이점은, 스코프입니다.
// 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 
// 하지만 블록 밖에서는 함수에 접근하지 못합니다.
let age = 16; // 16을 저장했다 가정합시다.
if (age < 18) {
  welcome();               // \   (실행)
                           //  |
  function welcome() {     //  |
    alert("안녕!");        //  |  함수 선언문은 함수가 선언된 블록 내
  }                        //  |  어디에서든 유효합니다
                           //  |
  welcome();               // /   (실행)
} else {
  function welcome() {
    alert("안녕하세요!");
  }
}
welcome(); // Error: welcome is not defined
// 여기는 중괄호 밖이기 때문에
// 중괄호 안에서 선언한 함수 선언문은 호출할 수 없습니다.


// *** 그럼 if문 밖에서 welcome 함수를 호출할 방법은 없는 걸까요?
// 함수 표현식을 사용하면 가능합니다. if문 밖에 선언한 변수 welcome에 함수 표현식으로 만든 함수를 할당하면 되죠.
let age = 18;
let welcome;
if (age < 18) {
  welcome = function() {
    alert("안녕!");
  };
} else {
  welcome = function() {
    alert("안녕하세요!");
  };
}
welcome(); // 제대로 동작합니다.

// 물음표 연산자 ?를 사용하면 위 코드를 좀 더 단순화할 수 있습니다.
let age = 18;
let welcome = (age < 18) ?
  function() { alert("안녕!"); } :
  function() { alert("안녕하세요!"); };
welcome(); // 제대로 동작합니다.
