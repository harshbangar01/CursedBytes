const audio = document.getElementById('startup-audio');
    const button = document.getElementById('start-btn');

    button.addEventListener('click', () => {
      audio.play();
      button.style.display = 'none'; // Hide button after click
    });