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

        if (box.isBox(x, y)) {

            switch (direction) {

                case 'left':
                    if (!map.isWall((x - 1), y) && !box.isBox((x - 1), y)) {
                        hero.move(direction);
                        box.move(box.getIndex(x, y), direction);

                    } else {
                        console.error('Impossible to move');
                    }
                break;

                case 'up':
                    if (!map.isWall(x, (y - 1)) && !box.isBox(x, (y - 1))) {
                        hero.move(direction);
                        box.move(box.getIndex(x, y), direction);

                    } else {
                        console.error('Impossible to move');
                    }
                break;

                case 'right':
                    if (!map.isWall((x + 1), y) && !box.isBox((x + 1), y)) {
                        hero.move(direction);
                        box.move(box.getIndex(x, y), direction);

                    } else {
                        console.error('Impossible to move');
                    }
                break;

                case 'down':
                    if (!map.isWall(x, (y + 1)) && !box.isBox(x, (y + 1))) {
                        hero.move(direction);
                        box.move(box.getIndex(x, y), direction);

                    } else {
                        console.error('Impossible to move');
                    }
                break;
            }


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
