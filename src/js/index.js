//async - await fix for babel;
import regeneratorRuntime from "regenerator-runtime";

import MenuHandler from './MenuHandler';
import Ibg from './Ibg';
import Slider from './Slider';

(function () {
    // window.addEventListener("load", ready());
    document.addEventListener("DOMContentLoaded", ready);

    function ready() {

        //Copy 'src' from img tag to background of a parent tag.
        Ibg();

        const userMenuBtnClass = '.user-header__icon', 
            userMenuClass = '.user-header__menu',
            menuBtnClass = '.icon-menu',
            menuClass = '.menu__body';

        // Handle header menu clicks
        MenuHandler(menuClass, menuBtnClass, userMenuClass , userMenuBtnClass);


        // MainSlider scripts
        const elems = '.main-slider__body',
        btnParent = '.control-main-slider__arrow_prev , .control-main-slider__arrow_next';
        Slider(elems, btnParent);
    };
}());