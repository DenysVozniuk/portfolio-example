const mobileBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

const toggleMenu = () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.contains('open') ? (
        mobileMenu.classList.remove('open'),
        mobileMenu.classList.add('close'),
        body.removeAttribute('style')
    ) : (
        body.setAttribute('style', 'overflow: hidden'),
        mobileMenu.classList.remove('close'),
        mobileMenu.classList.add('open')
    );
};

mobileBtn.addEventListener('click', toggleMenu);