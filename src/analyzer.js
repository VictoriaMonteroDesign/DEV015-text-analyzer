const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.   
    const word = text.split(" ");
    //const word = text.trim();
    const filteredWords = word.filter(word => word.length > 0);
    return filteredWords.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const textlength = text.length;
    return textlength;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textnospaces = text.replace(/[^\w]/g, '');
    const chartextnospaces = textnospaces.length;
    return chartextnospaces;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let totalLength = 0;
    for (const word of words) {
      totalLength += word.length;
    }
    const wordlengthaverage = totalLength / words.length;
    return parseFloat(wordlengthaverage.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numberPattern = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(numberPattern);
    if (!matches) {
      return 0;
    }
    return matches.length;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numberPattern = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(numberPattern);
    if (!matches) {
      return 0;
    }
    const numberSum = matches.reduce((sum, num) => sum + parseFloat(num), 0);
    
    return numberSum;
  },
};

export default analyzer;
