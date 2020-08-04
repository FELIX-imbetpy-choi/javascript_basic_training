'use strict'


// class 나 object 가 없다면
// 우리가 정의한 변수가 여기저기서 떠다니며 규모있는 프로젝트를 만들기 힘들다.
// class 는 조금 더 연관잇는 데이터를 묶는 컨테이너 같은 아이.
// class 란 연관있는 데이터를 묶어놓은 속성과 메소드를 묶은 것을 말한다.
// class 안에 메소드는 없고 속성만 있는 아이들을 데이터클래스라고 한다.
// class 안에서도 내부에서만 보이는 변수와 전역변수를 나누어서 캡슐화
// 클래스를 이용해서 상속과 다형성을 이룰 수 있다.
// 우리가 실제로 살아가는 세상 안에서 볼 수 있는 개념을 구현한 것이다.
// 객체지향언어로 프로그래밍을 잘 하는 개발자는 문제나 개념을 객체로 잘 구현해 내는 개발자를 뜻한다.


// 1 class object 개념정리(template / declare once / no data in)
// 클래스는 붕어빵을 만드는 틀, 청사진 이다.
// 클래스에는 데이터가 들어있지 않고, 틀만 선언하는 것이다.
// 클래스를 이용해서 실제로 데이터를 넣어서 만드는 것이 object 이다.
// 클래스를 이용해서 새로운 인스턴스를 생성하면 object
// 클래스는 정의만 한 것이라 실제 메모리에 올라가지 않지만
// 클래스를 이용해서 만들어진 오브젝트는 메모리에 올라가게 된다.
// javascript 에서는 클래스가 ES6 에서 추가되어졌다. ( 클래스가 도입 전에는 클래스 정의 없이 바로 오브젝트를 만들었다.)


// 2 클래스 선언
class person {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // method
    speak(){
        console.log(`${(this.name)} : hello!`);
    }
}

// object 생서
const junyeong = new person('junyeong',20);

console.log(junyeong.name);
console.log(junyeong.age);
junyeong.speak();


// 3 Getter Setter
// 클래스를 사용하는 사용자나 동료가 처리방식에 맞지 않는 방법으로 클래스를 사용할 때 이를 방지한다.
// constructor 에서 
// getter 를 정의하는 순간 constructor 의 this.age 는 메모리에 올라간 데이터를 읽는 것이 아니라
// getter 를 호출하게 된다.
// setter 를 정의하는 순간 this.age 에 값을 할당할 때 메모리의 값을 할당하는 것이 아니라
// setter 를 호출하게 된다.
// =age 에서 값을 할당할 때 setter 를 호출하게 되므로, this.age 에 할당할 때에도 setter 가 또 setter 를 호출한다.
// 그렇기 때문에 무한대로 반복되는 callstack error 가 뜬다. 때문에 getter setter 안에서의 변수명을 다르게 설정해야 한다.


class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;

    }

    set age(value){
        if (value < 0){
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'Jobs', 3); // 사용자가 나이를 -1 로 설정해도 그대로 -1이 적용
console.log(user1.age);



// 4 Field (public, private)
// 너무 최근에 추가된 부분이기 때문에 개발자들이 아직까지 사용하지는 않는다.
// 아직 사파리에서도 지원되지 않는다. 쓰려면 바벨을 이용해야 된다. 지금은 쓰기 무리

class Experiment{
    publicField = 2;
    #privateField = 0; // 클래스 외부에서는 읽기 변경 불가한다.
}

const experiment = new Experiment();
console.log(experiment.publicField);
// console.log(experiment.#privateField); // 오류발생



// 5 Static
// 데이터에 상관 없이 클래스가 가지는 고유값이나 반복되는 메소드가 있을 때 
// static 키워드를 붙이면 object 에 상관없이 클래스에 연결된다.
// 들어오는 데이터에 상관없이 공통적으로 클래스에서 사용하는 것이라면 static 을 사용하는 것이 메모리 사용을 줄일 수 있다.

class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // object 안에 static 은 작동하지 않는다.
console.log(Article.publisher); // static 을 사용하면, class 자체에 있기 때문에 클래스를 이용해야 호출이 가능.



// 6 상속과 다형성
class Shape{
    constructor(width, height, color){
        this.width;
        this.height;
        this.color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}


class Rectangle extends Shape {} // 이렇게 선언만 해도 자동적으로 상속이 이뤄짐
class Triangle extends Shape { // 필요한 함수만 재정의 하여 사용할 수 있다. overriding. 

    draw(){ // 재정의한 함수는 더이상 부모함수의 것을 사용하지 않는다.
        console.log('🔺')
        super.draw(); // 부모메소드를 함께 호출하고 싶을 때 사용
    }
    getArea(){
        return (this.width * this.height) / 2 ;
    }
}

const rectangle = new Rectangle(20,70,'blue');
rectangle.draw();
console.log(rectangle.getArea);
const triangle = new Triangle(20,70,'red');
triangle.draw();


// 7 instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽에 클래스의 인스턴스인지 확인하는 것
// true 와 false 를 출력한다.

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 모든 오브젝트는 자바스크립트의 objec 를 상속한 것이다.



 // js 를 사용하는 데이 ㅇㅆ어서 모든 오브젝트는 자바스크립트의 object 를 상속한 것이다.
 // 왼쪽에 있는 오브젝트가 오른쪽에 클래스의 인스턴스인지 확인하는 것이다.
 




