/**
 * *Usage: MultySlider(elems, btnContainer, count)
 * elems - string, className define container with elems;
 * btns - string with 2 classes separated by ',';
 * count - number elems, which we want show at once;
*/
export default function MultySlider(elems, btns, count) {
    elems = [...document.querySelectorAll(elems)[0].children],
        btns = document.querySelectorAll(btns);

    let position = [...new Array(count)].map((e, i) => e = i),
        maxHeight = 0,
        heightCont = [];

    //  show/hide extra elems
    for (let i = 0; i < elems.length; i++) {
        heightCont.push(elems[i].getBoundingClientRect().height);
        if (!position.includes(i)) {
            elems[i].style.display = "none";
        } else {
            elems[i].style.display = "block";
        }
    }

    // do the same height to all elems for prevent slider container deformation
    // only for screen > 768px;
    // setMaxHeight();

    //prev
    btns[0].addEventListener('click', () => {
        position = position.map(e => {
            return e === 0 ? elems.length - 1 : --e;
        });
        showElem(position);
    });

    //next
    btns[1].addEventListener('click', () => {
        position = position.map(e => {
            return e === elems.length - 1 ? 0 : ++e;
        });
        showElem(position);
    });


    function showElem(pos) {
        //hide all 
        elems.forEach(e => {
            e.style.display = "none";
        })
        //show some
        pos.forEach(e => {
            elems[e].style.display = "block";
        });
    }

    function setMaxHeight() {
        if (document.documentElement.clientWidth > 768) {
            maxHeight = Math.max(...heightCont);
            for (const elem of elems) {
                elem.style.height = maxHeight + 'px';
            }
        }
    }
}