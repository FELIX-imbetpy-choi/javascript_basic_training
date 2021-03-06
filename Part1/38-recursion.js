'use strict'










// 요약

// 재귀 (recursion) - 함수 내부에서 자기 자신을 호출하는 것을 나타내는 프로그래밍 용어입니다
// 재귀함수는 우아하게 원하는 문제를 해결할 때 자주 쓰이곤 합니다
// 함수가 자신을 호출하는 단계를 재귀 단계라고 부르는데, basis 라고도 불리는 재귀의 베이스는 
// 작업을 아주 간단하게 만들어서 함수가 더 이상은 서브 호출을 만들지 않게 해주는 인수 입니다

// 재귀적으로 정의된 자료 구조는 자기 자신을 이용해 자료 구조를 정의 합니다
// 재귀적으로 정의된 자료구조 속에서 연결리스트는 리스트 혹은 null 을 참조하는 개체로 
// 이루어진 데이터 구조를 사용해 정의 됩니다

// HTML 문서의 HTML 요소 트리나 위에서 다룬 부서를 나타내는 트리 역시 재귀적인 자료 구조로 만들었습니다.
// 이렇게 재귀적인 자료 구조를 사용하면 가지가 여러 개인데 각 가지가 여러 가지로 뻗쳐 나가는 형태로 자료 구조를 만들 수 있습니다.
// 예시에서 구현한 sumSalary같은 재귀 함수를 사용하면 각 분기(가지)를 순회할 수 있습니다.


