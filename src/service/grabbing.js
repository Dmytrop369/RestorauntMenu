function addGrabbing(selector) {
    const scrollable = document.querySelector(selector);
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollable.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollable.classList.add('active');
        startX = e.pageX - scrollable.offsetLeft;
        scrollLeft = scrollable.scrollLeft;
    });

    scrollable.addEventListener('mouseleave', () => {
        isDown = false;
        scrollable.classList.remove('active');
    });

    scrollable.addEventListener('mouseup', () => {
        isDown = false;
        scrollable.classList.remove('active');
    });

    scrollable.addEventListener('mousemove', (e) => {
        if (!isDown) return; // якщо мишка не натиснута, нічого не робимо
        e.preventDefault();
        const x = e.pageX - scrollable.offsetLeft;
        const walk = (x - startX) * 3; // множник для пришвидшення прокрутки
        scrollable.scrollLeft = scrollLeft - walk;
    });

}

export {addGrabbing}