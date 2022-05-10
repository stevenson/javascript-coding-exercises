function contacts(queries) {
    // Write your code here
    let directory = {};
    let responses = [];
    for(let index=0; index < queries.length; index++){
        let query = queries[index];
        console.log(query);
        if(query[0]==='add'){
            for(let i=0; i<= query[1].length; i++){
                let key = query[1].substring(0,i);
                if(directory[key]){
                    directory[key] = directory[key] + 1;
                }else{
                    directory[key] = 1;
                }
            }
        }else{
            responses.push(directory[query[1]] || 0);
        }
    }
    return responses;
}

console.log(contacts([
    ['add', 's'],
    ['add', 'ss'],
    ['add', 'sss'],
    ['add', 'ssss'],
    ['add', 'sssss'],
    ['find', 's'],
    ['find', 'ss'],
    ['find', 'sss'],
    ['find', 'ssss'],
    ['find', 'sssss'],
]));