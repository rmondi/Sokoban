import Map from './map.js';
import Hero from './hero.js';

const map = new Map();
const hero = new Hero();

map.init();
hero.move();

document.addEventListener('keydown', e => {

    switch (e.keyCode) {
        case 37:
            if (hero.canMove(map.getBlocType(levelData.hero[0], levelData.hero[1], 'left'))) {
                hero.moveLeft();
            } else {
                console.error('Impossible to move');
            }
        break;

        case 38:
            if (hero.canMove(map.getBlocType(levelData.hero[0], levelData.hero[1], 'top'))) {
                hero.moveTop();
            } else {
                console.error('Impossible to move');
            }
        break;

        case 39:
            if (hero.canMove(map.getBlocType(levelData.hero[0], levelData.hero[1], 'right'))) {
                hero.moveRight();
            } else {
                console.error('Impossible to move');
            }
        break;

        case 40:
            if (hero.canMove(map.getBlocType(levelData.hero[0], levelData.hero[1], 'bottom'))) {
                hero.moveBottom();
            } else {
                console.error('Impossible to move');
            }
        break;
    }
});
