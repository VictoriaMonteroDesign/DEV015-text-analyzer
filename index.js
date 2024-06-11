import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

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
 
const resetbutton = document.getElementById("reset-button");
resetbutton.addEventListener('click', function () {
  textarea.value = ""; wordCountElem.textContent = "0"; CharCountElem.textContent = "0"; CharnospacesCountElem.textContent = "0";
  NumberCountElem.textContent = "0"; NumberSumElem.textContent = "0"; wordLengthAverageElem.textContent = "0"
});