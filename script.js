let scrollPositionY = window.scrollY;

let scroll = 0

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY - 255}px`);
    document.documentElement.style.setProperty('--scroll-y2', `${window.scrollY}px`);
    document.documentElement.style.setProperty('--scroll-y3', `${window.scrollY + 15}px`);
});