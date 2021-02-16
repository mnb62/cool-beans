// Track mouse position and add custom properties to the body
window.addEventListener('mousemove', (e) => {
	document.body.style.setProperty('--x', e.clientX + 'px');
	document.body.style.setProperty('--y', e.clientY + 'px');
});

// Create functions to easily change the cursor and reset it
const cursorEl = document.querySelector('.cursor');

function changeCursor(value) {
	cursorEl.setAttribute('data-type', value);
}

function resetCursor() {
	cursorEl.setAttribute('data-type', 'default');
}

// When an item contains the data-cursor attribute, change the cursor the the value
const cursorItems = document.querySelectorAll('[data-cursor]');

cursorItems.forEach((item) => {
	const cursorValue = item.getAttribute('data-cursor');

	item.addEventListener('mouseover', () => changeCursor(cursorValue));

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
