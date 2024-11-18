const textInput = document.getElementById('textInput');
const wordcount = document.getElementById('wordcount');
const sentenceCount = document.getElementById('sentenceCount');

const handleTextInput = (event) => {
    const text = textInput.value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCountValue = words.length;

    const sentence = text.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
    const sentenceCountValue = sentence.length;


    wordcount.textContent = `Words: ${wordCountValue}`;
    sentenceCount.textContent = `Sentences: ${sentenceCountValue}`;
}

textInput.addEventListener('input', handleTextInput);