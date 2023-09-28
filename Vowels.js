// //Vowel Vs Consonant
// //create a javascript code that accept lower case letter
// //print the word followed by how mant consonants
// //prints the word followed by how many vowels

const arrayHello = "hello";
const Vowel = "aeiou";

let LetterVowel = 0;
let LetterConsonant = 0;

for (let i = 0; i < arrayHello.length; i++) {
  if (Vowel.indexOf(arrayHello[i]) !== -1) {
    LetterVowel += 1;
  } else {
    LetterConsonant += 1;
  }
}
console.log(
  "Helloo has" + LetterConsonant + "Consonants and" + LetterVowel + "vowel"
);

const arrayukelele = "ukelele";

for (let i = 0; i < arrayukelele.length; i++) {
  if (Vowel.indexOf(arrayukelele[i]) !== -1) {
    LetterVowel += 1;
  } else {
    LetterConsonant += 1;
  }
}

console.log(
  "ukelele has" + LetterConsonant + "Consonants and" + LetterVowel + "vowel"
);

const arrayawesome = "awesome";

for (let i = 0; i < arrayawesome.length; i++) {
  if (Vowel.indexOf(arrayawesome[i]) !== -1) {
    LetterVowel += 1;
  } else {
    LetterConsonant += 1;
  }
}
console.log(
  "Awsome has" + LetterConsonant + "Consonants and " + LetterVowel + "vowel"
);

const arrayonomonopia = "onomonopia";

for (let i = 0; i < arrayonomonopia.length; i++) {
  if (Vowel.indexOf(arrayonomonopia[i]) !== -1) {
    LetterVowel += 1;
  } else {
    LetterConsonant += 1;
  }
}
console.log(
  "onomonopia has" + LetterConsonant + "Consonants and" + LetterVowel + "vowel"
);

const arraytextbook = "textbook";

for (let i = 0; i < arraytextbook.length; i++) {
  if (Vowel.indexOf(arraytextbook[i]) !== -1) {
    LetterVowel += 1;
  } else {
    LetterConsonant += 1;
  }
}
console.log(
  "textbook has" + LetterConsonant + "Consonants and" + LetterVowel + "vowel"
);
