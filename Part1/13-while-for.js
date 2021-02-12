'use strict'

// "While"
// 본문이 한 줄이면 대괄호를 쓰지 않아도 됩니다.

// while (condition) {
//     // 코드
//     // '반복문 본문'
// }

let i = 0;
while (i < 3){
    console.log( i );
    i++;
}

let k = 3;
while (k) console.log(k--);



// "do... While"
// do..while 문법을 사용하면 condition을 반복문 본문 아래로 옮길 수 있습니다.
// do {
//     // 반복문 본문
//   } while (condition);
// 이때 본문이 먼저 실행되고, 조건을 확인한 후 조건이 truthy인 동안엔 본문이 계속 실행됩니다.
// 본문을 최소한 한번이라도 실행하고 싶을 때만 사용해야 합니다.
i = 0;
do {
    console.log ( i );
  i++;
} while (i < 3);


// "for"
// for 반복문은 while 반복문보다는 복잡하지만 가장 많이 쓰이는 반복문입니다.
// for (begin; condition; step) {
//     // ... 반복문 본문 ...
//   }
for ( let z = 0; z < 10; z++) {
    console.log(z); // 0부터 9 까지 실행됩니다.
}

// 인라인 변수 선언 대신, 정의되어있는 변수를 사용할 수도 있습니다.
let d = 0;
for (d = 0; d < 3; d++) { // 기존에 정의된 변수 사용
  alert(d); // 0, 1, 2
}

// 반복문이 시작될 때 아무것도 할 필요가 없으면 begin을 생략하는 것이 가능하죠.
let e = 0; // i를 선언하고 값도 할당하였습니다.
for (; e < 3; e++) { // 'begin'이 필요하지 않기 때문에 생략하였습니다.
  alert( e ); // 0, 1, 2
}

// step 역시 생략할 수 있습니다.
let f = 0;
for (; f < 3;) {
  alert( f++ );
}

// 모든 구성 요소를 생략할 수도 있는데, 이렇게 되면 무한 반복문이 만들어집니다.
for (;;) {
    // 끊임 없이 본문이 실행됩니다.
  }



// "break & continue"
// continue 지시자는 break 의 가벼우 버전, 전체 반복문을 멈추지 않는다
// 해당 조건을 반복 중 통과 시키고 싶은 때 사용
// continue는 중첩을 줄이는 데 도움을 줍니다.

for (let g = 0; g < 10; g++){

    if (g % 2 === 0) continue;

    console.log(g); // 홀수만 찍히게 된다.
}

// ‘?’ 오른쪽엔 break나 continue가 올 수 없습니다.
// 표현식이 아닌 문법 구조(syntax construct)는 삼항 연산자 ?에 사용할 수 없다는 점을 항상 유의하시기 바랍니다. 
// 특히 break나 continue 같은 지시자는 삼항 연산자에 사용하면 안 됩니다.
// (i > 5) ? alert(i) : continue; // 여기에 continue를 사용하면 안 됩니다.

// 여러 개의 중첩 반복문을 한 번에 빠져나와야 하는 경우가 종종 생기곤 합니다.
// input 아래에 평범한 break 지시자를 사용하면 안쪽에 있는 반복문만 빠져나올 수 있습니다. 
// 이것만으론 충분하지 않습니다(중첩 반복문을 포함한 반복문 두 개 모두를 빠져나와야 하기 때문이죠 – 옮긴이). 이럴 때 레이블을 사용할 수 있습니다.
for (let h = 0; h < 3; j++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`(${h},${j})의 값`, '');
  
      // 여기서 멈춰서 아래쪽의 `완료!`가 출력되게 하려면 어떻게 해야 할까요?
    }
  }
  
  alert('완료!');
// 위 예시에서 break outer는 outer라는 레이블이 붙은 반복문을 찾고, 해당 반복문을 빠져나오게 해줍니다.
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`(${i},${j})의 값`, '');
  
      // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
      if (!input) break outer; // (*)
  
      // 입력받은 값을 가지고 무언가를 함
    }
  }
  alert('완료!');

//레이블을 사용한다고 해서 원하는 곳으로 마음대로 점프할 수 있는 것은 아닙니다.
break label; // 아래 for 문으로 점프할 수 없습니다.
// label: for (...)

