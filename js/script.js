class First {
    
    hello(){
       return console.log('Привет, я метод родителя!');
    }
}
class Second extends First{

    hello(){
        super.hello();
        return console.log('А я наследумый метод!');
    }
}
let say = new Second();
console.log(say.hello());
