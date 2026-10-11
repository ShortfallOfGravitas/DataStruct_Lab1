const map = [
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let lakeCount = 0;
let counter = 0;

function floodFill(i, j){
    //базовий випадок 1, перевірка на межі мапи
    if( i < 0 || i > 9 || j < 0 || j > 9 ) return;
    //базовий випадок 2, перевірка вже пройдених клітинок
    if(map[i][j] === 1 || map[i][j] === 2) return;

    map[i][j] = 2;

    floodFill(i-1, j);   //up
    floodFill(i+1, j);   //down
    floodFill(i, j-1);   //left
    floodFill(i, j+1);   //right
}

function scanMap(){
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(map[i][j] === 0){
                lakeCount++;
                floodFill(i, j);
            }
        }
    }

    console.log(`Кількість озер на карті: ${lakeCount}`);
}

scanMap();