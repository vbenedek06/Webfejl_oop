// function Player(nickname) {
//     this.nickname = nickname
//     this.playedMatch = 0
// }

// Player.prototype.play = function () {
//     this.playedMatch++
//     console.log(this.nickname, this.playedMatch)
// }

// Player.prototype.getTierLevel = function () {
//     if (this.playedMatch >= 0 && this.playedMatch <= 3) {
//         return 'A'

//     } else if (this.playedMatch >= 4 && this.playedMatch <= 6) {
//         return 'B'
//     } else {
//         return 'C'
//     }

// }



class Player {
    constructor(nickname) {
        this.nickname = nickname
        this.playedMatch = 0

    }
    play() {
        this.playedMatch++
        console.log(this.nickname, this.playedMatch)
    }
    getTierLevel() {
        if (this.playedMatch >= 0 && this.playedMatch <= 3) {
            return 'A'
        } else if (this.playedMatch >= 4 && this.playedMatch <= 6) {
            return 'B'
        } else {
            return 'C'
        }
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name); // Az ősosztály konstruktorának meghívása
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}



const gomszab = new Player('gomszab')
console.log(gomszab);
gomszab.play()
console.log(gomszab.getTierLevel())
