class Map {

    constructor() {
        this.mapElt = document.getElementById('map');
    }

    generateBloc(type, index) {
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

        blocElt.style.left = (x * levelData.map.blocsPerRow) + '%';
        blocElt.style.top = (y * levelData.map.blocsPerRow) + '%';

        this.mapElt.appendChild(blocElt);
    }

    getIndex(x, y) {
        // index = x + y * nbrPerRow
        const index = x + y * levelData.map.blocsPerRow;
        return index;
    }

    isWall(x, y) {
        if(levelData.map.blocs[this.getIndex(x, y)] === 1) {
            return true;
        } else {
            return false;
        }
    }

    init() {
        levelData.map.blocs.forEach((bloc, i) => {
            this.generateBloc(bloc, i);
        });
    }
}

export default Map;
