function handleEvenNumbers(arr){
    const newEvenArray=arr.reduce((acc,curr)=>{
        if(curr%2===0){
            acc.push(curr)
        }
        return acc
    },[])
    return newEvenArray
}



const arr=[2,3,4,55,6,66,7,6,88,90,98,43,321,44,32,55,6,98,65,43,54,54,44,32,12,11,24,54,90,87]
const results=handleEvenNumbers(arr)
console.log(results);
