const Meadow = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

let isPerfectFound = false;     //якщо хоч одна ітерація зайняла всю галявину
let emptyCells = 0;     //теоретична верхня межа, для
let maxLength = 0;      //поточний рекорд довжини

function calculatePerfect(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(Meadow[i][j] === 0){
                emptyCells++;
            }
        }
    }
}

function findBiggest(i, j, count){
    if (count > maxLength) maxLength = count;

    //базовий випадок 1, перевірка на камінь/пройдену клітинку
    if (Meadow[i][j] === 1 || Meadow[i][j] === 2) return;

    //базовий випадок 2, перевірка меж поляни
    if ( i < 0 || i > 7 || j < 0 || j > 7 ) return;

    Meadow[i][j] = 2;

    findBiggest(i-1, j, count + 1);     //up
    findBiggest(i+1, j, count + 1);     //down
    findBiggest(i, j - 1, count + 1);   //left
    findBiggest(i, j + 1, count + 1);   //right

}
