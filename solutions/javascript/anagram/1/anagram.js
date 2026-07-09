//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isAnagram = (anagram, candidate) => {
  if (anagram.length !== candidate.length || anagram === candidate) {
    return false;
  }

  const counter = {};
  for (const item of anagram) {
    counter[item] = (counter[item] || 0) + 1;
  }

  for (const item of candidate) {
    if (!counter[item]) return false;
    counter[item]--;
  }
  return true;
};

export const findAnagrams = (anagram, candidates) => {
  const lowerAnagram = anagram.toLowerCase();

  return candidates.filter((candidate) => {
    const lowerCandidate = candidate.toLowerCase();
    return isAnagram(lowerAnagram, lowerCandidate);
  });
};
