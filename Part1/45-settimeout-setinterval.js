'use strict'


// "setTimeout과 setInterval을 이용한 호출 스케줄링"
// 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것을 '호출 스케줄링(scheduling a call)'이라고 합니다.
// 호출 스케줄링을 구현하는 방법은 두 가지가 있습니다.
// setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법
// setInterval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법



// "요약"
// setInterval(func, delay, ...args)과 setTimeout(func, delay, ...args)은 delay밀리초 후에 func을 규칙적으로, 또는 한번 실행하도록 해줍니다.
// setInterval·setTimeout을 호출하고 반환받은 값을 clearInterval·clearTimeout에 넘겨주면 스케줄링을 취소할 수 있습니다.
// 중첩 setTimeout을 사용하면 setInterval을 사용한 것보다 유연하게 코드를 작성할 수 있습니다. 여기에 더하여 지연 간격 보장이라는 장점도 있습니다.
// 대기 시간이 0인 setTimeout(setTimeout(func, 0) 혹은 setTimeout(func))을 사용하면 ‘현재 스크립트의 실행이 완료된 후 가능한 한 빠르게’ 원하는 함수를 호출할 수 있습니다.
// 지연 없이 중첩 setTimeout을 5회 이상 호출하거나 지연 없는 setInterval에서 호출이 5회 이상 이뤄지면, 4밀리초 이상의 지연 간격이 강제로 더해집니다. 이는 브라우저에만 적용되는 사항이며, 하위 호환성을 위해 유지되고 있습니다.
// 스케줄링 메서드를 사용할 땐 명시한 지연 간격이 보장되지 않을 수도 있다는 점에 유의해야 합니다.

// 아래와 같은 상황에서 브라우저 내 타이머가 느려지면 지연 간격이 보장되지 않습니다.
// CPU가 과부하 상태인 경우
// 브라우저 탭이 백그라운드 모드인 경우
// 노트북이 배터리에 의존해서 구동 중인 경우









