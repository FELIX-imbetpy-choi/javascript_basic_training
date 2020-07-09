// 1. Use Strict

'use strict';

// 2. variable
// let (added in ES6)
// Mutable type 변수이다.

let globalName = 'global name'

{
let name = 'junyeong';
console.log(name); // junyeong

name = 'hello';
console.log(name); // hello
console.log(globalName); // 전역변수는 블록 안에서도 기능함 - 메모리에 항상 탑재
}

console.log(name); // block 안에 정의된 값을 사용할 수 없음
console.log(globalName);

// var (not useing now)
// 이제는 사용하지 않는 변수 할당 방법이다. why?
// 1 변수를 선언하기 전에도 값을 할당 가능하다. ( var hoisting )
// var hoisting - 어디에 선언한지 상관없이 선언을 끌어올려준다.
// 2 var 는 블록 스코프를 무시한다.
{
console.log(age); // undefined
age = 4;
console.log(age); // 4
var age;
}
console.log(age); // 4 ,스코프를 무시한다.


// 3. Constants
// favor immutable data type always for a few reasons
// - security (보안상-값을 변경하는 것 방지)
// - thread safety (쓰레드가 동시에 값을 변경하는 것 방지)
// - reduce human mistake 
// 값을 선언함과 동시에 다시는 변경 불가함.
// 값이 변경 가능한 것을 Mutable type(let) 이라고 한다.

const daysInWeek = 7;
const maxNumber = 5;



// 4. Variable type
// primitive, single item : number, string, boolean, null, undefined, symbol
// object : box container 
// function : first-class function (함수도 변수에 할당 가능)

// number
const count = 17; // 정수
const size = 17.2 // 실수
console.log(`value:${count}, type: ${typeof count}`); // number
console.log(`value:${size}, type: ${typeof size}`); // number


const infinity = 1 / 0; 
const negativeInfinity = -1 / 0;  
const nAn = 'not a number' / 2; 
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN
// Dom 을 조작할 때 나누고자 하는 값에 따라서 위의 값 때문에 에러 가능성 있음.

// bigInt (크롬, firefox 만 현재는 지원, 아직까지 쓰기힘들다.)
const bigInt = 123456498465319849684654987546498484n; // n을 붙여주면 bigint 로 인식한다.
console.log(`value:${bigInt}, type: ${typeof bigInt}`); // number
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

console.log(`value:${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value:${helloBob}, type: ${typeof helloBob}`);


// boolean
// false : 0, null, nudefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value:${test}, type: ${typeof test}`);


// null
// 개발자가 직접 빈 값을 지정함.
let nothing = null;
console.log(`value:${nothing}, type: ${typeof nothing}`);


// undefined
// 아무런 값이 설정되지 않으면 자동으로 설정됨
let x;
console.log(`value:${x}, type: ${typeof x}`);



// symbol
// 고유한 식별자를 만들거나, 우선순위를 줄 때 이용함
// 스트링이 같아도 다른 식별자로 인식한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2); //false

// 스트링이 같을 때 같은 심볼로 인식하게 하려면
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3==symbol4); //true

// 심볼은 바로 출력하면 에러가 난다. description 을 이용해야 
console.log(`value:${symbol3.description}, type: ${typeof symbol3}`);



// 5. Dynamic typing 
// js 는 dynamically typed language
// c, java 는 변수 타입을 함께 선언해야 하지만, 할당된 값에 따라서 변수 타입이 달라질 수 있다.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value:${text}, type: ${text}`); // string
 text = 2;
console.log(`value:${text}, type: ${text}`); // number
 text = '7' + 2;
console.log(`value:${text}, type: ${text}`); // 75, string
 text = '8' / '2';
console.log(`value:${text}, type: ${text}`); // 4, number
console.log(text.charAt(0)); // error

// text 변수명을 보고 string 을 예상한 코드를 짠다면
// 이 부분에서 에러가 런타임으로 발생할 가능성이 있다.
// 이러한 에러 때문에 등장한 것이 type script 이다.
console.log(text.charAt(0)); // Error
