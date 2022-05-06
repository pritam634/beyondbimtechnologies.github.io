window.addEventListener('scroll', () => {
    var backToTopPage = document.getElementById('backToTopPage');
    backToTopPage.classList.toggle("onScroll", window.scrollY > 100);
});