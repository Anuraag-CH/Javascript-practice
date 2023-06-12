/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }
  //step 1 is to count the number of individual letters

  str1LetterCount = getLetterCount(str1)
  str2LetterCount = getLetterCount(str2)


  for (key in str1LetterCount) {
    if (str1LetterCount[key] != str2LetterCount[key]) {
      return false
    }
  }

  return true


}


function getLetterCount(str) {
  countObject = {}

  for (i = 0; i < str.length; i++) {
    if (countObject[str[i]]) {
      countObject[str[i]] += 1
    }
    else {
      countObject[str[i]] = 1
    }

  }
  return countObject

}

module.exports = isAnagram;

