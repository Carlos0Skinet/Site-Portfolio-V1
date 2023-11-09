// Menu mobile
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});
// Fim menu mobile

// Scroll reveal
window.sr = ScrollReveal({ reset: true});

// topo do site
sr.reveal('.txt-topo-site', { 
    duration: 1500,
    distance: '90px'
});

sr.reveal('.img-topo-site img', { 
    duration: 1500,
    distance: '90px',
    delay: 500
});

// fim topo do site
// sobre
sr.reveal('.sobre .img-sobre img', { 
    duration: 1000,
    origin: 'left',
    distance: '90px',
    delay: 250
});

sr.reveal('.sobre .txt-sobre', { 
    duration: 1000,
    origin: 'right',
    distance: '28px',
    delay: 500
});
//fim sobre 
//portfolio
//fim portfolio
// formulario
sr.reveal('.dsnc', { 
    duration: 500,
    origin: 'bottom',
    distance: '50px',
    delay: 250
});
sr.reveal('.dse', { 
    duration: 500,
    origin: 'bottom',
    distance: '50px',
    delay: 500
});
sr.reveal('.dsc', { 
    duration: 500,
    origin: 'bottom',
    distance: '50px',
    delay: 750
});
sr.reveal('.esm', { 
    duration: 500,
    origin: 'bottom',
    distance: '50px',
    delay: 1000
});
sr.reveal('.btn-enviar', { 
    duration: 500,
    origin: 'top',
    distance: '28px',
    delay: 1250
});
//fim formulario
// Gerais
sr.reveal('.titulo', { 
    duration: 500,
    distance: '90px'
});

// Fim gerais
// Fim scroll reveal
