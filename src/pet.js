class Pet {
    constructor(name) {
        this.age = 0;
        this.name = name;
    }

    growUp() {
        this.age += 1;
    }
}



module.exports = Pet;