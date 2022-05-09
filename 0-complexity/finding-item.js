function linearSearch(array, key){
    // time O(n)
    // space O(n)
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++){
        if(array[i] === key){ 
            return i; 
        }
    }
}

function binarySearch(array, key){
    // time O(log n)
    // space O(n)
    let t0 = performance.now();
    let i = Math.round(array.length/2);
    while(array.length > 0){
        if(key === array[i] ) {
           return i;
        }else if(key < array[i]){
            return binarySearch(array.slice(0,i), key );
        }else{
            return binarySearch(array.slice(i), key );
        }
    }
    return -1;
}


function run(myFunction, param1, param2){
    const t0 = performance.now();
    const result = myFunction(param1, param2);
    const t1 = performance.now();
    console.log(`${myFunction.name} result: ${result} at ${t1-t0} `);
}


console.log('scenario with only a few characters');
let array = Array.from([...'1234567'].keys());
let array2 = Array.from(Array(100).keys());
let array3 = Array.from(Array(100000).keys());

run(linearSearch, array, 2 );
run(binarySearch, array, 2 );
console.log('scenario with larger collection');
console.log(array);
run(linearSearch, array2, 50 );
run(binarySearch, array2, 50 );
console.log('scenario with even larger collection');
run(linearSearch, array3, 50000 );
run(binarySearch, array3, 50000 );

