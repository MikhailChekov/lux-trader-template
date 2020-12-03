/**
 * *Usage: StaticTimer(flag, item, days, hours, min, sec)
 * flag - boolean, if true create more than 1 item.
 * item - string className, you can pass 1 or more elems separated by ','.
 * days, hours, min, sec - number, required elements.
*/

export default function StaticTimer(flag, item, days, hours, min, sec) {

    let dSec = days * 24 * 3600,
        hSec = hours * 3600,
        mSec = min * 60;

    let time = dSec + hSec + mSec + sec,
        elems = [],
        elem;

    if (flag) {
        elems = [...document.querySelectorAll(item)];
    } else {
        elem = document.querySelector(item);
    }

    let timer = setInterval(countdown, 1000);

    function countdown() {

        let daysN = Math.floor(time / (24 * 3600)),
            daysS = daysN * 24 * 3600,
            hoursN = Math.floor((time - daysS) / 3600),
            hoursS = hoursN * 3600,
            minN = Math.floor((time - (daysS + hoursS)) / 60),
            minS = minN * 60,
            secN = Math.floor(time - (daysS + hoursS + minS));


        if (elems.length) {
            elems.forEach(e => {
                e.innerHTML = `${daysN}:${hoursN}:${minN}:${secN}`;
            });
        } else {
            elem.innerHTML = `${daysN}:${hoursN}:${minN}:${secN}`;
        }
        time--;

        if (time <= 0) {
            clearInterval(timer);
        }
    }
}