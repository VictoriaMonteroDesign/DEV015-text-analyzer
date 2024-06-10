const analyzer = {  
  getWordCount: (text) => {   
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.   
    const word = text.split(" ");
    const wordlength = word.length;
    return wordlength; 
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

const wordlengthaverage = (totalLength / words.length);
return wordlengthaverage.toFixed(1)

  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numberCount = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= '0' && char <= '9') {
        numberCount++;
      }
    }
    return numberCount;
  },
  
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numberSum = 0;
    let currentNumber = '';
  
    for (const char of text) {
      if (char >= '0' && char <= '9') {
        currentNumber += char;
      } else {
        if (currentNumber !== '') {
          numberSum += Number(currentNumber);
          currentNumber = '';
        }
      }
    }
  
    if (currentNumber !== '') {
      numberSum += Number(currentNumber);
    }
    return numberSum;    
  },
};

export default analyzer;
