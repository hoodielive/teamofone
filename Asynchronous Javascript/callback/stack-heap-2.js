function upperCaseFirst(word) 
{
  return word[0].toUpperCase() + word.slice(1); 
}

function upperCaseWords(sentence)
{
  let words = sentence.split(" "); 
  for (let i = 0; i < words.length; i++)
    {
      words[i] = upperCaseFirst(words[i]); 
    }
  return console.log(words.join(" "));
}

upperCaseWords("lowercase words"); 
