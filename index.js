anime({
    targets: '.anime',
    d: [
        { value: (el) => el.getAttribute('data-morph-to'), duration: (el, i) => 6000 },
        { value: (el) => el.getAttribute('d'), duration: (el, i, l) => 6000 }
    ],
    loop: true,
    easing: 'linear',
    update: () => {
        // const el = document.getElementById('defs');
        // el.style.display = 'none';
        // el.offsetWidth;
        // el.style.display = 'block';
    }
})