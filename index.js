import Map from './map.js';
import Hero from './hero.js';

const map = new Map(mapData);
const hero = new Hero(heroData, mapData);

map.init();
hero.move();

document.addEventListener('keydown', e => {

    switch (e.keyCode) {
        case 37:
            hero.moveLeft();
        break;

        case 38:
            hero.moveTop();
        break;

        case 39:
            hero.moveRight();
        break;

        case 40:
            hero.moveBottom();
        break;
    }
});
