function mergeSortedArrays(array1,array2){
    const mergedArray = [];

    // handle edge cases
    if(array1.length === 0){
        return array2;
    }
    if(array2.length ===0){
        return array1l
    }
    let i = 0;
    let j = 0;
    while (array1[i] !== undefined || array2[j] !== undefined){
        if(array2[j] === undefined || array1[i] < array2[j]){ // should push array1 item
            mergedArray.push(array1[i]);
            i++;
        }else{ // should push array2 item
            mergedArray.push(array2[j]);
            j++
        }        
    }
    return mergedArray;
}

console.log(mergeSortedArrays([...'013'],[...'245']));