function logPairsOfArray(array){ 
    //quadratic complexity  O(n^2)
    let pairs = [];
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            pairs.push(`${array[i]} and ${array[j]}`)          
        }
    }
    return pairs;
}

let array = 'abcdef';
console.log(logPairsOfArray(array));