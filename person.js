// Module Wrapper Function

// ( function (exports, require, module, __filenae, __dirname))

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greeting(){
        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos`);
    }
}
module.exports = Person;