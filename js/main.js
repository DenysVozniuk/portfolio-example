const mobileBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleMenu = () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.contains('open') ? (
        mobileMenu.classList.remove('open'),
        mobileMenu.classList.add('close')
    ) : (
        mobileMenu.classList.remove('close'),
        mobileMenu.classList.add('open')
    );
};

mobileBtn.addEventListener('click', toggleMenu);