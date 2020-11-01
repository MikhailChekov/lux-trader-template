//async - await fix for babel;
import regeneratorRuntime from "regenerator-runtime";



(function () {
    // window.addEventListener("load", ready());
    document.addEventListener("DOMContentLoaded", ready);

    function ready() {
        //add event to click to header user menu
        document.querySelector('.user-header__icon').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.user-header__menu').classList.toggle('user-header_active');
            //TODO: hide to click any place, when open; implement listener on click to menu, and remove it after menu close; 
        })
    };
}());