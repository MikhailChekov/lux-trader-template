export default function MenuHandler(menuClass, menuBtnClass, userMenuClass , userMenuBtnClass) {

    const userMenuBtn = document.querySelector(userMenuBtnClass),
            userMenu = document.querySelector(userMenuClass),
            menuBtn = document.querySelector(menuBtnClass),
            menu = document.querySelector(menuClass);
            

    let isMenuOpen = false,
        isUserMenuOpen = false;

    //click handler for user menu.
    userMenuBtn.addEventListener('click', userMenuToggler);

    function userMenuToggler() {
        // if(isUserMenuOpen) return;
        isUserMenuOpen = !isUserMenuOpen;
        userMenu.classList.toggle('user-header_active');
    }

    //click handler for menu.
    menuBtn.addEventListener("click", menuToggler);

    function menuToggler() {
        isMenuOpen = !isMenuOpen;
        menuBtn.classList.toggle("icon-menu_active");
        document.body.classList.toggle("lock");
        menu.classList.toggle("menu__body_active");
    }

    // close All menu after click to random document place.
    document.addEventListener('click', (e) => {
        if(!isMenuOpen && !isUserMenuOpen) return;

        if(isUserMenuOpen && !e.target.closest(userMenuBtnClass)) {
            userMenuToggler();
        }
        if(isMenuOpen && !e.target.closest(menuBtnClass)) {
            menuToggler();
        }
    })
}