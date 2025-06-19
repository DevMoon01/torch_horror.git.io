const overlay = document.querySelector('.overlay');
const title = document.querySelector('.hero h1');
const image = document.querySelector('.hero img');

let time = 0;

function handleLightEffect(x, y) {
    time += 0.05;

    const offsetX = Math.sin(time * 100) * 10;
    const offsetY = Math.cos(time * 1.5) * 10;

    const lightX = x + offsetX;
    const lightY = y + offsetY;

    overlay.style.background = `
        radial-gradient(
            circle at ${lightX}px ${lightY}px,
            rgba(255, 255, 210, 0.5) 2px,
            rgba(0, 0, 0, 0.85) 80px,
            rgba(0, 0, 0, 0.97) 180px
        )
    `;

    const normX = (x / window.innerWidth - 0.5);
    const normY = (y / window.innerHeight - 0.5);

    title.style.transform = `translate(calc(-50% + ${normX * 30}px), calc(-50% + ${normY * 30}px))`;
    image.style.transform = `translate(${normX * 12}px, ${normY * 30}px)`; // immagine meno mobile
}

// Mouse
window.addEventListener('mousemove', (e) => {
    handleLightEffect(e.clientX, e.clientY);
});

// Touch
window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleLightEffect(touch.clientX, touch.clientY);
    }
}, { passive: true });





window.addEventListener('load', () => {
    handleLightEffect(window.innerWidth / 2, window.innerHeight / 2);
});
