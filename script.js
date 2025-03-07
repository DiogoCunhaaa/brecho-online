const botaomodoescuro = document.getElementById('modoescuro');
const body = document.body;

modoescuro.addEventListener('click', () => {
    body.classList.toggle('modoescuro');
});

const elementos = document.querySelectorAll('');
    elementos.forEach(elemento => {
        elemento.classList.toggle('modoescuro');
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });