  // Fungsi untuk mengatur ulang animasi setelah 15 detik
  function restartTypingAnimation() {
    const typingElement = document.getElementById('typingAnimation');
    typingElement.style.animation = 'none';
    void typingElement.offsetParent; // Trigger reflow
    typingElement.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
}

// Mengatur ulang animasi setiap 15 detik
setInterval(restartTypingAnimation, 10000);

