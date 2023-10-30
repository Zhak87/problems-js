function makeTitleCase(input) {
  const words = input.split(" ");
  const titleCasedWords = [];
  for (const word of words) {
    if (word.length > 0) {
      const titleCasedWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      titleCasedWords.push(titleCasedWord);
    } else {
      titleCasedWords.push(word);
    }
  }
  const titleCasedString = titleCasedWords.join(" ");

  return titleCasedString;
}

export default makeTitleCase;
