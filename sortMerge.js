const arr1=[0,3,4,31]
const arr2=[4,6,30]
function mergeSort(arr1,arr2){
    const newArr=[...arr1,...arr2]
   
    return newArr.sort((a,b)=>a-b)
    
}


const result=mergeSort(arr1,arr2)
console.log(result);
