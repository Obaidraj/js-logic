function findFactorial(num) {
    if(num==1||num==0){
        return 1
    }
    else{
        return num*findFactorial(num-1)
    }
    
}




const result=findFactorial(10)

console.log(result);
