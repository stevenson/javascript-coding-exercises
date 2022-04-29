function runningMedian(a) {
    //https://www.hackerrank.com/challenges/find-the-running-median/problem
    let list = [];
    let median = [];
    for (let element of a) {
        if (list[0] == null) {
            list[0] = element;
            median.push(element);
        } else {
            let newElementAdded = false;
            let i = 0;
            let oldLength = list.length;
            while (!newElementAdded) {
                if (i == oldLength) {
                    list.push(element);
                    newElementAdded = true;
                } else if (list[i] >= element) {
                    for (let j = oldLength; j > i; j--) {
                        list[j] = list[j - 1];
                        list[j - 1] = element;
                    }
                    newElementAdded = true;
                }
                i++;
            }
            let newlength = list.length;
            let index = Math.round(newlength / 2) - 1;
            if (newlength % 2 == 0) {
                median.push((list[index] + list[index + 1]) / 2);
            } else {
                median.push(list[index]);
            }
        }

    }
    return median;
}

function runningMedianV2(a) {
    //https://www.hackerrank.com/challenges/find-the-running-median/problem
    let list = [];
    let median = [];
    for (let element of a) {
        list.push(element);
        let newlength = list.length;
        for (let i = 1; i < newlength; ++i) {
            let key = list[i];
            let j = i - 1;
            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && list[j] > key) {
                list[j + 1] = list[j];
                j = j - 1;
            }
            list[j + 1] = key;
        }
        let index = Math.round(newlength / 2) - 1;
        if (newlength % 2 == 0) {
            median.push((list[index] + list[index + 1]) / 2);
        } else {
            median.push(list[index]);
        }
    }
    return median;
}

function runningMedianV3(a) {
    //https://www.hackerrank.com/challenges/find-the-running-median/problem
    let pos;
    let count = 1;
    let median = [];
    let j = 0;
    median.push(a[j]);
    for(let i =1; i<a.length; i++){
        j= i-1;
        let currentValue = a[i];
        pos = binarySearch(a,currentValue, 0, j );
        while(j >= pos){
            a[j+1] = a[j];
            j--;
        }
        a[j+1]=currentValue;
        count ++;
        if(count %2 !=0){
            median.push(a[parseInt(count / 2)]);
        }else{
            median.push(
                    (a[parseInt(count / 2) - 1] + a[parseInt(count / 2)]) 
                    / 2
                );
        }
    }
    return median;
}
const binarySearch = (arr, item, low, high) => {
    if (low >= high) {
        return (item > arr[low]) ? (low + 1) : low;
    }
    let mid = parseInt((low + high) / 2);
    if (item == arr[mid]){
        return mid + 1;
    }
    if (item > arr[mid]){
        return binarySearch(arr, item, mid + 1, high);
    }
    return binarySearch(arr, item, low, mid - 1);
}


// let arr = [5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4];
let arr = [5, 14, 1, 3];
console.log(runningMedianV3(arr));
//onsole.log(runningMedianV3([12,4,5,3,8,7]));
//console.log(runningMedianV2([1,2,3]));
// console.log(runningMedianV2([1,2,3,4,5,6,7,8,9,10]));
// console.log(runningMedianV2([
//     94455,
//     20555,
//     20535,
//     53125,
//     73634,
//     148,
//     63772,
//     17738,
//     62995,
//     13401,
//     95912,
//     13449,
//     92211,
//     17073,
//     69230,
//     22016,
//     22120,
//     78563,
// ]));