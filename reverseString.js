const str='How to check whether a string is palindrome or not ?'

function reverseStr(str){
    let reversed=''
    for (let index = str.length-1; index >=0; index--) {
        reversed+=str[index]
       
        
        
    }
    return reversed


}
console.log(reverseStr(str));



