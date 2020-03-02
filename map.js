class Map {

    constructor(data) {
        this.map = data;
        this.mapElt = document.getElementById('map');
    }

    generateBloc(bloc) {
        const {type, movable, x, y} = bloc;
        const blocElt = document.createElement('div');

        switch (type) {
            case 1:
                blocElt.classList.add('wall');
            break;

            case 2:
                blocElt.classList.add('ground');
            break;
        }

        blocElt.style.left = (x * 10) + '%';
        blocElt.style.top = (y * 10) + '%';

        this.mapElt.appendChild(blocElt);
    }

    init() {
        this.map.forEach(bloc => {
            this.generateBloc(bloc);
        });
    }
}

export default Map;
