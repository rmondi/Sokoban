class Map {

    constructor() {
        this.mapElt = document.getElementById('map');
    }

    generateBloc(index, type) {
        const blocElt = document.createElement('div');

        switch (type) {
            case 1:
                blocElt.classList.add('wall');
            break;

            case 2:
                blocElt.classList.add('ground');
            break;
        }

        // x = index % nbrPerRow
        // y = (index - x) / nbrPerRow
        const x = index % levelData.map.blocsPerRow,
              y = (index - x) / levelData.map.blocsPerRow;

        blocElt.style.left = (x * 10) + '%';
        blocElt.style.top = (y * 10) + '%';

        this.mapElt.appendChild(blocElt);
    }

    getIndex(x, y) {
        // index = x + y * nbrPerRow
        const index = x + y * levelData.map.blocsPerRow;
        return index;
    }

    getBlocType(x, y, direction) {
        let type = null;

        levelData.map.blocs.forEach(elt => {

            switch (direction) {
                case 'top':
                    type = levelData.map.blocs[(this.getIndex(x, y) - levelData.map.blocsPerRow)];
                break;

                case 'right':
                    type = levelData.map.blocs[(this.getIndex(x, y) + 1)];
                break;

                case 'bottom':
                    type = levelData.map.blocs[(this.getIndex(x, y) + levelData.map.blocsPerRow)];
                break;

                case 'left':
                    type = levelData.map.blocs[(this.getIndex(x, y) - 1)];
                break;
            }
        });

        return type;
    }

    init() {
        for (let i = 0; i <= levelData.map.blocs.length - 1; i++) {
            this.generateBloc(i, levelData.map.blocs[i]);
        }
    }
}

export default Map;
