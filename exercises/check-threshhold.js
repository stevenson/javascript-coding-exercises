function processLogs(logs, threshold) {
    let map = {};
    // Write your code here
    let overThresholdChecker = {};
    let overThreshold =[]
    for(let log of logs){
        let transaction = log.split(" ");
        let sender = transaction[0];
        let receiver = transaction[1];
        let amount = transaction[2];
        
        if(map[sender]){
            map[sender] = map[sender]+1;
        }else{
            map[sender] = 1;
        }

        if(map[sender] > threshold){
            overThreshold.push(sender);
        }

        if(sender !== receiver){
            if(map[receiver]){
            map[receiver] = map[receiver]+1;
            }else{
                map[receiver] = 1;
            }
            if(map[receiver] > threshold){
                overThreshold.push(receiver);
            }
        } 
        //console.log(map);
        
        
    }
    return overThreshold;
}

// console.log(processLogs(["1 2 50", "1 7 70", "1 3 20", "2 2 17"], 2));
console.log(processLogs(["9 7 50",
    "22 7 20",
    "33 7 50",
    "22 7 30"
    ], 3));