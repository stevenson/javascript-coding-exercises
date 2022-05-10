const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for ( let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function selectionSort(array){
    const length = array.length;
    for ( let i = 0; i < length; i++){
        for (let j = i; j < length; j++){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        console.log(array);
    }
    return array;
}

function insertionSort(array){
    for(let i =0; i< array.length; i ++){
        if( array[i] < array[0]){
            array.unshift(array.splice(i,1)[0]);
        }else{
            for(let j=1; j < i; j++){
                if(array[j-1] < array[i] && array[i] < array[j] ){
                    array.splice(j,0, array.splice(i,1)[0]);
                }
            }
        }
    }
    return array;
}

console.log('given:', numbers);
//console.log(bubbleSort(numbers));
//console.log(selectionSort(numbers));
console.log('sorted', insertionSort(numbers));