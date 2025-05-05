function searchWord() {
    const text = document.querySelector("#textArea").value.toLowerCase();
    const query = document.querySelector("#searchInput").value.trim().toLowerCase();
    const resultDiv = document.querySelector("#result");
  
    if (!query) {
      resultDiv.textContent = "Zəhmət olmasa axtarış üçün hərf və ya söz daxil edin.";
      return;
    }
  
    const words = text.match(/\b\w+\b/g) || [];
    const matchedWords = words.filter(word => word.toLowerCase().includes(query));
  
    if (matchedWords.length > 0) {
      resultDiv.innerHTML = `"${query}" daxil olan sözlər (${matchedWords.length}): <br><strong>${matchedWords.join(', ')}</strong>`;
    } else {
      resultDiv.textContent = `"${query}" daxil olan heç bir söz tapılmadı.`;
    }
  }
  