const ul = document.querySelector('.navbar ul'),
    menu = document.querySelector('.menu-btn'),
    close = document.querySelector('.cancel-btn'),
    navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    ul.classList.add('activado');
    menu.classList.add('hiden');

    console.log("funcionando");
});

close.addEventListener('click', () => {
    ul.classList.remove('activado');
    menu.classList.remove('hiden');
});

window.addEventListener('scroll', () => this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky'));


var typed = new Typed('.element', {
    strings: ['',
        'YouTuber',
        'Desarrollador Web',
        'Front-end'
    ],
    typeSpeed: 40,
    backDelay: 700,
    backSpeed: 100,
    loop: true,
});

var typed = new Typed('.name', {
    strings: ['', 'Franklin kluibert'],
    typeSpeed: 40,
    backDelay: 700,
    backSpeed: 100,
    loop: true,
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// botoVer.addEventListener('click', () => {
//     botoVer.classList.toggle('.activado');
//     const nav = document.querySelector('.navbar');
//     nav.classList.toggle('open');
//     if (nav.classList.contains('open')) {
//         nav.style.maxHeight = nav.scrollHeight + 'px';
//     } else {
//         nav.removeAttribute('style');
//     }

//     console.log("no pasa nada");
// })


// window.addEventListener('scroll', () => {
//     if (document.documentElement.scrollTop > 20) {
//         navbar.classList.add('sticky')
//     } else {
//         navbar.classList.remove('sticky')
//     }
// });