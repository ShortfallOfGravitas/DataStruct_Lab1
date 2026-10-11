const Meadow = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0]
];

let isPerfectFound = false;     //якщо хоч одна ітерація зайняла всю галявину
let emptyCells = 0;     //теоретична верхня межа, для
let maxLength = 0;      //поточний рекорд довжини

//запобіжник
let iterations = 0;
const maxIterations = 100000000;    //100-М ітерацій обмеження

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
    if(iterations > maxIterations) return;
    iterations ++;
    if(isPerfectFound) return;

    //базовий випадок 1, перевірка меж поляни
    if ( i < 0 || i > 7 || j < 0 || j > 7 ) return;
    //базовий випадок 2, перевірка на камінь/пройдену клітинку
    if (Meadow[i][j] === 1 || Meadow[i][j] === 2) return;


    if (count > maxLength) {
        maxLength = count;
        //Pruning, відсікаємо лишні гілки
        if(maxLength === emptyCells){
            isPerfectFound = true;
            return;
        }
    }

    Meadow[i][j] = 2;

    findBiggest(i-1, j, count + 1);     //up
    findBiggest(i+1, j, count + 1);     //down
    findBiggest(i, j - 1, count + 1);   //left
    findBiggest(i, j + 1, count + 1);   //right

    Meadow[i][j] = 0    //backtracking

}

calculatePerfect();
findBiggest(1, 1, 1);
console.log(`Загальна кількість вільних клітинок: ${emptyCells}`);
console.log(`Найбільша знайдена довжина: ${maxLength}`);

if(iterations > maxIterations) {
    console.log("Спрацював запобіжник! Галявина надто порожня");
}
