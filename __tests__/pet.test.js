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
});

describe('growUp', () => {
    it('increases age by 1 each time it runs', () => {
        const pet = new Pet('Dolly');

        pet.growUp();

        expect(pet.age).toEqual(1);
    })


});