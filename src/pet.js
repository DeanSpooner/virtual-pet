class Pet {
    constructor(name) {
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.name = name;
    }

    growUp() {
        this.age += 1;
        this.fitness -= 3;
    }
}



module.exports = Pet;