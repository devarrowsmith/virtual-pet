const MAX_FITNESS = 10;

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
    growUp () {
        this.age ++;
        this.hunger += 5;
        this.fitness -= 3;
    },
    feed () {
        this.hunger -= 3;
    },
    exercise () {
        this.fitness = Math.min(this.fitness +4, MAX_FITNESS);
    }
};

module.exports = Pet;