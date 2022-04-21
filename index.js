function isPalindrome(word) {
  let originalArray = word.split(``);
  let newArray = originalArray.reverse();
  let newWord = newArray.join(``);
  if (newWord === word) return true;
  else return false;
}

/* 
1. create funcion that takes one argument, a string
2. split the word in letters and put it in array(create new array)
3. put letters together from the last item of array to the first
4. compare to the new string to the one I passed
5. return true if its the same, otherwise return false
*/

/*
 If the new word that I created is equal to an argument, then function returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
