
    function searchWord() {
      const text = document.querySelector("#textArea").value;
      const word = document.querySelector("#searchInput").value.trim();
      const resultDiv = document.querySelector("#result");

      if (!word) {
        resultDiv.textContent = "Zəhmət olmasa söz daxil edin." ;
        return;
      }

      const words = text.match(/\b\w+\b/g) || [];
      const count = words.filter(w => w === word).length;

      if (count > 0) {
        resultDiv.textContent = `"${word}" sözündən ${count} ədəd tapıldı.` ;
      } else {
        resultDiv.textContent = `"${word}" sözündən yoxdur.`;
      }
    }
 
