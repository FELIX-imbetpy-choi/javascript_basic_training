'use strict'





// 요약
// 위크맵은 맵과 유사한 컬렉션입니다. 위크맵을 구성하는 요소의 키는 오직 객체만 가능합니다. 키로 사용된 객체가 메모리에서 삭제되면 이에 대응하는 값 역시 삭제됩니다.
// 위크셋은 셋과 유사한 컬렉션입니다. 위크셋엔 객체만 저장할 수 있습니다. 위크셋에 저장된 객체가 도달 불가능한 상태가 되면 해당 객체는 메모리에서 삭제됩니다.
// 두 자료구조 모두 구성 요소 전체를 대상으로 하는 메서드를 지원하지 않습니다. 구성 요소 하나를 대상으로 하는 메서드만 지원합니다.
// 객체엔 ‘주요’ 자료를, 위크맵과 위크셋엔 ‘부수적인’ 자료를 저장하는 형태로 위크맵과 위크셋을 활용할 수 있습니다. 객체가 메모리에서 삭제되면, (그리고 오로지 위크맵과 위크셋의 키만 해당 객체를 참조하고 있다면) 위크맵이나 위크셋에 저장된 연관 자료들 역시 메모리에서 자동으로 삭제됩니다.



