/**
 * *Usage: SliderOne(elems, btnContainer[,animate, animElem, animClass, animTime, typeOfStyle])
 * elems - string, className define container with elements.
 * btns - string with 2 classes separated by ','.
 * animFlag - boolean flag to use animation for some element, while switching.
 * animElem - string , with 1 classname for the element, which we are animating.
 * animClass - string with 1 classname, which we want to add for the element being animated.
 * animTime - number, the time at which the class 'animClass' will be added. Default = 1000
 * typeOfStyle - string, means the style which we assign to the active slide. Default = 'block'
*/
export default function SliderOne(elems, btns, animFlag, animElem, animClass, animTime = 1000, typeOfStyle = 'block') {
    elems = document.querySelectorAll(elems)[0].children,
        btns = document.querySelectorAll(btns);

    if (animFlag) {
        animElem = document.querySelector(animElem);
    }

    let position = 0,
        prevPos = 0,
        maxHeight = 0,
        heightCont = [],
        isAnimating = false;

    // hide extra elems
    for (let i = 0; i < elems.length; i++) {
        heightCont.push(elems[i].getBoundingClientRect().height);
        if (i !== position) {
            elems[i].style.display = "none";
        }
    }

    /*
        Sacrificing function for adaptive

        do the same height to all elems for prevent slider container deformation
        only for screen > 768px;
    */
    // setMaxHeight();

    //prev
    btns[0].addEventListener('click', () => {
        if (isAnimating) return;

        prevPos = position;
        position--;
        position = position < 0 ? (elems.length - 1) : position;
        showElem(position, prevPos);
    });

    //next (if more than 1 btn)
    if (btns[1]) {
        btns[1].addEventListener('click', () => {
            if (isAnimating) return;

            prevPos = position;
            position++;
            position = position > (elems.length - 1) ? 0 : position;
            showElem(position, prevPos);
        });
    }

    function showElem(pos, prevPos) {

        if (animFlag) {
            animate();
        }

        elems[pos].style.display = typeOfStyle;

        if (pos !== prevPos) {
            elems[prevPos].style.display = "none";
        }
    }

    function setMaxHeight() {
        // if(document.documentElement.clientWidth > 768){
        maxHeight = Math.max(...heightCont);
        for (const elem of elems) {
            elem.style.height = maxHeight + 'px';
        }
        // }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function animate() {

        isAnimating = true;
        console.log(animClass);
        animElem.classList.toggle(animClass);
        await delay(animTime);
        animElem.classList.toggle(animClass);
        isAnimating = false;
    }
}
