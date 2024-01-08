document.addEventListener('DOMContentLoaded', function () {
    const txtInput = document.getElementById('txt-input');
    const trBtn = document.getElementById('tr-btn');
    const dlBtn = document.getElementById('dl-btn');
    trBtn.addEventListener('click', () => {
      const mensaje = new SpeechSynthesisUtterance(txtInput.value);
      window.speechSynthesis.speak(mensaje);
      dlBtn.removeAttribute('disabled');
    });
    dlBtn.addEventListener('click', () => {
      const mensaje = new SpeechSynthesisUtterance(txtInput.value);
      const blob = new Blob([mensaje], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'audio.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
