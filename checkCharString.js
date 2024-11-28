function checkCharofStr(str){
    const newStr=str.replace(/\s/g, '').toLowerCase()
    const strArray=newStr.split('')
    const checkChar={}
    for (const element of strArray) {
       checkChar[element]=(checkChar[element]||0)+1 
    }
    return checkChar
   
}

const str='Hello WorLd!!'
const results= checkCharofStr(str)
console.log(results);
