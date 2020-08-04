

// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])

// 메모리에는 어떤일이 벌어지고 있나?
// user 는 이름과 나이가 저장되어 있고
// user2 또한 user 의 변수를 가리키고 있다.
const user = { name : 'junyeong', age : '20'};
const user2 = user;

user.name = 'coder';
console.log(user); // 이름이 coder로 변경된다.
// user2 가 가르키고 있는 user 의 변수가 변경되게 된다.

// 그럼 object 를 복제할 수 있는 방법이 있을까?

// old way 
// 빈 object 를 만들고, 기존의 값을 원시적으로 넣어주는 방법
const user3 = {};
for (key in user){ //user 안에 키와 값을 받아온다.
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// object.assign -> object 는 기본탑재 객체이며, javascript 의 모든 객체는 이 것을 상속한다.
// ctrl 로 api 아 어떻게 정의 되어있는지 확인해본다.
const user4 = {};
Object.assign(user4, user);

const user4 = Object.assign({}, user); // 린턴값 자체가 객체이므로 이렇게 작성해도 된다.

console.log(user4);


// another example
// assign 을 사용하면 값을 복사할 때, 객체안에 같은 키가 있다면 값을 계속 덮어 쓴다. 이점 주의

const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({},fruit1, fruit2);
console.log(mixed.color); // 객체의 값이 뒤에 나온 것으로 덮어 씌여진다. blue
console.log(mixed.size); // big

















