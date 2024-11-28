function handleFlatAray(arr){
const newArr=arr.flat()
if(newArr.every(item=>typeof item!=="object")){
    return newArr
}
return handleFlatAray(newArr)
}


const arr=[1,2,[1,2,[1,21,232,114,[1,90,[22]]]]]
const arr2=[1,2,3]
const flatArray=handleFlatAray(arr)
// const flatArray2=handleFlatAray(arr2)
console.log(flatArray);

