'use strict';
class First {
    
    hello(){
       console.log('Привет, я метод родителя!');
    }
}
class Second extends First{

    hello(){
        super.hello();
        console.log('А я наследумый метод!');
    }
}
let say = new Second();
say.hello();
