'use strict'


// "Date 객체와 날짜"



// "객체 생성하기"
// new Date()
// 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환됩니다.
let now = new Date();
console.log(now);

// new Date(milliseconds)
// UTC 기준(UTC+0) 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초(1/1000 초) 후의 
// 시점이 저장된 Date 객체가 반환됩니다.

// 1970년 1월 1일 0시 0분 0초(UTC+0)를 나타내는 객체
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
// 1970년의 첫날을 기준으로 흘러간 밀리초를 나타내는 정수는 타임스탬프(timestamp) 라고 부릅니다.
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

// new Date(datestring)
// 인수가 하나인데, 문자열이라면 해당 문자열은 자동으로 구문 분석(parsed)됩니다. 
// 구문 분석에 적용되는 알고리즘은 Date.parse에서 사용하는 알고리즘과 동일한데, 자세한 내용은 아래에서 다루도록 하겠습니다.
let date = new Date("2017-01-26");
console.log(date);
// 인수로 시간은 지정하지 않았기 때문에 GMT 자정이라고 가정하고
// 코드가 실행되는 시간대(timezone)에 따라 출력 문자열이 바뀝니다.
// 따라서 얼럿 창엔
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// 혹은
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)등이 출력됩니다.

// new Date(year, month, date, hours, minutes, seconds, ms)
// 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체가 반환됩니다(지역 시간대 기준). 첫 번째와 두 번째 인수만 필수값입니다.
new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일, 00시 00분 00초
new Date(2011, 0, 1); // hours를 비롯한 인수는 기본값이 0이므로 위와 동일



// "날짜 구성요소 얻기"
// getFullYear()
// 연도(네 자릿수)를 반환합니다.
// getMonth()
// 월을 반환합니다(0 이상 11 이하).
// getDate()
// 일을 반환합니다(1 이상 31 이하). 어! 그런데 메서드 이름이 뭔가 이상하네요.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// 시, 분, 초, 밀리초를 반환합니다.
// getDay()
// 일요일을 나타내는 0부터 토요일을 나타내는 6까지의 숫자 중 하나를 반환합니다. 
// 몇몇 나라에서 요일의 첫날이 일요일이 아니긴 하지만, getDay에선 항상 0이 일요일을 나타냅니다. 이를 변경할 방법은 없습니다.

// 위에서 소개해드린 메서드 모두는 현지 시간 기준 날짜 구성요소를 반환합니다.

// getYear()말고 getFullYear()를 사용하세요.
// 여러 자바스크립트 엔진이 더는 사용되지 않는(deprecated) 비표준 메서드 getYear()을 구현하고 있습니다.
// 이 메서드는 두 자릿수 연도를 반환하는 경우가 있기 때문에 절대 사용해선 안 됩니다.
// 연도 정보를 얻고 싶다면 getFullYear()를 사용하세요.

// 현재 일시

// 현지 시간 기준 시
console.log( date.getHours() );

// 표준시간대(UTC+0, 일광 절약 시간제를 적용하지 않은 런던 시간) 기준 시
console.log( date.getUTCHours() );

// getTime()
// 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환합니다.

// getTimezoneOffset()
// 현지 시간과 표준 시간의 차이(분)를 반환합니다.




// "날짜 구성요소 설정하기"




// "자동 고침"
// Date 객체엔 자동 고침(autocorrection) 이라는 유용한 기능이 있습니다. 
// 범위를 벗어나는 값을 설정하려고 하면 자동 고침 기능이 활성화되면서 값이 자동으로 수정됩니다.




// "Date 객체를 숫자로 변경해 시간차 측정하기"
// 시차를 측정해 나만의 스톱워치를 만들어봅시다.
let start = new Date();
for ( let a = 0; a < 100000; a++){
    let doSomething = a * a * a;
}
let end = new Date();

console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸림`);




// "Date.now()"
let start2 = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초
// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end2 = Date.now(); // done
console.log( `반복문을 모두 도는데 ${end2 - start2} 밀리초가 걸렸습니다.` ); // Date 객체가 아닌 숫자끼리 차감함



// "벤치마크 테스트"





// "Date.parse와 문자열"
// 메서드 Date.parse(str)를 사용하면 문자열에서 날짜를 읽어올 수 있습니다.

// 단, 문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ처럼 생겨야 합니다.

// YYYY-MM-DD – 날짜(연-월-일)
// "T" – 구분 기호로 쓰임
// HH:mm:ss.sss – 시:분:초.밀리초
// 'Z'(옵션) – +-hh:mm 형식의 시간대를 나타냄. Z 한 글자인 경우엔 UTC+0을 나타냄
// YYYY-MM-DD, YYYY-MM, YYYY같이 더 짧은 문자열 형식도 가능합니다.
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); // 1327611110417  (타임스탬프)
