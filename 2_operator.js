'use strict'

// 1. String Concatenation (+)
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 =  + ${1 + 2}`); // ` 활용한 string literals
console.log('junyeong\'s book'); // \ 사용하여 특수문자 사용

// string literals 의 장점은 줄바꿈, 특수기호 가 포함되어도 그대로 변환된다.
// 홑따옴표 이용시에는 특수문자가 적용되지 않을 수 있다. \ 사용하여 해결.
// 세로 줄바꿈은 \n 탭키는 \t 를 통해서 적용한다.


// 2. Numeric operators
console.log(1 + 2); //더하기
console.log(1 - 2); //빼기
console.log(1 / 2); //나누기
console.log(1 * 2); //곱하기
console.log(1 % 2); //나머지
console.log(1 ** 2); //제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter 
console.log(`preIncrement:${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // count 값을 먼저 post에 할당 한 후에 ++
// postIncrement = counter 
// counter = counter + 1
console.log(`preIncrement:${postIncrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y



// 5. 비교연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. 논리연산자 : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or : ${value1 || value2 || check()}`);// check 는 가장 나중에 배치하는 것이 좋다.


// && (and)
console.log(`or : ${value1 && value2 && check()}`);// check 는 가장 나중에 배치하는 것이 좋다.
// and 는 null check 할 때도 사용한다.
// if (nullableObject != null){
//     nullableObject.something;
// }

// ! (not)
console.log(!value1); //false

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('🎈')
    }
    return true;
}




// 7. 동등연산자
const stringFive = '5';
const numberFive = 5;

// == loose equality
// 타입을 변경해서 검사한다.
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// == loose equality
// 타입이 다른애들은 다른것으로 인식.
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

const jun1 = {name: 'jun'};
const jun2 = {name: 'jun'}; // 위와 값은 같지만 메모리에는 다른 값으로 저장됨
const jun3 = jun1;
console.log(jun1 == jun2); //false
console.log(jun1 === jun2); //false
console.log(jun1 === jun3); //true, jun1 을 3으로 할당했기 때문이다.


console.log(0 == false); //true
console.log(0 === false); //0은 불리언이 아니라 false
console.log('' == false); //true
console.log('' === false); // '' 불리언이 아니라 false
console.log(null == undefined);  //true
console.log(null === undefined);  // 다른타입, false



// 8. if, else , else if

const name = 'coder'

if(name === 'jun'){
    console.log('welcome');
} else if (name === 'coder'){
    console.log('get out!!!');
} else{
    console.log('unknown');
}


// 9. Ternary operator
// condition ? value1 : value2;
console.log(name === 'jun' ? 'yes' : 'no'); 


// 10. Switch 
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default :
        console.log('same all');
        break
}


// 11. Loop
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

do{
    console.log(`while: ${i}`); // i 값이 0 임에도 1번 찍힌다.
    i--;
} while (i > 0);


for (let i = 3; i > 0; i-=2) {
    console.log(`inline variable for:: ${i}`);
}





