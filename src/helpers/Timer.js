export const secondsToTime = (secondsValue) => {
    let hours = Math.floor(secondsValue / 3600);
    let minutes = Math.floor((secondsValue - (hours * 3600)) / 60);
    let seconds = secondsValue - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hours + ':' + minutes + ':' + seconds;
};