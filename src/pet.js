const maxFitness = 10;
const noHunger = 0;

class Pet {
    constructor(name) {
        this.age = 0;
        this.hunger = noHunger;
        this.fitness = maxFitness;
        this.name = name;
    }

    growUp() {
        this.age += 1;
        this.fitness -= 3;
    }

    walk() {
        if (this.fitness + 4 >= maxFitness) {
            this.fitness = maxFitness;
        }
        else {
            this.fitness += 4;
        }
    }

    feed() {
        if (this.hunger - 3 <= 0) {
            this.hunger = noHunger;
        } else {
            this.hunger -= 3;
        }
    }
}



module.exports = Pet;