import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const resetbutton = document.getElementById("reset-button");
resetbutton.addEventListener('click',function() {textarea.value="";});


const textarea = document.querySelector("textarea[name='user-input']");
const wordCountElem = document.querySelector('li[data-testid="word-count"]');
const CharCountElem = document.querySelector('li[data-testid="character-count"]');
const CharnospacesCountElem = document.querySelector('li[data-testid="character-no-spaces-count"]');
const NumberCountElem = document.querySelector('li[data-testid="number-count"]');
const NumberSumElem = document.querySelector('li[data-testid="number-sum"]');
const wordLengthAverageElem = document.querySelector('li[data-testid="word-length-average"]');

textarea.addEventListener('input', updatemetricas);
function updatemetricas() {
    const text = textarea.value;
    wordCountElem.textContent = analyzer.getWordCount(text);
    CharCountElem.textContent = analyzer.getCharacterCount(text);
    CharnospacesCountElem.textContent = analyzer.getCharacterCountExcludingSpaces(text);
    NumberCountElem.textContent = analyzer.getNumberCount(text);
    NumberSumElem.textContent = analyzer.getNumberSum(text);
    wordLengthAverageElem.textContent = analyzer.getAverageWordLength(text);

}





/*function updatewordlengthaverage() {
    const text = textarea.value;
    const words = text.split(" ");
    let totalLength = 0;

    for (const word of words) {
    totalLength += word.length;
}

const wordlengthaverage = (totalLength / words.length);

}


function updatenumbersum() {
   const text = textarea.value;
   //identificar espacios y signos de puntuacion
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
  
}

function updatenumbercount() {
   const text = textarea.value;
   //identificar espacios y signos de puntuacion
   let numberCount = 0;

  // Iterar sobre cada carácter en el texto
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // Verificar si el carácter es un número comparando con '0' a '9'
    if (char >= '0' && char <= '9') {
      numberCount++;
    }
}
}

function updateCountsCharnospaces() {
   const text = textarea.value;
   //identificar espacios y signos de puntuacion
   const textnospaces = text.replace(/[^\w]/g, '');
   //recorrer el texto y ignorar los espacios y signos
   //retornar la cantidad de cantidad de letras y numeros
   const chartextnospaces = textnospaces.length;
}

function updateCountsWord() {
    const text = textarea.value;
    //convertir el string text a un array para poder saber su largo
    const word = text.split(" ");
    //ahora debo averiguar como saber el largo de un array
    const wordlength = word.length;
    

    //analyzer.getWordCount();
//wordCountElem.textContent = getWordlength;
}


function updateCountsChar() {
    const text = textarea.value;
    //como saber el largo de text
    const textlength = text.length;
}



//function updateCounts(evento) {
//    console.log(evento)
//    const text = textarea.value;
//    const charCount = text.length;
//    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    
    //charCountElem.textContent = charCount;
    //wordCountElem.textContent = getWordCount;  
    
//}*/