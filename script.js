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



let cartCount = 1;

const addToCartButton = document.querySelector('.add-to-cart-btn');
const cartCounter = document.querySelector('.contador');

function updateCartCounter() {
    cartCounter.textContent = cartCount;
}

addToCartButton.addEventListener('click', () => {
    cartCount++; 
    updateCartCounter(); 
    alert('produto adicionado'); 
});

updateCartCounter();



document.getElementById('openSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').style.display = 'none';
});