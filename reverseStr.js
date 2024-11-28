function reverseWords(str){
    const strArray=str.split(" ")
    const reverserd=[]
    for (let index = strArray.length; index>0; index--) {
        reverserd.push(strArray[index]);
      
        
    }
    return reverserd.join(" ")
}

const inputSentence = "The quick brown fox jumps over the lazy dog";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence:", reversedSentence);