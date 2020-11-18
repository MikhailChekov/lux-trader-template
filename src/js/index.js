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


        // Slider for 'Mainslider' section
        const mainSliderElems = '.main-slider__body',
        mainSliderBtns = '.control-main-slider__arrow_prev , .control-main-slider__arrow_next';
        SliderOne(mainSliderElems, mainSliderBtns);


        // Slider for 'lots' section
        const lotsSliderElems = '.slider-lots__body',
        lotsSliderBtns = '.control-slider-lots__arrow_l , .control-slider-lots__arrow_r';

        StartSlider();

        window.addEventListener('resize', () => {
            StartSlider();   
        });
        
        function StartSlider() {
            let clWidth = document.documentElement.clientWidth,
            lotsSliderCounts = 3;
            if(clWidth < 970 && clWidth > 479) {
                lotsSliderCounts = 2;
                MultySlider(lotsSliderElems, lotsSliderBtns, lotsSliderCounts);
            } else if (clWidth <= 478) {
                lotsSliderCounts = 1;
                MultySlider(lotsSliderElems, lotsSliderBtns, lotsSliderCounts);
            } else {
                MultySlider(lotsSliderElems, lotsSliderBtns, lotsSliderCounts);
            }
        }

    };
}());