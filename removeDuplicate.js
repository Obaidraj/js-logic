//V1
const arr=[1,2,3,4,5,6,7,66,4,22,4,3,22,46,90,8,7,6,543,4,3,32,1,2,4,56]
function removeDuplicate(arr){
    const newArr=new Set(arr)
return ([...newArr])
}

// console.log(removeDuplicate(arr));
//v2
function removeDuplicateV2(arr){
    
    const newArr=arr.reduce((acc,curr)=>{
     if(acc?.length==0){
        acc.push(curr)  
     }
     else if(acc?.length>0&&!acc.includes(curr)){
        acc.push(curr)
     }
       
       return acc
       
    },[])
    return newArr
}
console.log(removeDuplicateV2(arr));

