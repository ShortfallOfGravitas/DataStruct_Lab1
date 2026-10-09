
const lab = [
    [1, 1, 1, 1, 1, 1],     //0
    [1, 0, 0, 0, 1, 1],     //1 старт у 1,1
    [1, 0, 1, 0, 0, 1],     //2
    [1, 0, 1, 1, 0, 1],     //3
    [1, 0, 0, 0, 0, 0],     //4
    [1, 1, 1, 1, 1, 1],     //5
];

let isExitFound = false;
let minSteps = Infinity;

function findPath(i, j, count){
    //відсікання гілок (pruning)
    if (count >= minSteps) return;
    //базовий випадок 1: межі лабіринту
    if ( i < 0 || i > 5 || j < 0 || j > 5 ){

        if(count < minSteps){
            minSteps = count;
        }

        isExitFound = true;     //відмічаємо, що вихід знайдено
    }

    //базовий випадок 2: це стіна чи ми вже тут були?
    if(lab[i][j] === 1 || lab[i][j] === 2){
        return;
    }

    lab[i][j] = 2; //відмічаємо клітинку як пройдену

    findPath(i-1, j, count + 1);    //up
    findPath(i+1, j, count + 1);    //down
    findPath(i, j-1, count + 1);    //left
    findPath(i, j+1, count + 1);    //right

    //backtracking
    lab[i][j] = 0;

}

findPath(1, 1, 0);
console.log("Найкоротший шлях:", minSteps);
if(!isExitFound){
    console.log("Виходу немає!");
}