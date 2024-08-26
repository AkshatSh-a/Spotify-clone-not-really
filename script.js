document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play');
    playButton.addEventListener('click', () => {
        playButton.textContent = playButton.textContent === 'Play' ? 'Pause' : 'Play';
    });
});
