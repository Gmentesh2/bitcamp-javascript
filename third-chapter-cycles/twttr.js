
const deleteVowels = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let enteredString = prompt("Enter desired word: ");
  let resultString = ""

  for(let i = 0; i < enteredString.length; i ++){
    if(!vowels.includes(enteredString[i].toLowerCase())){
      resultString += enteredString[i];
    }
  }
  console.log(resultString)
}
deleteVowels();