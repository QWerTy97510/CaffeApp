
function loadEvents() {
    burgerMenuScrollEvent();
}

loadEvents();


// Burger Menu Scroll Event --- MOVE THE BURGER MENU INSIDE AND OUTSIDE
function burgerMenuScrollEvent(){
    const hamburger = document.querySelectorAll('.burger-menu-lines');
    const burgerMenu = document.querySelector('.burger-menu');

    document.addEventListener('scroll', ()=>{
        if (pageYOffset >= 676) {
            hamburger.forEach(element=>{
                element.style.transform = 'translateX(0px)';
                burgerMenu.style.pointerEvents = 'all';
            })
        } else {
            hamburger[0].style.transform = 'translateX(100px)';
            hamburger[1].style.transform = 'translateX(150px)';
            hamburger[2].style.transform = 'translateX(200px)';
            burgerMenu.style.pointerEvents = 'none';
        }
    })
}

