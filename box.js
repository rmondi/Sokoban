class Box {

    constructor() {
        this.mapElt = document.getElementById('map');
    }

    generate(box, i) {
        const boxElt = document.createElement('div');
        boxElt.classList.add('box');
        boxElt.id = i;
        boxElt.style.left = (box[0] * levelData.map.blocsPerRow) + '%';
        boxElt.style.top = (box[1] * levelData.map.blocsPerRow) + '%';

        this.mapElt.appendChild(boxElt);
    }

    isBox(x, y) {
        let isBox = false;

        levelData.boxes.forEach((box, i) => {
            if (box[0] === x && box[1] === y) {
                isBox = true;
            }
        });

        return isBox;
    }

    getIndex(x, y) {
        let index = null;

        levelData.boxes.forEach((box, i) => {
            if (box[0] === x && box[1] === y) {
                index = i;
            }
        });

        return index;
    }

    move(index, direction) {
        const boxElt = document.getElementById(index);

        switch (direction) {
            case 'left':
                levelData.boxes[index][0] -= 1;
            break;

            case 'up':
                levelData.boxes[index][1] -= 1;
            break;

            case 'right':
                levelData.boxes[index][0] += 1;
            break;

            case 'down':
                levelData.boxes[index][1] += 1;
            break;
        }

        boxElt.style.left = (levelData.boxes[index][0] * levelData.map.blocsPerRow) + '%';
        boxElt.style.top = (levelData.boxes[index][1] * levelData.map.blocsPerRow) + '%';
    }

    init() {
        levelData.boxes.forEach((box, i) => {
            this.generate(box, i);
        });
    }
}

export default Box;
