const maxFitness = 10;
const noHunger = 0;

class Pet {
    constructor(name) {
        this.age = 0;
        this.hunger = noHunger;
        this.fitness = maxFitness;
        this.name = name;
        this.children = [];
    }

    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    } //This is a getter method that puts in a property using a function

    /*     isAlive() {
            if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
                return false;
            }
            return true;
        } */

    adoptChild(child) {
        this.children.push(child);
    };

    growUp() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        this.age += 1;
        this.fitness -= 3;
        this.hunger += 2;
    }

    walk() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        if (this.fitness + 4 >= maxFitness) {
            this.fitness = maxFitness;
        }
        else {
            this.fitness += 4;
        }
    }

    feed() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        if (this.hunger - 3 <= 0) {
            this.hunger = noHunger;
        } else {
            this.hunger -= 3;
        }
    }

    checkUp() {
        if (!this.isAlive) {
            return 'Your pet is no longer alive :(';
        }
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }
        if (this.fitness <= 3) {
            return 'I need a walk';
        }
        if (this.hunger >= 5) {
            return 'I am hungry';
        }
        return 'I feel great!'
    }
}



module.exports = Pet;