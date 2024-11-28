function removeDuplicate(arr){

    const newArr=arr.reduce((acc,curr)=>{

        if(acc?.length==0){
            acc.push(curr)
        }
        if(acc?.length>0){

            const checkdup=acc?.find(item=>item.name===curr.name)
            if(!checkdup){
                acc.push(curr)
            };
           
            
        }
        return acc
      
        
      
    },[])
    return newArr
}



const arr= [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}]
const result=removeDuplicate(arr)
console.log(result);
