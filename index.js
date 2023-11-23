let isInputPressed = false;

let scrollStart = 0;
let scrollAmount = 0;

const track = document.getElementById("image-track")

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

const onInputRelease = event => {
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
window.onmouseup = event => onInputRelease(event);
window.onmousedown = event => onInputPress(event);
window.onmousemove = event => onInputMove(event);

window.ontouchstart = event => onInputPress(event.touches[0]);
window.ontouchmove = event => onInputMove(event.touches[0]);
window.ontouchend = event => onInputRelease(event.touches);
window.ontouchcancel = event => onInputRelease(event.touches[0]);