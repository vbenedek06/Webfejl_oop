
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatch = 0;
    }

    play() {
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch);
    }

    getTierLevel() {
        if (this.playedMatch >= 0 && this.playedMatch <= 3) {
            return 'A';
        } else if (this.playedMatch >= 4 && this.playedMatch <= 6) {
            return 'B';
        } else {
            return 'C';
        }
    }
}


class Student extends Person {
    constructor(name, school) {
        super(name); 
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

// Állatok osztályai
class Animal {
    constructor(name = "Ismeretlen állat") {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} hangot ad ki.`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name} repül.`);
    }
}

class Mammal extends Animal {
    walk() {
        console.log(`${this.name} sétál.`);
    }
}

// Példányosítások
const person = new Person("János");
console.log(person.getName());

const student = new Student("Anna", "Webfejlesztési Iskola");
console.log(student.getName());
console.log(student.getSchool());

const bird = new Bird("Papagáj");
bird.fly();

const mammal = new Mammal("Kutya");
mammal.makeSound();
mammal.walk();

console.log("Minden osztály működik!");

// tesztelés
const gomszab = new Player('gomszab');
console.log(gomszab);
gomszab.play();
console.log(gomszab.getTierLevel());
