function checkPrime(num) {
    if(num<2) return false

    for (let index = 2; index < Math.sqrt(num); index++) {
       if(num%index==0){
        return false
       }
        
    }
    return true
    
}



const result=checkPrime(18)
console.log(result);
