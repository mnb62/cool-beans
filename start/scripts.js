// Track the mouse position
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX + 'px';
    const posY = e.clientY + 'px';

    document.body.style.setProperty('--x', posX);
    document.body.style.setProperty('--y', posY);
});


//Reusable cursor logic
const cursorEl = document.querySelector('.cursor');

function setCursor(value) {
    cursorEl.setAttribute('data-type', value);
}

function resetCursor() {
    cursorEl.setAttribute('data-type', 'default');
}

// Dynamically set cursor on elements with data-cursos

const cursorItems = document.querySelectorAll('[data-cursor]');

cursorItems.forEach(item => {
    const cursorValue = item.getAttribute('data-cursor');

    item.addEventListener('mouseover', () => setCursor(cursorValue));
    item.addEventListener('mouseleave', () => resetCursor());
});

// Autoplay videos on hover
const projectVideos = document.querySelectorAll('.project-item video');

projectVideos.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});
