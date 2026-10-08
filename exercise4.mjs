
const lab = [
    [1, 1, 1, 1, 1, 1],     //0
    [1, 0, 0, 0, 1, 1],     //1 старт у 1,1
    [1, 0, 1, 0, 0, 1],     //2
    [1, 0, 1, 1, 0, 1],     //3
    [1, 0, 0, 0, 0, 0],     //4
    [1, 1, 1, 1, 1, 1],     //5
];

let isExitFound = false;

function findPath(i, j, count){
    //базовий випадок, умова для зупинки
    if ( i < 0 || i > 5 || j < 0 || j > 5 ){
        let message = `Людина вийшла з лабіринту за ${count} кроків`;
        isExitFound = true;     //відмічаємо, що вихід знайдено
        return message;
    }

    lab[i][j] = 2; //відмічаємо клітинку як пройдену

    if ( lab[i-1][j] !== 2 && lab[i-1][j] !== 1 ) {
        findPath(i-1, j, count + 1);
    }

    if ( lab[i+1][j] !== 2 && lab[i+1][j] !== 1 ){
        findPath(i+1, j, count + 1);
    }

    if( lab[i][j-1] !== 2 && lab[i][j-1] !== 1 ){
        findPath(i, j-1, count + 1);
    }

    if( lab[i][j+1] !== 2 && lab[i][j+1] !== 1 ){
        findPath(i, j+1, count + 1);
    }
}

const result = findPath(1, 1, 0);
if(isExitFound === false){
    console.log("Виходу немає!");
} else {
    console.log(result);
}