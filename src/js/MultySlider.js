/**
 * Usage: MultySlider(elems, btnContainer, count)
 * elems - string, className define container with elems;
 * btns - string with 2 classes separated by ',';
 * count - number elems, which we want show at once;
*/
export default function MultySlider(elems, btns, count) {
    elems = [...document.querySelectorAll(elems)[0].children],
        btns = document.querySelectorAll(btns);

    let position = [...new Array(count)].map((e, i) => e = i),
        prevPos = position,
        maxHeight = 0,
        heightCont = [];

    // hide extra elems
    for (let i = 0; i < elems.length; i++) {
        heightCont.push(elems[i].getBoundingClientRect().height);
        if (!position.includes(i)) {
            elems[i].style.display = "none";
        }
    }

    // do the same height to all elems for prevent slider container deformation
    // only for screen > 768px;
    // setMaxHeight();

    //prev
    btns[0].addEventListener('click', () => {
        prevPos = position;
        position = position.map(e => {
            return e === 0 ? elems.length - 1 : --e;
        });
        showElem(position, prevPos);
    });

    //next
    btns[1].addEventListener('click', () => {
        prevPos = position;
        position = position.map(e => {
            return e === elems.length - 1 ? 0 : ++e;
        });
        showElem(position, prevPos);
    });


    function showElem(pos, prevPos) {
        //show all
        pos.forEach(e => {
            elems[e].style.display = "block";
        });
        //hide some
        if (!compare(pos, prevPos)) {
            let dif = prevPos.filter(e => {
                return !pos.includes(e);
            })
            elems.forEach((e, i) => {
                if (dif.includes(i)) {
                    e.style.display = "none";
                }
            })
        }
        //check the difference between arrays
        function compare(arr1, arr2) {
            return arr1.length == arr2.length && arr1.every((e, i) => e === arr2[i]);
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