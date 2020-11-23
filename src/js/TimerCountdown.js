export default function TimerCountdown(flag, item, days, hours, min, sec) {
    
    let dSec = days * 24 * 3600,
        hSec = hours * 3600,
        mSec = min * 60;

    let time = dSec + hSec + mSec + sec,
     elems = [],
     elem;

    if(flag) {
        elems = [...document.querySelectorAll(item)];
    } else {
        elem = document.querySelector(item);
    }

    // let timer = setInterval(countdown, 1000);

    //TODO: finish countdown
    function countdown() {
        // let daysT = Math.floor(time/(24 * 3600)),
        //     allD = daysT * 24 * 3600;
        //     hoursT = Math.floor((time - allD)/3600),
        //     allH = time - allD 
        //     minT = Math.floor((time - (daysT  + hoursT))/60),
        //     secT = Math.floor(time - (daysT + hoursT + minT));

        if(elems.length){
            elems.forEach(e => {
                e.innerHTML = `${daysT}:${hoursT}:${minT}:${secT}`;
            });
        } else {
            elem.innerHTML = `${daysT}:${hoursT}:${minT}:${secT}`;
        }
        time--;
    }
}