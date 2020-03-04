class Hero {

    constructor() {
        this.heroElt = document.getElementById('hero');
    }

    canMove(type) {
        /*
         * type:
         *   - 1 : wall
         *   - 2 : ground
         *   - 3 : box
         */
        switch (type) {
            case 1:
                return false;
            break;

            case 2:
                return true;
            break;
        }
    }

    move() {
        this.heroElt.style.left = (levelData.hero[0] * 10) + '%';
        this.heroElt.style.top = (levelData.hero[1] * 10) + '%';
        console.log(`x: ${levelData.hero[0]}, y: ${levelData.hero[1]}`);
    }

    moveTop() {
        levelData.hero[1] -= 1;
        this.move();
    }

    moveRight() {
        levelData.hero[0] += 1;
        this.move();
    }

    moveBottom() {
        levelData.hero[1] += 1;
        this.y += 1;
        this.move();
    }

    moveLeft() {
        levelData.hero[0] -= 1;
        this.move();
    }
}

export default Hero;
