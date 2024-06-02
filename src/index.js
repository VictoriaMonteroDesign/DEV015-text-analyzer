import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const resetbutton = document.getElementById("reset-button");
resetbutton.addEventListener('click',function() {textarea.value="";});


const textarea = document.querySelector("textarea[name='user-input']");
//const texto = textarea.value;

textarea.addEventListener('input', updateCounts);

const charCountElem = document.querySelector('.charCount span');
const wordCountElem = document.querySelector('.wordCount span');

function updateCounts(evento) {
    console.log(evento)
    const text = textarea.value;
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    
    charCountElem.textContent = charCount;
    wordCountElem.textContent = wordCount;    
}

updateCounts();