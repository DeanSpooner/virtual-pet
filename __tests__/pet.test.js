const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Danni')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Danni');

        expect(pet.name).toEqual('Danni');
    });

    it("starts with an age of 0", () => {
        const pet = new Pet('Dixie');

        expect(pet.age).toEqual(0);
    });
    
    it("starts with a hunger of 0", () => {
        const pet = new Pet('Dixie');

        expect(pet.hunger).toEqual(0);
    });

    it("starts with a fitness of 10", () => {
        const pet = new Pet('Dixie');

        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increases age by 1 each time it runs', () => {
        const pet = new Pet('Dolly');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('decreases fitness by 3 each time it runs', () => {
        const pet = new Pet('Dolly');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    it('returns that pet is not alive if not', () => {
        const pet = new Pet('Danni');

        pet.fitness = -1;


        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('increases the fitness of the pet by 4 if its current fitness is 5 or less', () => {
        const pet = new Pet('Dixie');

        pet.growUp();

        pet.growUp();

        pet.walk();

        expect(pet.fitness).toEqual(8);
    });

    it('only lets the fitness reach a maximum of 10', () => {
        const pet = new Pet('Dixie');

        pet.growUp();

        pet.walk();

        expect(pet.fitness).toEqual(10);
    });


    it('returns that pet is not alive if not', () => {
        const pet = new Pet('Danni');

        pet.fitness = -21;


        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('decreases the hunger of the pet by 3 if it has at least 3 hunger', () => {
        const pet = new Pet('Danni');

        pet.hunger = 8;

        pet.feed();

        expect(pet.hunger).toEqual(5);
    });

    it('only lets the hunger reach 0 at lowest', () => {
        const pet = new Pet('Danni');

        pet.feed();

        expect(pet.hunger).toEqual(0);
    });


    it('returns that pet is not alive if not', () => {
        const pet = new Pet('Danni');

        pet.hunger = 31;


        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('gives a message about needing a walk if pet has fitness of 3 or less', () => {
        const pet = new Pet('Danni');

        pet.fitness = 2;


        expect(pet.checkUp()).toEqual('I need a walk');
    })

    it('gives a message saying pet is hungry if they have hunger of 5 or more', () => {
        const pet = new Pet('Danni');

        pet.hunger = 7;

        expect(pet.checkUp()).toEqual('I am hungry');
    })

    it('gives a message saying pet is hungry and needs a walk if they have hunger of 5 or more AND fitness of 3 or less', () => {
        const pet = new Pet('Danni');

        pet.hunger = 7;

        pet.fitness = 1;

        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    })

    it('gives a message saying pet feels great if hunger is less than 5 and fitness is more than 3', () => {
        const pet = new Pet('Danni');

        expect(pet.checkUp()).toEqual('I feel great!');
    })

    it('returns that pet is not alive if not', () => {
        const pet = new Pet('Danni');

        pet.fitness = -1;


        expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
    });
});

describe('isAlive', () => {
    it('returns false if pet fitness is 0 or less', () => {
        const pet = new Pet('Danni');

        pet.fitness = -1;


        expect(pet.isAlive).toEqual(false);
    });

    it('returns false if pet hunger is 10 or more', () => {
        const pet = new Pet('Danni');

        pet.hunger = 11;


        expect(pet.isAlive).toEqual(false);
    });

    it('returns false if pet age is 30 or more', () => {
        const pet = new Pet('Danni');

        pet.age = 32;


        expect(pet.isAlive).toEqual(false);
    });

    it('returns true otherwise', () => {
        const pet = new Pet('Danni');


        expect(pet.isAlive).toEqual(true);
    });
});
