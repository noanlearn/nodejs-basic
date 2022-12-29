const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl()
        return
    } else if (wolf.strength > tiger.strength) {
        wolf.howl()
        return
    } else {
        console.log('Tiger and Wolf have same strength');
    }
}

const tiger = new Tiger()
const wolf = new Wolf()

fighting(tiger, wolf)

// RUN: node ./modularization/index.js 
