const sentance='Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable pneumonoultramicroscopicsilicovolcanoconiosis relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.'
function longWord(sentance){
    const wordArray=sentance.split(' ')
    let currentMaxLength=-Infinity
    let currentMax=''
    for (const element of wordArray) {
        
      if(element.length>currentMaxLength){
        currentMaxLength=element.length
        currentMax=element
      }
    }
    return ({word:currentMax,length:currentMaxLength})

}

console.log( longWord(sentance));
