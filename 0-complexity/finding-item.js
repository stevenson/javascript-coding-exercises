

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

let key = 50000;
let array = Array.from(Array(100000).keys());

run(linearSearch, array, key );
run(binarySearch, array, key );

