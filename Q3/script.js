function highlightLongWords() {
    const paragraph = document.getElementById("target-paragraph");
    const text = paragraph.textContent;
  
    // Split the text into words, considering punctuation as part of the word
    const words = text.split(/\W+/);
  
    let highlightedText = "";
    for (const word of words) {
      if (word.length > 8) {
        highlightedText += `<span class="highlight">${word}</span>`;
      } else {
        highlightedText += word;
      }
      highlightedText += " "; // Add a space after each word
    }
  
    paragraph.innerHTML = highlightedText;
  }
  
  highlightLongWords();
  