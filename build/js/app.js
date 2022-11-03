window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const navegacion = document.querySelector('nav');

document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    navegacion.classList.toggle('active');
}