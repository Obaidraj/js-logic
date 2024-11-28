//My Version

const palindromeString='iTopiNonAvevanoNipoti'
const nopalindromeString='Hello'
function checkPalindromeString(str){
    const strArray=str.split('').reverse().join('')
    const newStr=strArray
if(newStr.toLowerCase()===str.toLowerCase()){
    return true
}
else{
    return false
}

}

console.log(checkPalindromeString(palindromeString));
console.log(checkPalindromeString(nopalindromeString));


//ChatGPT version
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Compare the original string with the reversed string
    return cleanedStr === reversedStr;
}

// Example usage
const input = "A man, a plan, a canal, Panama";
if (isPalindrome(input)) {
    console.log(`"${input}" is a palindrome.`);
} else {
    console.log(`"${input}" is not a palindrome.`);
}

 