'use strict'


// "프라미스"
// 아주 유명한 가수의 앨범 정보를 위해서, 팬들은 매번 이를 요청하고
// 가수는 모든 팬들에게 이 정보를 건내주어야 한다고 생각한다면... 정말 많은 일이 필요할 것 입니다
// 이때 구독 리스트를 하나 만들어 팬들의 이메일을 보관하고, 앨범 정보를 그때그때 이 리스트로 보내주면,
// 밤낮으로 질문을 하는 일도 매번 질문에 답해야 하는 가수도 만족할 것 입니다

// 프라미스는 위의 비유보다 복잡하고 다른 기능도 있지만 위의 비유를 통해서 학습해 보자

// Promise 객체의 문법은 다음과 같습니다
// new promise 가 실행될 때 자동으로 executor 가 실행되는데 이것이 위의 비유에서 가수 입니다
// resolve 와 reject 는 JS 에서 제공하는 자체 콜백 입니다 
// 개발자는 이를 신경쓰지 않고 executor 안 코드만 작성하면 됩니다
// 대신 executor 에선 결과를 상황에 따라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야 합니다
    // resolve(value) — 일이 성공적으로 끝난 경우, 그 결과를 나타내는 value와 함께 호출
    // reject(error) — 에러 발생 시 에러 객체를 나타내는 error와 함께 호출
let promise = new Promise(function(resolve, reject){
    // executor ( 제작코드 , 가수 )
})

// 한편, new Promise 생성자가 반환하는 promise 객체는 다음과 같은 내부 프로퍼티를 갖습니다.
//     state — 처음엔 "pending"(보류)이었다 resolve가 호출되면 "fulfilled", reject가 호출되면 "rejected"로 변합니다.
//     result — 처음엔 undefined이었다, resolve(value)가 호출되면 value로, reject(error)가 호출되면 error로 변합니다.

// executor '처리’가 시작 된 지 1초 후, resolve("done")이 호출되고 결과가 만들어집니다. 이때 promise 객체의 상태는 다음과 같이 변합니다.
// 아래의 코드에서는 executor 의 처리가 되는 1초 후 resolve(done) 이 호출되어 결과가 만들어진다
// 이때 promise 객체의 상태는 state:fulfilled result:done 의 상태로 변환됩니다.
let promise = new Promise(function(resolve, reject){
    // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

    // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result 가 done 이 됩니다.
    setTimeout(() => resolve("done"),1000);
})

// 프라미스는 성공 또는 실패만 합니다.
// executor는 resolve나 reject 중 하나를 반드시 호출해야 합니다. 이때 변경된 상태는 더 이상 변하지 않습니다.
// 하나의 인수를 받고나면 그 이외의 인수는 무시합니다
let promise = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // 무시됨
    setTimeout(() => resolve("…")); // 무시됨
});

// Error 객체와 함께 거부하기
// 무언가 잘못된 경우, executor는 reject를 호출해야 합니다. 이때 인수는 resolve와 마찬가지로 어떤 타입도 가능하지만 
// Error 객체 또는 Error를 상속받은 객체를 사용할 것을 추천합니다. 이유는 뒤에서 설명하겠습니다.

// state와 result는 내부에 있습니다.
// 프라미스 객체의 state, result 프로퍼티는 내부 프로퍼티이므로 개발자가 직접 접근할 수 없습니다. 
// .then/.catch/.finally 메서드를 사용하면 접근 가능한데, 자세한 내용은 아래에서 살펴보겠습니다.




// "소비자: then, catch, finally"
// 프라미스 객체는 executor(가수) 와 소비함수(팬)를 이어주는 역할을 합니다.
// 소비함수는 then, catch, finally 메서드를 사용해 등록합니다.

// "then"
// then 은 프로미스에서 가장 중요하고 기본이 되는 메서드 입니다
promise.then(
    function(result); // 결과를 다룹니다
    function(error); // 에러를 다룹니다
)

// 아래 예시는 성공적으로 이행된 프라미스에 어떻게 반응하는지 보여줍니다.
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve 함수는 .then의 첫 번째 함수(인수)를 실행합니다.
  promise.then(
    result => alert(result), // 1초 후 "done!"을 출력
    error => alert(error) // 실행되지 않음
);

//작업이 성공적으로 처리된 경우만 다루고 싶다면 .then에 인수를 하나만 전달하면 됩니다.
let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });
  
promise.then(alert); // 1초 뒤 "done!" 출력

// "catch"
// 에러가 발생한 경우만 다루고 싶다면 .then(null, errorHandlingFunction)같이 null을 첫 번째 인수로 전달하면 됩니다. 
// .catch(errorHandlingFunction)를 써도 되는데, .catch는 .then에 null을 전달하는 것과 동일하게 작동합니다.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("에러 발생!")), 1000);
  });
// .catch(f)는 promise.then(null, f)과 동일하게 작동합니다
promise.catch(alert); // 1초 뒤 "Error: 에러 발생!" 출력


// "finally"
// 쓸모가 없어진 로딩 인디케이터(loading indicators)를 멈추는 경우같이, 결과가 어떻든 마무리가 필요하면 finally가 유용합니다.
// finally 는 then 과 차이점이 있습니다
//     finally 핸들러엔 인수가 없습니다. finally에선 프라미스가 이행되었는지, 거부되었는지 알 수 없습니다. finally에선 절차를 마무리하는 ‘보편적’ 동작을 수행하기 때문에 성공·실패 여부를 몰라도 됩니다.
//     finally 핸들러는 자동으로 다음 핸들러에 결과와 에러를 전달합니다.
new Promise((resolve, reject) => {
    /* 시간이 걸리는 어떤 일을 수행하고, 그 후 resolve·reject를 호출함 */
  })
    // 성공·실패 여부와 상관없이 프라미스가 처리되면 실행됨
    .finally(() => 로딩 인디케이터 중지)
    .then(result => result와 err 보여줌 => error 보여줌)


// 이제, 실제 동작하는 예시를 보며 프라미스로 어떻게 비동기 동작을 처리하는지 살펴봅시다.
// 복습 차원에서 콜백 기반으로 작성한 함수를 다시 살펴봅시다.
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
  
    document.head.append(script);
}
// 이제 프라미스를 이용해 함수를 다시 작성해 봅시다.
// 새로운 함수에선 콜백 함수 대신, 스크립트 로딩이 완전히 끝났을 때 이행되는 프라미스 객체를 만들고, 이를 반환해 보겠습니다. 
// 외부 코드에선 .then을 이용해 핸들러(구독 함수)를 더하겠습니다.
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
  
      document.head.append(script);
    });
}
// 사용법은 다음과 같습니다.
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src}을 불러왔습니다!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('또다른 핸들러...'));


// 프라미스를 사용한 코드가 콜백 기반 코드보다 더 나은 점을 정리하면 다음과 같습니다.
    // 프라미스를 이용하면 흐름이 자연스럽습니다. loadScript(script)로 스크립트를 읽고, 
    // 결과에 따라 그다음(.then)에 무엇을 할지에 대한 코드를 작성하면 됩니다.	
    // 프라미스에 원하는 만큼 .then을 호출할 수 있습니다. 
    // .then을 호출하는 것은 새로운 ‘팬’(새로운 구독 함수)을 '구독 리스트’에 추가하는 것과 같습니다. 자세한 내용은 프라미스 체이닝에서 다루겠습니다.

// 콜백
// loadScript(script, callback)를 호출할 때, 함께 호출할 callback 함수가 준비되어 있어야 합니다.
// loadScript를 호출하기 이전에 호출 결과로 무엇을 할지 미리 알고 있어야 합니다.
// 콜백은 하나만 가능합니다.

