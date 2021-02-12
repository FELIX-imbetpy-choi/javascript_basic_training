'use strict'

// 'Function"
// 프로그램을 구성하는 요소 중에 중복되는 행위를 선언하는 함수를 살펴봅시다

// 1함수선언
// function 키워드, 함수 이름, 괄호로 둘러싼 매개변수를 차례로 써주면 함수를 선언할 수 있습니다. 
// 위 함수에는 매개변수가 없는데, 만약 매개변수가 여러 개 있다면 
// 각 매개변수를 콤마로 구분해줍니다.
// 이어서 함수를 구성하는 코드의 모임인 '함수 본문(body)'을 중괄호로 감싸 붙여줍시다.
function showMessage(){
    console.log('안녕하세요');
}
// 새롭게 정의한 함수는 이름 옆에 괄호를 붙여 호출할 수 있습니다.
showMessage();
showMessage();


// 2"지역변수"
// 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있습니다.
function showMessage1() {
    let message = "안녕하세요!"; // 지역 변수
    console.log( message );
  }

showMessage1(); // 안녕하세요!
console.log( message ); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)


// 3"외부변수"
// 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있습니다.
let userName = 'jun';
function showMessage2(){
    let message2 = 'hello' + userName;
    console.log(message2);
}
showMessage2(); // hello jun

// 함수에선 외부 변수에 접근하는 것뿐만 아니라, 수정도 할 수 있습니다.
let userName3 = 'John';
function showMessage3() {
    userName3 = "Bob"; // (1) 외부 변수를 수정함
  let message = 'Hello, ' + userName3;
  console.log(message);
}
console.log( userName3 ); // 함수 호출 전이므로 John 이 출력됨
showMessage3();
console.log( userName3 ); // 함수에 의해 Bob 으로 값이 바뀜

// 함수 내부에 외부 변수와 동일한 이름을 가진 변수가 선언되었다면, 
// 내부 변수는 외부 변수를 가립니다. 
let userName4 = 'John';
function showMessage() {
  let userName4 = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.
  let message = 'Hello, ' + userName4; // Bob
  console.log(message);
}
showMessage(); // 함수는 내부 변수인 userName만 사용합니다,
console.log( userName4 ); // 함수는 외부 변수에 접근하지 않습니다. 따라서 값이 변경되지 않고, John이 출력됩니다.


// 4"전역변수"
// 위의 예시처럼 함수 외부에 선언된 변수는 전역변수라고 합니다.
// 전역 변수는 같은 이름의 지역변수에 가려지지만 않는다면 모든 함수에서 접근할 수 있습니다.
// 변수는 연고나된 함수 내에 선언하고, 전역변수는 되도록 사용하지 않는 것이 좋습니다.
// 다만 프로젝트 전반에서 사용하는 변수는 전역변수에 사용하는 것이 좋을 수 있습니다.


// 5"매개변수"
// 매개변수를 이용하면 임의의 데이터를 함수 안에 전달하여 사용할 수 있습니다.
// 매개변수는 인자라고 불리기도 합니다.
function showMessage5(from, text) { // 인수: from, text
    console.log(from + ': ' + text);
  }
showMessage5('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage5('Ann', "What's up?"); // Ann: What's up? (**)

// 함수는 언제나 복사된 값을 사용하기 때문에??
// 인자로 전달한 값은 복사된 값을 사용하기 때문에 외부변수에 변화를 주지 않는다?
function showMessage6(from, text) {
    from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
    console.log( from + ': ' + text );
  }
let from = "Ann";
showMessage6(from, "Hello"); // *Ann*: Hello
// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
console.log( from ); // Ann



// 6"기본값"
// 매개 변수에 값을 전달하지 않으면 그 값은 undefined 가 됩니다.
// 위에서 정의한 함수 showMessage6(from, text)는 매개변수가 2개지만, 
// 아래와 같이 인수를 하나만 넣어서 호출할 수 있습니다.
// 이렇게 코드를 작성하여도 두번째 매개변수 text 에 undefined 가 할당될 뿐 입니다.
// 매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 '기본값(default value)'을 설정해주면 됩니다. 
// 매개변수 오른쪽에 =을 붙이고 undefined 대신 설정하고자 하는 기본값을 써주면 되죠.
showMessage6("Ann");

function showMessage7(from, text = "no text given") {
    console.log( from + ": " + text );
  }
showMessage7("Ann"); // Ann: no text given

// 위 예시에선 문자열 "no text given"을 기본값으로 설정했습니다. 
// 하지만 아래와 같이 복잡한 표현식도 기본값으로 설정할 수도 있습니다.
function showMessage(from, text = anotherFunction()) {
    // anotherFunction()은 text값이 없을 때만 호출됨
    // anotherFunction()의 반환 값이 text의 값이 됨
}


// 7"반환값"
// 함수를 호출 했을 대 함수를 호출한 그 곳에 특정한 값을 반환하게 할 수 있습니다.
// 이 때 특정 값을 반환값이라고 합니다.
// 인수로 받은 두 값을 더해주는 간단한 함스로 만들어 반환값에 대해 알아보도록 하겠습니다.
function sum(a, b) {
    return a + b;
  }
  
let result = sum(1, 2);
console.log( result ); // 3

// 지시자 return 은 함수내 어디서든 사용할 수 있습니다.
// 실행 흐름이 지시자 return 을 만나면 함수 실행은 즉시 중단되고
// 함수를 호출한 곳에 값을 반환합니다.
function checkAge(age){
    if (age >= 18){
        return true;
    }
    else{
        return confirm('보호자의 동의를 받으셨나요?');
    }
}
let age = 18;

if (checkAge(age)) {
    console.log('접속허용');
}
else{
    console.log('접속차단');
}

// 아래와 같이 지시자 return만 명시하는 것도 가능합니다. 이런 경우는 함수가 즉시 종료됩니다.
function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
    console.log( "영화 상영" ); // (*)
    // ...
}

// return문이 없거나 return 지시자만 있는 함수는 undefined를 반환합니다.
function doNothing() { /* empty */ }
console.log( doNothing() === undefined ); // true

// return 지시자만 있는 경우도 undefined를 반환합니다. return은 return undefined와 동일하게 동작하죠.
function doNothing() {
    return;
  }
console.log( doNothing() === undefined ); // true
  
// 반환하려는 값이 긴 표현식인 경우, 아래와 같이 지시자 return과 반환하려는 값 사이에 
// 새 줄을 넣어 코드를 작성하고 싶을 수도 있습니다.
return
 (some + long + expression + or + whatever * f(a) + f(b))
// 자바스크립트는 return문 끝에 세미콜론을 자동으로 넣기 때문에 이렇게 return문을 작성하면 안 됩니다.
// 위 코드는 아래 코드처럼 동작합니다.
// 따라서 반환하고자 했던 표현식을 반환하지 못하고 아무것도 반환하지 않는 것처럼 되어버립니다.
return;
 (some + long + expression + or + whatever * f(a) + f(b))
// 표현식을 여러 줄에 걸쳐 작성하고 싶다면 표현식이 return 지시자가 있는 줄에서 시작하도록 작성해야 합니다. 
// 또는 아래와 같이 여는 괄호를 return 지시자와 같은 줄에 써줘도 괜찮습니다.
return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )



// 8"함수이름짓기"
// 함수는 어떤 동작을 수행하기 위한 코드의 모음입니다.
// 따라서 함수의 이름은 어떤 기능을 하는지 직감적으로 알 수 있도록 지어야 합니다.
// 함수는 함수 이름에 언급되어있는 동작을 정확히 수행해야 합니다. 그 이외의 동작은 수행해선 안 됩니다.
// 독립적인 두 개의 동작은 독립된 함수 두 개에서 나눠서 수행할 수 있게 해야 합니다. 
// 한 장소에서 두 동작을 동시에 필요로 하는 경우라도 말이죠(이 경우는 제3의 함수를 만들어 그곳에서 두 함수를 호출합니다).
// getAge 함수는 나이를 얻어오는 동작만 수행해야 합니다. alert 창에 나이를 출력해주는 동작은 이 함수에 들어가지 않는 것이 좋습니다.
// createForm 함수는 form을 만들고 이를 반환하는 동작만 해야 합니다. form을 문서에 추가하는 동작이 해당 함수에 들어가 있으면 좋지 않습니다.
// checkPermission 함수는 승인 여부를 확인하고 그 결과를 반환하는 동작만 해야 합니다. 승인 여부를 보여주는 메시지를 띄우는 동작이 들어가 있으면 좋지 않습니다.




 

