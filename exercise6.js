const triangle = [
  [3],   //row 1
  [2, 9],   //row 2
  [4, 5, 1],   //row 3
  [7, 8, 6, 1]    //row 4
];

let maxSum = 0;

function findMaxPath(i, j, sum) {
    //базовий випадок
    if (i === triangle.length) {
        if (sum > maxSum){
            maxSum = sum;
        }
        return;
    }

    findMaxPath(i + 1, j, sum + triangle[i][j]);            //down left
    findMaxPath(i + 1, j + 1, sum + triangle[i][j]);     //down right

}

findMaxPath(0, 0, 0);
console.log("Максимальна сума: ", maxSum);