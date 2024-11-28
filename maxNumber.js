function findMaxNumber(arr){
    let max=-Infinity
    for (const element of arr) {
        if(element>max){
            max=element
        }
        
    }
    return max
}


const array=[1,43,321,4543,54,23,23,342,4,354,53,5325,234,234,32543,5345,345,456,459,6,99999]
const result=findMaxNumber(array)
console.log(result);
