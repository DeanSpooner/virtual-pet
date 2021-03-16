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
    })

    it('decreases fitness by 3 each time it runs', () => {
        const pet = new Pet('Dolly');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    })


});