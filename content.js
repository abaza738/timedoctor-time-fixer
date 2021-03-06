function blabla() {
    const items = document.getElementsByClassName("tracked-time");
    for (let item of items) {
        const time = item.innerHTML;
        if (getHours(time) == 0 && getMinutes(time) == 0) return;
        const hours = getHours(time) + getMinutes(time);
        item.innerHTML = hours;
    }
}

function getHours(time) {
    let hours = time.match(/\d+h/);
    if (hours) {
        hours = hours[0].split('h')[0];
        return +hours;
    }
    else return 0;
}

function getMinutes(time) {
    let minutes = time.match(/\d+m/);
    if (minutes) {
        minutes = +minutes[0].split('m')[0] / 60;
        return +minutes.toFixed(2);
    }
    else return 0;
}

setInterval(blabla, 1000);