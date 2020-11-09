/**
 * Usage: simpleSlider(elems, btnContainer)
 * elems - string, className define container with elems;
 * btns - string with 2 classes separated by ',';
*/
export default function Slider(elems, btns) {
    elems = document.querySelectorAll(elems)[0].children,
    btns = document.querySelectorAll(btns);

    let position = 0,
    prevPos = 0,
    maxHeight = 0,
    heightCont = [];

    // hide extra elems
    for(let i = 0; i < elems.length; i++){
        heightCont.push(elems[i].getBoundingClientRect().height);
        if(i !== position){
            elems[i].style.display = "none";
        }
    }
    // do the same height to all elems for prevent slider container deformation
    // only for screen > 768px;
    setMaxHeight();
   
    //prev
    btns[0].addEventListener('click', () => {
        prevPos = position;
        position--;
        position = position < 0 ? (elems.length - 1) : position;
        showElem(position, prevPos);
    });

     //next
     btns[1].addEventListener('click', () => {
        prevPos = position;
        position++;
        position = position > (elems.length -1) ? 0 : position;
        showElem(position, prevPos);
    });

    function showElem (pos, prevPos) {
        elems[pos].style.display = "block";

        if(pos !== prevPos){
            elems[prevPos].style.display = "none";
        }
    }

    function setMaxHeight () {
        if(document.documentElement.clientWidth > 768){
            maxHeight = Math.max(...heightCont);
            for(const elem of elems) {
                elem.style.height = maxHeight+'px';
            }     
        }
    }
}
