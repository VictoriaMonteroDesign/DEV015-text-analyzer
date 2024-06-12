const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.   
    const word = text.split(" "); // convierte el texto en un array, donde el elemento que divide los elementos para el array es un espacio
    //const word = text.trim();
    const filteredWords = word.filter(word => word.length > 0); 
    return filteredWords.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const textlength = text.length; // En el text detecta y contabiliza todo los caracteres presentes en su largo
    return textlength;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textnospaces = text.replace(/[^\w]/g, '');
    const chartextnospaces = textnospaces.length; //contabiliza los caracteres del largo del elemento modificado que ha devuelto el replace
    return chartextnospaces;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let totalLength = 0; //valor de inicio 
    for (const word of words) {  // word es la constante que contendra la longitud de cada array words que vaya sacando el split desde el texto e forma iterativa
      totalLength += word.length; // al valor de inicio se le suma el largo de la siguiente word que agarre del array words en cada bucle
    }
    const wordlengthaverage = totalLength / words.length; // divide mi total de caracteres en mi total de palabras para generar el promedio
    return parseFloat(wordlengthaverage.toFixed(2)); // retorna un elemento numero (que tiene capacidad decimal) con max 2 decimales redondeados
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numberPattern = /\b\d+(\.\d+)?\b/g; //Indica que lo que se define debe estar de principio a fin en al palabra, que debe ser un digito entre 0 y 9 y puede ser uno o mas, que el punto es parte del digito pero no es oblligacion que este, y esto debe buscarlo en todo el texto.
    const matches = text.match(numberPattern); //busca todas las coincidencias dentro del text con la constante numberPattern
    if (!matches) {
      return 0; // !matches es que si la busqueda resulta en null o undefined lo considera true y lo devuelve y contabiliza como 0
    }
    return matches.length; // entrega la cantidad de numeros (que correspondan con matches) que encuentre en el texto
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numberPattern = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(numberPattern);
    if (!matches) {
      return 0;
    }
    const numberSum = matches.reduce((sum, num) => sum + parseFloat(num), 0); // Reduce toma los valores en la cadena guardados por matches y los reduce a un valor unico acumulado, la formula es ((el valor acumulado hasta el momento, el nuevo valor que se esta procesando) VA + numero con decimal(VP), valor de inicio de la formula) 
    
    return numberSum; //entrega el resultado final total de las sumas que produjo con reduce
  },
};

export default analyzer;
