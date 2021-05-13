const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

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
        this.hunger = Math.max(this.hunger - 3, MIN_HUNGER);
    },
    exercise () {
        this.fitness = Math.min(this.fitness + 4, MAX_FITNESS);
    },
    checkUp () {
        return "Check-up";
    }
};

module.exports = Pet;