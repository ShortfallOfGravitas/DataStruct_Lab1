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

function floodFill(i, j, count){
    //базовий випадок 1, перевірка на межі мапи
    if( i < 0 || i > 9 || j < 0 || j > 9 ) return;
    //базовий випадок 2, перевірка вже пройдених клітинок
    if(map[i][j] === 1 || map[i][j] === 2) return;

    map[i][j] = 2;

    floodFill(i-1, j, count);   //up
    floodFill(i+1, j, count);   //down
    floodFill(i, j-1, count);   //left
    floodFill(i, j+1, count);   //right

}

function scanMap(){

}