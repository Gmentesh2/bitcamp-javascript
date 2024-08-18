const deleteVowels = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let input = prompt("Enter desired word: ");

  for (let inp of input) {
    for (let vowel of vowels) {
      if (inp.toLowerCase() === vowel) {
        input = input.replace(inp, "");
      }
    }
  }
  console.log(input);
};

deleteVowels();
