function findMaxConsecutiveOnes(arr){
    let maxCount = 0;
    let count=0
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]===1){
            count++
        }else{
            count=0
        }
        maxCount=Math.max(maxCount,count)
        
    }
    return maxCount
}




const inputArray = [1, 1, 0, 1, 1, 1, 0, 1,1,1,1,1,1];
const maxOnes = findMaxConsecutiveOnes(inputArray);
console.log("Maximum count of consecutive 1's:", maxOnes);