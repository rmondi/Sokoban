import Map from './map.js';
import Box from './box.js';
import Hero from './hero.js';

const map = new Map();
const box = new Box();
const hero = new Hero();

map.init();
box.init();
hero.move();

function action(x, y, direction) {
    if (!map.isWall(x, y)) {
        const isBox = box.isBox(x, y);

        if (isBox != null) {
            console.log(isBox);
        } else {
            hero.move(direction);
        }
    } else {
        console.error('Impossible to move');
    }
}

document.addEventListener('keydown', e => {

    switch (e.keyCode) {
        case 37: // left
            action((levelData.hero[0] - 1), levelData.hero[1], 'left');
        break;

        case 38: // up
            action(levelData.hero[0], (levelData.hero[1] - 1), 'up');
        break;

        case 39: // right
            action((levelData.hero[0] + 1), levelData.hero[1], 'right');
        break;

        case 40: // bottom
            action(levelData.hero[0], (levelData.hero[1] + 1), 'down');
        break;
    }
});
