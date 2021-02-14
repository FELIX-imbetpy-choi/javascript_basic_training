'use strict'


// "콜백"

// 브라우저 메서드를 사용합니다.
// 브라우저 메서드가 익숙하지 않아다면 
// https://ko.javascript.info/document 이 글을 통해서 학습하며 이해합시다

// JS 는 호스트 환경이 제공하는 여러 함수를 사용하면
// 비동기 동작을 스케줄링 할 수 있습니다
// 원하는 때에 동작이 시작하도록 할 수 있습니다
// setTimeout은 스케줄링에 사용되는 가장 대표적인 함수입니다.
// 실무에서 마주하는 비동기 동작은 아주 다양한데
// 스크립트나 모듈을 로딩하는 것 또한 비동기 동작입니다

// src에 있는 스크립트를 읽어오는 함수 loadScript(src)를 예시로 비동기 동작 처리가 어떻게 일어나는지 살펴봅시다.
// 함수 loadScript 는 <script src="…"> 를 동적으로 만들고 이를 문서에 추가합니다
// 브라우저는 자동으로 태그에 잇는 스크립트를 불러오고 로딩이 완료되면 스크립트를 실행합니다
function loadScript1(src) {
    let srcipt = document.createElement('script');
    srcipt.src = src;
    document.head.append(srcipt);
}
// loadScript1('/my/script.js'); // 해당 경로에 위치한 스크립트를 불러오고 실행함

// 이때 스크립트는 비동기적으로 실행됩니다.
// 따라서 loadScript(…) 아래에 있는 코드들은 스크립트 로딩이 종료되는 걸 기다리지 않습니다.
// 스크립트 로딩이 끝나자마자 이 스크립트를 사용해 무언가를 해야만 한다고 가정해 봅시다.
// 스크립트 안에 다양한 함수가 정의되어 있고, 우리는 이 함수를 실행하길 원하는 상황입니다.
// 그런데 loadScript(...)를 호출하자마자 내부 함수를 호출하면 원하는 대로 작동하지 않습니다.

// loadScript('/my/script.js'); // script.js엔 "function newFunction() {…}"이 있습니다.
// newFunction(); // 함수가 존재하지 않는다는 에러가 발생합니다!

// 원하는 대로 스크립트 안의 함수나 변수를 사용하려면 스크립트 로딩이 끝났는지 여부를 알 수 있어야 합니다
// loadScript의 두 번째 인수로 스크립트 로딩이 끝난 후 실행될 함수인 
// 콜백(callback) 함수를 추가해 봅시다(콜백 함수는 나중에 호출할 함수를 의미합니다 ).
function loadScript2(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(script);
  
    document.head.append(script);
}

// 새롭게 불러온 스크립트에 있는 함수를 콜백 함수 안에서 호출하면 원하는 대로 외부 스크립트 안의 함수를 사용할 수 있습니다.
// loadScript('/my/script.js', function() {
//     // 콜백 함수는 스크립트 로드가 끝나면 실행됩니다.
//     newFunction(); // 이제 함수 호출이 제대로 동작합니다.
// });

// 실제 스크립트 이용한 예시
// 이런 방식을 콜백 기반 비동기 프로그래밍 이라고 합니다
// 무언가를 비동기적으로 수행하는 함수는 함수 내 동작이 모두 처리 된 후에 실행되어야 하는 함수가 들어갈
// 콜백을 인수로 반드시 제공해야 합니다
// 아래의 예시에서는 loadScript3 의 인수로 콜백을 사용한 방식은 비동기 프로그래밍의 일반적인 접근입니다
function loadScript3(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript3('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    console.log(`${script.src}가 로드되었습니다.`);
    console.log( _ ); // 스크립트에 정의된 함수
});




// 콜백 속 콜백
// 스크립트가 두 개 있는 경우, 어떻게 하면 두 스크립트를 순차적으로 불러올 수 있을까요? 
// 두 번째 스크립트 로딩은 첫 번째 스크립트의 로딩이 끝난 이후가 되길 원한다면 말이죠.

// 이렇게 중첩 콜백을 만들면 바깥에 위치한 loadScript가 완료된 후, 안쪽 loadScript가 실행됩니다.
// 아래와 같은 중첩은 몇개 뿐이면 괜찮지만, 동작이 많은 경우 좋지 않습니다.
loadScript('/my/script.js', function(script) {

    alert(`${script.src}을 로딩했습니다. 이젠, 다음 스크립트를 로딩합시다.`);
  
    loadScript('/my/script2.js', function(script) {
      alert(`두 번째 스크립트를 성공적으로 로딩했습니다.`);
    });

});





// 에러 핸들링
// 지금까지 살펴본 예시들은 스크립트 로딩이 실패하는 경우 등의 에러를 고려하지 않고 작성되었습니다. 
// 그런데 스크립트 로딩이 실패할 가능성은 언제나 있습니다. 물론 콜백 함수는 이런 에러를 핸들링할 수 있어야 하죠.
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));
  
    document.head.append(script);
}

// 이제 loadScript는 스크립트 로딩에 성공하면 callback(null, script)을, 실패하면 callback(error)을 호출합니다.
// 이렇게 에러를 처리하는 방식은 흔히 사용되는 패턴입니다. 이런 패턴은 '오류 우선 콜백(error-first callback)'이라고 불립니다.
// 오류 우선 콜백은 다음 관례를 따릅니다.
// callback의 첫 번째 인수는 에러를 위해 남겨둡니다. 에러가 발생하면 이 인수를 이용해 callback(err)이 호출됩니다.
// 두 번째 인수(필요하면 인수를 더 추가할 수 있음)는 에러가 발생하지 않았을 때를 위해 남겨둡니다. 
// 원하는 동작이 성공한 경우엔 callback(null, result1, result2...)이 호출됩니다.
loadScript('/my/script.js', function(error, script) {
    if (error) {
      // 에러 처리
    } else {
      // 스크립트 로딩이 성공적으로 끝남
    }
});






// 멸망의 피라미드
// 콜백 기반 비동기 처리는 언뜻 봤을 때 꽤 쓸만해 보이고, 실제로도 그렇습니다. 
// 한 개 혹은 두 개의 중첩 호출이 있는 경우는 보기에도 나쁘지 않습니다.
// 호출이 계속 중첩되면서 코드가 깊어지고 있네요. 
// 본문 중간중간 ...로 표시한 곳에 반복문과 조건문이 있는 코드가 들어가면 관리는 특히나 더 힘들어질 겁니다.
// 이렇게 깊은 중첩 코드가 만들어내는 패턴은 소위 ‘콜백 지옥(callback hell)’ 혹은 '멸망의 피라미드(pyramid of doom)'라고 불립니다.
// 비동기 동작이 하나씩 추가될 때마다 중첩 호출이 만들어내는 '피라미드’는 오른쪽으로 점점 커집니다. 곧 손쓸 수 없는 지경이 되어버리죠.
loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
            }
          });
  
        }
      })
    }
});

// 각 동작을 독립적인 함수로 만들어 위와 같은 문제를 완화해 보도록 합시다. 아래와 같이 말이죠.
// 하지만 이렇게 작성된 코드는 가독성이 너무나 떨어집니다
// 게다가 step*이라고 명명한 함수들은 '멸망의 피라미드’를 피하려는 용도만으로 만들었기 때문에 재사용이 불가능합니다. 
// 그 누구도 연쇄 동작이 이뤄지는 코드 밖에선 함수들을 재활용하지 않을 겁니다. 
// 네임스페이스가 약간 복잡해졌네요(namespace cluttering).
// 멸망의 피라미드를 피할 방법은 프라미스를 사용하는 것 입니다.
loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}
function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}
function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
  }
};







