function  generateSeq(n, currentSeq = "") {
    //базовий випадкок, умова для зупинки
    if(currentSeq.length === n){
        console.log(currentSeq);
        return;
    }

   //цикл замість прописування викликів вручну
    for (let i = 1; i <= 5; i++){
        generateSeq(n, currentSeq + i);
    }

}

generateSeq(5);     //виклик для 5-ти ячейок