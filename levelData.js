/*
 * blocs (type) :
 *   - 0 : empty
 *   - 1 : wall
 *   - 2 : ground
 */

let levelData = {
    hero: [1,1],
    boxes: [
        [3,2],
        [2,4],
        [3,6]
    ],
    map: {
        blocsPerRow: 10,
        blocs: [
            1,1,1,1,1,1,1,1,1,1,
            1,2,2,2,2,2,2,2,2,1,
            1,2,2,2,2,2,2,2,2,1,
            1,2,2,1,1,1,2,2,2,1,
            1,2,2,2,2,2,2,2,2,1,
            1,2,1,2,2,2,2,2,2,1,
            1,2,1,2,2,1,1,1,2,1,
            1,2,1,2,2,2,2,2,2,1,
            1,2,2,2,2,2,2,2,2,1,
            1,1,1,1,1,1,1,1,1,1
        ]
    }
};
