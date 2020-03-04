class Hero {

    constructor() {
        this.heroElt = document.getElementById('hero');
    }

    move(direction) {
        switch (direction) {
            case 'up':
                levelData.hero[1] -= 1;
                this.move();
            break;

            case 'right':
                levelData.hero[0] += 1;
                this.move();
            break;

            case 'down':
                levelData.hero[1] += 1;
                this.move();
            break;

            case 'left':
                levelData.hero[0] -= 1;
                this.move();
            break;

            default:
                this.heroElt.style.left = (levelData.hero[0] * levelData.map.blocsPerRow) + '%';
                this.heroElt.style.top = (levelData.hero[1] * levelData.map.blocsPerRow) + '%';
                console.log(`x: ${levelData.hero[0]}, y: ${levelData.hero[1]}`);
            break;
        }
    }
}

export default Hero;
