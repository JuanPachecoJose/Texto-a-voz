
document.addEventListener('DOMContentLoaded', () => {
    const speechButton = document.getElementById('speech-button');
    const textToSpeech = document.getElementById('text-to-speech');

    speechButton.addEventListener('click', () => {
        const text = textToSpeech.value.trim();
        if (text !== '') {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            alert('Por favor, escribe algo para convertir a voz:');
        }
    });
});
