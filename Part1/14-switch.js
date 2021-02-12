'use strict'


// "Switch"
// 복수의 if 조건문은 switch 문으로 변경할 수 있습니다.
// 하나 이상의 case 문으로 구성됩니다.
// 대개 default 문이 있지만 이는 필수가 아닙니다.
// break 문을 만나거나 모든 case 가 끝나면 코드 실행이 멈춥니다.
switch(x) {
    case 'value1':
        // value1 일 때 처리
        break;
    case 'value2':
        // value1 일 때 처리
        break;
}

let a = 2 + 2;
switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}

// case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행합니다.
// 아래의 예시에서 4 이후 모든 출력문이 나오게 됩니다.
a = 2 + 2;
switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}

// switch/case문의 인수엔 어떤 표현식이든 올 수 있습니다.
a = "1";
let b = 0;
switch (+a) { // +a 는 평가하면 1 이됩니다.
  case b + 1:
    alert("표현식 +a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.");
    break;

  default:
    alert("이 코드는 실행되지 않습니다.");
}

// 코드가 같은 case문은 한데 묶을 수 있습니다.
// case 3과 case 5에서 실행하려는 코드가 같은 경우에 대한 예시를 살펴봅시다.
a = 3;
switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert('계산 결과가 이상하네요.');
}

// switch문은 일치 비교로 조건을 확인합니다. 
// 비교하려는 값과 case문의 값의 형과 값이 같아야 해당 case문이 실행됩니다.
// 3을 입력하였더라도 세 번째 alert문은 실행되지 않습니다. 
// 앞서 배운 바와 같이 prompt 함수는 사용자가 입력 필드에 기재한 값을 
// 문자열로 변환해 반환하기 때문에 숫자 3을 입력하더라도 prompt 함수는 문자열 '3'을 반환합니다.
let arg = prompt("값을 입력해주세요.");
switch (arg) {
  case '0':
  case '1':
    alert( '0이나 1을 입력하셨습니다.' );
    break;

  case '2':
    alert( '2를 입력하셨습니다.' );
    break;

  case 3:
    alert( '이 코드는 절대 실행되지 않습니다!' );
    break;
  default:
    alert( '알 수 없는 값을 입력하셨습니다.' );
}

