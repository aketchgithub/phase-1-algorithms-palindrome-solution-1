function reverseString(word){
  //{create an array from the input string
  // const wordArray = word.split("")
  //reverse the array
  // const reversedWordArray = wordArray.reverse();
  //create a string from the reversed array
  // const reversedWord = reversedWordArray.join("");
  //return the reversed string
  // return reversedWord;} // to ensure our code is neat we can save on a few variable declarations by using method chaining in our function 
  return word.split("").reverse().join("");
  
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  //{ if (word === reversedWord) {
  //   return true;                // to avoid redundancy we simply return the result of the comparison
  // } else{
  //   return false;
  // } }
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  // if the reversed string is the same as the input return true
  // else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("")

  console.log("Expecting:, false");
  console.log("=>", isPalindrome("hi"))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
