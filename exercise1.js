function  generateSeq(n, currentSeq = "") {
    //базовий випадкок, умова для зупинки
    if(currentSeq.length === n){
        console.log(currentSeq);
        return;
    }

    //перший рекурсивний виклик для 0
    generateSeq(n, currentSeq + "0");
    //другий рекурсивний виклик для 1
    generateSeq(n, currentSeq + "1");

}

generateSeq(5);