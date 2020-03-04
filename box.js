class Box {

    constructor() {
        this.mapElt = document.getElementById('map');
    }

    generateBox(box) {
        const boxElt = document.createElement('div');
        boxElt.classList.add('box');
        boxElt.style.left = (box[0] * levelData.map.blocsPerRow) + '%';
        boxElt.style.top = (box[1] * levelData.map.blocsPerRow) + '%';

        this.mapElt.appendChild(boxElt);
    }

    isBox(x, y) {
        let index = null;

        levelData.boxes.forEach((box, i) => {
            if (box[0] === x && box[1] === y) {
                index = i;
            }
        });

        return index;
    }

    getBoxCoords(index) {
        
    }

    move(index, x, y) {

    }

    init() {
        levelData.boxes.forEach(box => {
            this.generateBox(box);
        });
    }
}

export default Box;
