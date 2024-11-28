function checkLargeNumber(arr){
    const newArr=arr.flat()
    if(newArr.every(item=>typeof item!=="object")){
        return newArr
    }
    else{
        return checkLargeNumber(newArr)
    }
}



function checkMaxNumber(arr){
    const flatArr=checkLargeNumber(arr)
    let max=-Infinity
    for (const element of flatArr) {
        if(element>max){
            max=element
        }
        
    }
    return max
}


const arr= [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
const result=checkMaxNumber(arr)
console.log(result);
