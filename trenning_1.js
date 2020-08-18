
// 1. Найти пересечение двух массивов

function  intersection(array1, array2){
    const arrSum = new Set();
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i] === array2[j]) arrSum.add(array1[i])
        }
    }

    return Array.from(arrSum);
}

const mass1 = [2,3, 5,6, 7,7, 97]
const mass2 = [1,8 ,3,4,9, 7, 90, 97];

// intersection(mass1, mass2);

console.log(intersection(mass1, mass2))

// 2. Реализовать функцию map


function double(value){
    return value * 2;
}

function map(callback, array){
    const newArray = [];
    for(let i=0; i<array.length; i++){

        newArray.push(callback(array[i]));
    }
    return newArray;
}

const arrMap = [1,3, 4,6,7,78];

console.log(map(double, arrMap))

