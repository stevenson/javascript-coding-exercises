function countItems(substring){
    let count=0;
    let maybe =0;
    let opened = false;
    for(let char of substring){
        if(opened){
            if(char == '|'){
                // closing pipe means closed 
                // closing is the new openning
                opened=true;
                count+=maybe;
                maybe=0;
            }else{
                maybe++;
            }
        }else{
            if(char == '|'){
                opened = true;
            }
        }
    }
    return count;
}
function count(string, startIndex, endIndex){
    let counts = [];
    for(let i=0; i<startIndex.length; i++){
        let start = startIndex[i]-1;
        let end = endIndex[i];
        let substring = string.substring(start ,end );
        console.log(substring, start, end);
        counts.push(countItems(substring));
    }
    return counts;
}

console.log(count('|**|*|*',[1,1],[5,6]));