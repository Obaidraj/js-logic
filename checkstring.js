function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // If lengths differ, they can't be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  // Create frequency maps for both strings
  const charCount1 = {};
  const charCount2 = {};
  for (const char of cleanStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (const char of cleanStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }
  for (const key in charCount1) {
    if (charCount1[key] !== charCount2[key]) {
      return false;
    }
}
return true;
}

const string1 = "obaid";
const string2 = "dioba";
if (areAnagrams(string1, string2)) {
  console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
  console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
