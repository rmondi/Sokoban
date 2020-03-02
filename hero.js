class Hero {

    constructor(hero, map) {
        this.x = hero.x;
        this.y = hero.y;
        this.heroElt = document.getElementById('hero');
        this.map = map;
    }

    getType(direction) {
        let type = null;

        this.map.forEach(elt => {

            switch (direction) {
                case 'top':
                    if (elt.x === this.x && elt.y === (this.y - 1)) {
                        type = elt.type;
                    }
                break;

                case 'right':
                    if (elt.x === (this.x + 1) && elt.y === this.y) {
                        type = elt.type;
                    }
                break;

                case 'bottom':
                    if (elt.x === this.x && elt.y === (this.y + 1)) {
                        type = elt.type;
                    }
                break;

                case 'left':
                    if (elt.x === (this.x - 1) && elt.y === this.y) {
                        type = elt.type;
                    }
                break;
            }
        });

        return type;
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
        this.heroElt.style.left = (this.x * 10) + '%';
        this.heroElt.style.top = (this.y * 10) + '%';
        console.log(`x: ${this.x}, y: ${this.y}`);
    }

    moveTop() {
        if (this.canMove(this.getType('top'))) {
            this.y -= 1;
            this.move(this.x, this.y);
        } else {
            console.error('Impossible to move');
        }
    }

    moveRight() {
        if (this.canMove(this.getType('right'))) {
            this.x += 1;
            this.move(this.x, this.y);
        } else {
            console.error('Impossible to move');
        }
    }

    moveBottom() {
        if (this.canMove(this.getType('bottom'))) {
            this.y += 1;
            this.move(this.x, this.y);
        } else {
            console.error('Impossible to move');
        }
    }

    moveLeft() {
        if (this.canMove(this.getType('left'))) {
            this.x -= 1;
            this.move(this.x, this.y);
        } else {
            console.error('Impossible to move');
        }
    }
}

export default Hero;
