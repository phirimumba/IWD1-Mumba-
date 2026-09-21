window.addEventListener('scroll',() => {

const initialContainer = document.querySelector('.first-container');
const stickyContainer = document.querySelector('.sticky-container');

const  scrollThreshold = 10;

if (window.scrollY > scrollThreshold) {
    initialContainer.classList.add('scroll-hidden');
    stickyContainer.classList.remove('scroll-hidden');
} else{
    initialContainer.classList.remove('scroll-hidden');
    stickyContainer.classList.add('scroll-hidden');
}

});