let isInputPressed = false;

let scrollStart = 0;
let scrollAmount = 0;

const track = document.getElementById("image-track")

const moveTrackerTo = (name) => {
    const element = document.getElementById(name);
    const gap = 8;
    const padding = 8;

    track.scrollLeft = element.offsetLeft - padding - gap;
}

const refresh = () => {
    isInputPressed = false;

    scrollStart = 0;
    scrollAmount = 0;

    track.scrollLeft = scrollAmount;
}

const onInputPress = event => {
    isInputPressed = true;

    scrollStart = event.pageX - track.offsetLeft;
    scrollAmount = track.scrollLeft;
}

const onInputRelease = () => {
    isInputPressed = false;
}

const onInputMove = event => {
    event.preventDefault();

    if (!isInputPressed) { 
        return; 
    }
    
    const difference = event.pageX - track.offsetLeft;
    const scroll = difference - scrollStart;

    track.scrollLeft = scrollAmount - scroll;
}

window.onload = refresh();

window.onmouseleave = event => onInputRelease(event);
window.onmouseup = () => onInputRelease();
window.onmousedown = event => onInputPress(event);
window.onmousemove = event => onInputMove(event);

window.ontouchstart = event => onInputPress(event.touches[0]);
window.ontouchmove = event => onInputMove(event.touches[0]);
window.ontouchend = () => onInputRelease();
window.ontouchcancel = event => onInputRelease(event.touches[0]);