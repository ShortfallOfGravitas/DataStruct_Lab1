import fs from 'fs';
import path from 'path';

function  generateSeq(n, currentSeq = "", results = []) {
    //базовий випадкок, умова для зупинки
    if(currentSeq.length === n){
        results.push(currentSeq);
        return results;
    }

   //цикл замість прописування викликів вручну
    for (let i = 1; i <= 5; i++){
        generateSeq(n, currentSeq + i, results);
    }

    return results;

}

function writeFile(res_arr) {
    const allCombinations = generateSeq(5);     //виклик для 5-ти ячейок

    const outputDir = path.join(import.meta.dirname, 'outputs');
    fs.mkdirSync(outputDir, {recursive: true});

    const filePath = path.join(outputDir, 'lab01_task2.json');
    fs.writeFileSync(filePath, JSON.stringify(allCombinations, null, 2));

    console.log(`Успішно збережено ${allCombinations.length} комбінацій у ${filePath}`);
}

writeFile();