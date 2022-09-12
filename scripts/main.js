let prevScrollpos = window.scrollY;
window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    const navbarCollapsible = document.querySelector("#navBar")
    if (prevScrollpos > currentScrollPos) {
        navbarCollapsible.style.top = "0";
        navbarCollapsible.classList.add('header-shrink');
    } else {
        navbarCollapsible.style.top = "-100px";
    }
    if(currentScrollPos < 1){
        navbarCollapsible.classList.remove('header-shrink');
    }
    prevScrollpos = currentScrollPos;
}
