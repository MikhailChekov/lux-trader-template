/**
 * * Usage: ActiveOnScroll(pageElems, linkElems[, classToElem, BEMmode, offset])
 *  pageElems - string, Id selector for document.duerySelectorAll to section elements.
 *  navClass - string, Nav className for document.duerySelector for apply offset.
 * classToElem  string   - class concatinate with element last class, default name -  '_active'.
 * 
 *  BEMmode booleand - if true, copy elem last class and concatinate with classToElem,
 *  looks like - elemLastClass + _active =>  elemLastClass_active
 * when elements showing user
 * 
 *  Offset number, header height , default 75.
*/


export default function ActiveOnScroll(pageElems, linkElems, classToElem = '_active', BEMmode = true, offset = 75) {


    let activeClass = BEMmode ? linkElems.substr(1) + classToElem : classToElem,
        prevActive,
        currActive;

    pageElems = [...document.querySelectorAll(pageElems)];
    linkElems = [...document.querySelectorAll(linkElems)];

    if (pageElems.length) {
        changeActive();
        window.addEventListener('scroll', changeActive);

    } else {
        console.error('No elements in container AnimateOnScroll');
    }

    function changeActive() {
        pageElems.forEach((e) => {
            let params = e.getBoundingClientRect();

            if ((params.top + offset) >= 0 && (params.bottom - offset) <= params.height) {
                let elem = document.querySelector(`[href*="${e.getAttribute('id')}"]`);
                currActive = elem;
                if (currActive === prevActive) return;

                if (!elem.classList.contains(activeClass)) {
                    elem.classList.add(activeClass);
                    if (prevActive) {
                        prevActive.classList.remove(activeClass);
                        prevActive = currActive;
                    } else {
                        prevActive = currActive;
                    };
                }
            }
        });
    }
}