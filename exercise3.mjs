//краще реалізувати через відсікання гілок (pruning)
//застосовуючи if (currentSeq.includes(i.toString())) всередині for циклу який керує рекурсивними викликами

import fs from 'fs';
import path from 'path';

function  generateSeq(n, currentSeq = "", results = []) {
    //базовий випадок, умова для зупинки
    if(currentSeq.length === n){

        const uniqueElements = new Set(currentSeq); //Set автоматично видалить дублікати чисел

        if (uniqueElements.size === n){
            results.push(currentSeq);
        }

        return results;
    }

    //цикл замість прописування викликів вручну
    for (let i = 1; i <= 5; i++){
        generateSeq(n, currentSeq + i, results);
    }

    return results;

}

function writeFile() {
    const allCombinations = generateSeq(5);     //виклик для 5 комірок

    const outputDir = path.join(import.meta.dirname, 'outputs');  //import.meta.dirname - вбудована змінна Node.js яка містить абсолютний шлях до репо проєкту
    fs.mkdirSync(outputDir, {recursive: true});

    const filePath = path.join(outputDir, 'lab01_task3.json');
    fs.writeFileSync(filePath, JSON.stringify(allCombinations, null, 2));

    console.log(`Успішно збережено ${allCombinations.length} комбінацій у ${filePath}`);
}

writeFile();