
function countPairsWithSum(sortedArray, sum) {
    let low = 0;
    let high = sortedArray.length - 1;
    let count = 0
    while (low < high) {
        const pairSum = sortedArray[low] + sortedArray[high];
        if (pairSum === sum) {
            count++;
            low++;
        } else if (pairSum > sum) {
            high--;
        } else {
            low++;
        }
    }
    return count;
}

function countPairsWithSumV2(unsortedArray, sum) {
    let complementArray = [];
    let count = 0;
    unsortedArray.forEach(element => {
        const complement = sum - element;
        // console.log(complement, complementArray, complementArray.includes(complement));
        if (complementArray.includes(complement)) {
            console.log('shit');
            count++;
        } else {
            complementArray.push(complement);
        }
    });
    return count;
}

/**
 * https://leetcode.com/problems/two-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let complements = [];
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if (complements[complement] !== undefined ) {
            return [complements[complement], i];
        } else {
            complements[nums[i]] = i;
        }     
    }   
};

//console.log(countPairsWithSum([1,2,4,5], 8));
//console.log(countPairsWithSumV2([1,2,4,4], 8));
//console.log(twoSum([1,2,4,4], 8));
console.log(twoSum([2, 7, 11, 15], 9));