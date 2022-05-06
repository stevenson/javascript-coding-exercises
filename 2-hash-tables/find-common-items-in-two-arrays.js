// returns common items if the arrays share common values
function intersection(array1, array2){
    // O(n^2)
    let intersection = [];
    for(let i = 0; i<array1.length; i++){
        for(let j = 0; j<array2.length; j++){
            if(array1[i]===array2[j]) {
                intersection.push(array1[i]);
            }
        }        
    }
    return intersection;
}

// returns common items if the arrays share common values
function intersection2(array1, array2){
    // O(a+b)
    let map = {};
    let intersection = [];
    for(let index = 0; index<array1.length; index++){
        if(!map[array1[index]]){
            map[array1[index]] = true;
        }
    }
    for(let index = 0; index<array2.length; index++){
        if(map[array2[index]]) {
            intersection.push(array2[index]);
        }
    }
    return intersection;
}


console.log(intersection2('qwertya','afghjk'));