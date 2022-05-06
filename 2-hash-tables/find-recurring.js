
function firstRecurringCharacter(array){
    // O(n)    
    let hash = {};
    for (let i=0; i < array.length; i++){
        console.log(i,  array[i], hash);
        if(hash[array[i]] !== undefined ){
            console.log('alahu');
            hash[array[i]] = true;
        }else{
            console.log('akbar');
            return array[i];
        }
    }
    return null;
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));