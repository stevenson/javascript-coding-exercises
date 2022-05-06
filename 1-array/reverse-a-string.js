function reverse(array){
    for(let i=0; i< array.length/2; i++){
        console.log(array.length-1-i, i);
        const temp = array[i];
        array[i]=array[array.length - 1- i];
        array[array.length -1 - i] = temp;
        console.log(array);
    }
    return array;
}

console.log(reverse([...'steven']));