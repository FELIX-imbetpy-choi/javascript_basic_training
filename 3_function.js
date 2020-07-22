'use strict'

// Function
// javascript 는 클래스가 있지만, 프로토타입을 기반으로한 객체이기 때문에
// javascript 는 절차지향 프로그래밍 언어이다.
// 절차지향 언어에서는 function 의 기능이 중요한 위치를 차지한다.
// function 은 api(application programming interface) 라고도 할 수 있으며, 이러한 sub-program 을 사용할 때 이름이 중요하다.
// 대체적으로 function 은 한가지 일이나 값을 계산하기 위해 존재한다.

// 1 Function 사용법
// function name(param1, param2){body... return}
// 하나의 함수는 한가지의 작업만을 수행해야 한다.
// 함수의 이름은 동사형태로 지정하는 것이 좋다.
// 함수를 작성할 때 이름이 복잡해진다면, 한가지의 작업으로 분리시켜야 한다.
// java script 에서 function 은 object 이다.
// 때문에 변수에 할당, 파라미터로 전달이 가능하고, 리턴에도 쓸 수 있다.
// javascript 는 테이터타입이 지정되지 않기 때문에 함수에 숫자형, 문자형을 구분할 수 없다.
// 데이터 타입이 중요한 경우(규모있는 프로젝트, 라이브러리 api 를 제공할 때) 는 type script 를 사용하는 것이 좋다.
// type script 는 입력 출력 값의 데이터타입이 정해지기 때문에 유용하다.
// 이런 단점 때문에 js 위에 ts 가 나오게 되었고, js 를 마무리 한다면 꼭 ts 를 배워야 한다.


function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}

log('hello');
log('i m junyeong');
log(1234);


// 2 Function 의 parameter
// premitive parameters : 메모리에 값이 그대로 저장되어 전달
// objective parameters : 메모리에 레퍼런스가 저장되어 전달된다.

function changeName(obj){
    obj.name = 'coder';
}
const junyeong = {name:'junyeong'}; // object 는 레퍼런스가 메모리에 들어가고, 레퍼런스는 메모리에 값을 가리킨다.
changeName(junyeong);
console.log(junyeong); // coder 로 변경된다. object 는 함수안에서 값을 변경하면 변경사항이 그대로 적용된다.


// 3 Default parameters (add in ES6)
function showMessage(message, from){
    if (from === undefined){
        from = 'unkown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //Hi by unkown

// 파라미터 옆에 기본값을 적용할 수 있다.
function showMessage(message, from = 'unkown'){ 
    console.log(`${message} by ${from}`);
}


// 4 Rest parameters (add in ES6)
// 배열 형태로 전달되게 된다.
function printAll(...args){
    for(let i = 0; i <args.length; i++){
        console.log(args[i]);
    }
}
printAll('Hello','Junyeong','coding');


// 5 Local Scope
// 클로저는 하나의 개념에서 파생된 것이다. (밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.)
// 자식함수가 부모함수의 변수값을 접근 가능한 개념이 클로저이다.
// return 타입이 없는 것은 return undifined 가 선언된것이나 똑같다.


let globalMessage = 'global'; // global 변수

function printMessage(){
    let message = 'hello'; // local 변수
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message); // 자식은 부모 함수의 값을 볼 수 있다.
        let childMessage = 'father'; // 부모는 자식 메세지를 볼 수 없다.
    }
    // console.log(childMessage); // 에러가 발생
}
printMessage();



// 6 Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);
console.log(`sum : ${result}`);



// 7 Early return, early exit
// 블럭 안에서 코드를 많이 작성하면 가독성이 떨어진다.

// 조건이 맞지 않을 때 긴 코드를 계속실행하면 비효율
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic
    }
}

// 조건이 맞을 때만 함수를 실행하는 코드를 작성해야 한다.
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic
}


// 8 Function Expression
// First-class function (함수는 다른변수와 마찬가지로 변수에 할당이 되고,
// function 에 파라미터로 적용되며,
// 리턴값으로도 리턴이 가능하다.)
// First-class function 을 가능하게 하는 것이 Function Expression 이다.

// function declaration 은 호이스팅이 가능하다. 함수를 정의하기 호출된 함수도 작동이 가능하다.
// 호이스팅이 가능한 이유는 java script 엔진이 선언된 함수를 가장위로 끌어올리기 때문이다.

// 함수의 이름 없이 사용되는 것을 anonymous function 이라 한다.
const print = function(){
    console.log('print');
};

print(); // 함수가 할당되어 있다면 변수를 함수처럼 선언 가능하다.
const printAgain = print; // 다른변수에 다시 할당해도 사용이 가능하다.
printAgain();


// 9 callback hell

function randomQuiz(answer, printYes, printNo){
    if(answer=== 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function (){ //anonymous
    console.log('yes!');
};

// named function 을 사용하는 것은 디버깅할 때 사용하기 위함
// stack trace
// recursions 
const printNo = function print(){ //named
    console.log('no!');
    // print(); 함수안에서 자신을 부르는 것을 recursions 라고 한다.

};

randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);



// 10 arrow function
// 함수를 간결하게 만들어준다. 유용하게 사용 가능.
// 항상 anonymous function 으로 사용한다.

const simplePrint = function(){
    console.log('simplePrint!');
};

//arrow function
// const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
    //do somthing more
    return a * b;
}


// 11 IIFE : immediately Invoked Funtion Expression
// 함수를 선언한 즉시 실행하게 하려면

(function hello(){
    console.log('IIFE');
})();

