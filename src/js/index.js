//async - await fix for babel;
import regeneratorRuntime from "regenerator-runtime";

import MenuHandler from './MenuHandler';
import Ibg from './Ibg';
import SliderOne from './SliderOne';
import MultySlider from './MultySlider';

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


        /*--------------------------- Sliders --------------------------------*/

        // Slider for 'Mainslider' section
        const mainSliderElems = '.main-slider__body',
        mainSliderBtns = '.control-main-slider__arrow_prev , .control-main-slider__arrow_next';
        SliderOne(mainSliderElems, mainSliderBtns);

        // Slider for 'lots' section
        const lotsSliderElems = '.slider-lots__body',
        lotsSliderBtns = '.control-slider-lots__arrow_l , .control-slider-lots__arrow_r';

        StartLotsSlider();
        
        // if user change screen resolution, we are restarting slider for adaptive
        window.addEventListener('resize', () => {
            StartLotsSlider();
        });
    
        function StartLotsSlider() {
            let clWidth = document.documentElement.clientWidth,
            lotsSliderPerView = 3;
            if(clWidth < 850 && clWidth > 551) {
                lotsSliderPerView = 2;
                MultySlider(lotsSliderElems, lotsSliderBtns, lotsSliderPerView);
            } else if (clWidth <= 550) {
                lotsSliderPerView = 1;
                MultySlider(lotsSliderElems, lotsSliderBtns, lotsSliderPerView);
            } else {
                MultySlider(lotsSliderElems, lotsSliderBtns, lotsSliderPerView);
            }
        }

    };
}());